'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2, Award, ArrowRight } from 'lucide-react';

export default function CertificationRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new admin certification section
    router.replace('/admin?tab=certifications');
  }, [router]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-gray-100 shadow-lg text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto text-brand-primary">
          <Award className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 font-serif">Relocated to Admin Portal</h2>
        <p className="text-xs text-gray-500">
          The Gambo Consultancy Certificate Generator has been centralized inside the Admin Portal.
          Redirecting you now...
        </p>
        <div className="pt-2">
          <Loader2 className="w-5 h-5 animate-spin text-brand-primary mx-auto" />
        </div>
        <div className="pt-4 border-t border-gray-100">
          <Link
            href="/admin?tab=certifications"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-primary-light"
          >
            Click here if not redirected automatically <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
