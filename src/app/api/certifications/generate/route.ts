import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { saveCertificate } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    // 1. Authenticate
    const cookieStore = await cookies();
    const token = cookieStore.get('cert_admin_token');
    const adminSecret = process.env.CERT_ADMIN_SECRET;

    if (!token || token.value !== adminSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Get trainee name & department
    const { traineeName, department } = await request.json();
    if (!traineeName || !traineeName.trim()) {
      return NextResponse.json({ error: 'Trainee name is required' }, { status: 400 });
    }

    // 3. Load the existing PDF template
    let pdfPath = path.join(process.cwd(), 'public', 'cert', 'Certification.pdf');
    
    // Check if file exists (case sensitivity check)
    if (!fs.existsSync(pdfPath)) {
      const lowerPath = path.join(process.cwd(), 'public', 'cert', 'certification.pdf');
      if (fs.existsSync(lowerPath)) {
        pdfPath = lowerPath;
      } else {
        return NextResponse.json({ error: 'Certificate template not found' }, { status: 404 });
      }
    }

    const existingPdfBytes = fs.readFileSync(pdfPath);

    // 4. Load PDF with pdf-lib
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    // 5. Embed font
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontSize = 40;

    // 6. Calculate text width for centering
    const nameWidth = font.widthOfTextAtSize(traineeName.trim(), fontSize);
    const x = (width - nameWidth) / 2;
    const y = height * 0.455;

    // 7. Draw the text
    firstPage.drawText(traineeName.trim(), {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.08, 0.5, 0.24), // Gambo brand primary
    });

    // 8. Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // 9. Persist real certificate record to storage
    const savedCert = await saveCertificate({
      traineeName: traineeName.trim(),
      department: department || 'Leadership Consultancy',
    });

    // 10. Return the PDF
    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${traineeName.trim().replace(/\s+/g, '_')}_Gambo_Consultancy_Certificate.pdf"`,
        'X-Certificate-Id': savedCert.id,
        'X-Certificate-Date': savedCert.issueDate,
      },
    });

  } catch (error: any) {
    console.error('Certificate generation error:', error);
    return NextResponse.json({ error: 'Failed to generate certificate: ' + error.message }, { status: 500 });
  }
}
