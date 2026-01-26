import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    // 1. Authenticate
    const cookieStore = await cookies();
    const token = cookieStore.get('cert_admin_token');
    const adminSecret = process.env.CERT_ADMIN_SECRET;

    if (!token || token.value !== adminSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Get trainee name
    const { traineeName } = await request.json();
    if (!traineeName) {
      return NextResponse.json({ error: 'Trainee name is required' }, { status: 400 });
    }

    // 3. Load the existing PDF template
    const pdfPath = path.join(process.cwd(), 'public', 'cert', 'Certification.pdf');
    
    // Check if file exists (case sensitivity check)
    if (!fs.existsSync(pdfPath)) {
        // Try lowercase just in case
        const lowerPath = path.join(process.cwd(), 'public', 'cert', 'certification.pdf');
        if (!fs.existsSync(lowerPath)) {
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
    // Note: This is an approximation. pdf-lib's width calculation is more accurate.
    const nameWidth = font.widthOfTextAtSize(traineeName, fontSize);
    
    // Position: Center horizontally, and roughly middle vertically
    // We might need to adjust y based on the actual template layout
    // Usually names are placed at about 50-60% of the height
    const x = (width - nameWidth) / 2;
    const y = height * 0.455; // Moving slightly up from previous 0.43 position

    // 7. Draw the text
    firstPage.drawText(traineeName, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.08, 0.5, 0.24), // #15803D equivalentish
    });

    // 8. Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // 9. Return the PDF
    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${traineeName.replace(/\s+/g, '_')}_Gambo_Consultancy_Certificate.pdf"`,
      },
    });

  } catch (error: any) {
    console.error('Certificate generation error:', error);
    return NextResponse.json({ error: 'Failed to generate certificate: ' + error.message }, { status: 500 });
  }
}
