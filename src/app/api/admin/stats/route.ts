import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getInquiries, getCertificates, getMasterclassRegistrations } from '@/lib/storage';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('cert_admin_token');
    const adminSecret = process.env.CERT_ADMIN_SECRET;

    if (!token || token.value !== adminSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const inquiries = await getInquiries();
    const certificates = await getCertificates();
    const masterclassRegistrations = await getMasterclassRegistrations();

    // 1. Compute Real KPIs from Neon PostgreSQL
    const totalInquiries = inquiries.length;
    const newInquiries = inquiries.filter((i) => i.status === 'New').length;
    const activeConsultations = inquiries.filter(
      (i) => i.status === 'In Progress' || i.status === 'Contacted'
    ).length;
    const completedConsultations = inquiries.filter(
      (i) => i.status === 'Completed'
    ).length;
    const certificatesIssued = certificates.length;
    const masterclassCount = masterclassRegistrations.length;

    // 2. Compute Real Department Breakdown
    const deptColors: Record<string, string> = {
      'Educational Consultancy': '#15803D',
      'IT Consultancy': '#0284C7',
      'Leadership Consultancy': '#7C3AED',
      'Mentorship Consultancy': '#D97706',
      'Life Coaching Consultancy': '#E11D48',
      'General Inquiry': '#4B5563',
    };

    const deptCounts: Record<string, number> = {
      'Educational Consultancy': 0,
      'IT Consultancy': 0,
      'Leadership Consultancy': 0,
      'Mentorship Consultancy': 0,
      'Life Coaching Consultancy': 0,
    };

    inquiries.forEach((inq) => {
      const dept = inq.department || 'General Inquiry';
      deptCounts[dept] = (deptCounts[dept] || 0) + 1;
    });

    const departmentBreakdown = Object.entries(deptCounts).map(([name, count]) => {
      const percentage = totalInquiries > 0 ? Math.round((count / totalInquiries) * 100) : 0;
      return {
        name,
        count,
        percentage,
        color: deptColors[name] || '#6B7280',
      };
    });

    // 3. Compute Real Monthly Trends (Past 6 months)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    const monthlyTrends = [];

    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = d.getFullYear();
      const monthIdx = d.getMonth();
      const monthLabel = monthNames[monthIdx];

      const inqCount = inquiries.filter((item) => {
        const itemDate = new Date(item.createdAt);
        return itemDate.getFullYear() === year && itemDate.getMonth() === monthIdx;
      }).length;

      const certCount = certificates.filter((item) => {
        const itemDate = new Date(item.createdAt);
        return itemDate.getFullYear() === year && itemDate.getMonth() === monthIdx;
      }).length;

      monthlyTrends.push({
        month: monthLabel,
        inquiries: inqCount,
        certificates: certCount,
      });
    }

    // 4. Compute Real Recent Activity Stream
    const activities = [
      ...certificates.map((c) => ({
        id: `act-cert-${c.id}`,
        type: 'certificate',
        title: 'Certificate Issued',
        description: `Official credential generated for ${c.traineeName} (${c.department})`,
        timestamp: formatTimeAgo(c.createdAt),
        rawTime: new Date(c.createdAt).getTime(),
      })),
      ...inquiries.map((inq) => ({
        id: `act-inq-${inq.id}`,
        type: 'inquiry',
        title: 'New Consultation Inquiry',
        description: `${inq.name} requested ${inq.department}`,
        timestamp: formatTimeAgo(inq.createdAt),
        rawTime: new Date(inq.createdAt).getTime(),
      })),
      ...masterclassRegistrations.map((m) => ({
        id: `act-mcr-${m.id}`,
        type: 'masterclass',
        title: 'Masterclass Registration',
        description: `${m.fullName} (${m.organization || 'Participant'}) registered for Masterclass 2026`,
        timestamp: formatTimeAgo(m.createdAt),
        rawTime: new Date(m.createdAt).getTime(),
      })),
    ]
      .sort((a, b) => b.rawTime - a.rawTime)
      .slice(0, 10);

    const masterclassConfirmed = masterclassRegistrations.filter((m) => m.status === 'Confirmed').length;
    const masterclassAttended = masterclassRegistrations.filter((m) => m.status === 'Attended').length;

    return NextResponse.json({
      kpis: {
        totalInquiries,
        newInquiries,
        activeConsultations,
        completedConsultations,
        certificatesIssued,
        masterclassCount,
        masterclassConfirmed,
        masterclassAttended,
      },
      monthlyTrends,
      departmentBreakdown,
      recentActivity: activities,
      inquiries,
      certificates,
      masterclassRegistrations,
    });
  } catch (error: any) {
    console.error('Stats computation error:', error);
    return NextResponse.json(
      { error: 'Failed to compute real stats: ' + error.message },
      { status: 500 }
    );
  }
}

function formatTimeAgo(isoString: string): string {
  if (!isoString) return 'Just now';
  const diffMs = Date.now() - new Date(isoString).getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes < 1) return 'Just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays}d ago`;
  return new Date(isoString).toLocaleDateString();
}
