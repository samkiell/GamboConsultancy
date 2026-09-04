'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Download,
  Loader2,
  Maximize2,
  X as CloseIcon,
  Search,
  CheckCircle2,
  Award,
  Sparkles,
  Inbox,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CertificateRecord {
  id: string;
  traineeName: string;
  department: string;
  issueDate: string;
  status: string;
}

export function AdminCertifications() {
  const [traineeName, setTraineeName] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('Leadership Consultancy');
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Real certificates from storage
  const [certificates, setCertificates] = useState<CertificateRecord[]>([]);
  const [isLoadingCertificates, setIsLoadingCertificates] = useState(true);

  const fetchCertificates = async () => {
    setIsLoadingCertificates(true);
    try {
      const res = await fetch('/api/admin/certifications');
      if (res.ok) {
        const data = await res.json();
        setCertificates(data.certificates || []);
      }
    } catch (err) {
      console.error('Failed to load certificates:', err);
    } finally {
      setIsLoadingCertificates(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!traineeName.trim()) return;

    setIsGenerating(true);
    setError(null);
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }

    try {
      const res = await fetch('/api/certifications/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          traineeName: traineeName.trim(),
          department: selectedDepartment,
        }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        await fetchCertificates();
      } else {
        const data = await res.json().catch(() => ({ error: 'Generation failed' }));
        setError(data.error || 'Failed to generate certificate');
      }
    } catch (err) {
      setError('An error occurred during generation');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadPdf = (nameToUse = traineeName) => {
    if (!pdfUrl) return;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${nameToUse.trim().replace(/\s+/g, '_')}_Gambo_Consultancy_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleQuickReissue = (record: CertificateRecord) => {
    setTraineeName(record.traineeName);
    setSelectedDepartment(record.department);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCertificates = certificates.filter(
    (c) =>
      c.traineeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 !text-slate-900 font-serif">
            Certificate Generation & Registry
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Issue and archive official accredited Gambo Consultancy credentials.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Official High-Res Template
          </span>
        </div>
      </div>

      {/* Generation Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Column */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-brand-primary" />
              <h3 className="text-sm font-semibold text-slate-900">Issue New Certificate</h3>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Trainee Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={traineeName}
                  onChange={(e) => setTraineeName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  placeholder="e.g. Dr. Amina Yusuf"
                  required
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Name will be positioned with vector precision.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Consultancy Track
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all bg-white"
                >
                  <option value="Educational Consultancy">Educational Consultancy</option>
                  <option value="IT Consultancy">IT Consultancy</option>
                  <option value="Leadership Consultancy">Leadership Consultancy</option>
                  <option value="Mentorship Consultancy">Mentorship Consultancy</option>
                  <option value="Life Coaching Consultancy">Life Coaching Consultancy</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isGenerating || !traineeName.trim()}
                className="w-full bg-brand-primary hover:bg-brand-primary-light text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-xs cursor-pointer text-xs sm:text-sm"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating Certificate...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    Generate Certificate
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100">
                {error}
              </div>
            )}
          </div>

          {/* Download Box */}
          {pdfUrl && (
            <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200/80 p-5 shadow-xs">
              <div className="flex items-center gap-2 text-brand-primary font-semibold text-xs sm:text-sm mb-1.5">
                <Sparkles className="w-4 h-4" />
                Certificate Ready for Download
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Generated and archived for <strong>{traineeName}</strong>.
              </p>
              <button
                onClick={() => downloadPdf()}
                className="w-full bg-brand-primary hover:bg-brand-primary-light text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer text-xs sm:text-sm"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          )}
        </div>

        {/* Live Canvas Preview Column */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden h-full min-h-[380px] sm:min-h-[460px] flex flex-col">
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <h3 className="text-xs font-semibold text-slate-700">Preview Canvas</h3>
              </div>
              {pdfUrl && (
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-primary-light transition-colors py-1 px-2.5 rounded-lg hover:bg-brand-primary/5 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Expand View
                </button>
              )}
            </div>

            <div className="flex-1 bg-slate-100/70 flex items-center justify-center overflow-hidden p-3 sm:p-5 relative group">
              {pdfUrl ? (
                <div
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => setIsFullscreen(true)}
                  title="Click to view full size"
                >
                  <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full border-none rounded-xl shadow-sm pointer-events-none"
                    title="Certificate Preview"
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-slate-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/95 backdrop-blur-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold text-slate-900">
                      <Maximize2 className="w-3.5 h-3.5 text-brand-primary" />
                      Expand View
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 border border-slate-200 shadow-xs">
                    <FileText className="w-6 h-6 text-slate-400" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-700">Canvas Idle</h4>
                  <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">
                    Enter a trainee name and generate to preview the rendered certificate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Real Certificate Registry */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Issued Certificates Ledger
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {certificates.length} recorded credential{certificates.length === 1 ? '' : 's'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certificates..."
                className="w-full pl-8.5 pr-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none"
              />
            </div>
            <button
              onClick={fetchCertificates}
              className="p-2 border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
              title="Refresh ledger"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingCertificates ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
              <tr>
                <th className="px-6 py-3">Credential ID</th>
                <th className="px-6 py-3">Recipient / Trainee</th>
                <th className="px-6 py-3">Department</th>
                <th className="px-6 py-3">Issue Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCertificates.map((cert) => (
                <tr key={cert.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-3.5 font-mono text-brand-primary font-medium">{cert.id}</td>
                  <td className="px-6 py-3.5 font-semibold text-slate-900">{cert.traineeName}</td>
                  <td className="px-6 py-3.5 text-slate-600">{cert.department}</td>
                  <td className="px-6 py-3.5 text-slate-400 font-mono text-[11px]">{cert.issueDate}</td>
                  <td className="px-6 py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <button
                      onClick={() => handleQuickReissue(cert)}
                      className="text-xs font-semibold text-brand-primary hover:text-brand-primary-light flex items-center gap-1 ml-auto cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" /> Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card List View */}
        <div className="md:hidden divide-y divide-slate-100">
          {filteredCertificates.map((cert) => (
            <div key={cert.id} className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-brand-primary">{cert.id}</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700">
                  {cert.status}
                </span>
              </div>
              <div className="font-semibold text-slate-900 text-sm">{cert.traineeName}</div>
              <div className="text-xs text-slate-500">{cert.department}</div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-400 font-mono">{cert.issueDate}</span>
                <button
                  onClick={() => handleQuickReissue(cert)}
                  className="text-xs font-semibold text-brand-primary hover:text-brand-primary-light flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" /> Select
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && !isLoadingCertificates && (
          <div className="py-12 text-center text-slate-400 space-y-1.5">
            <Inbox className="w-7 h-7 mx-auto text-slate-300" />
            <p className="text-xs font-medium text-slate-600">No certificates recorded yet</p>
            <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
              Generated credentials will automatically appear in this registry.
            </p>
          </div>
        )}
      </div>

      {/* Fullscreen Preview Modal */}
      {isFullscreen && pdfUrl && (
        <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md p-4 sm:p-8 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2 text-white">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="font-semibold text-sm sm:text-base">
                Certificate Preview — {traineeName}
              </h3>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Button onClick={() => downloadPdf()} variant="primary" size="sm" className="gap-1.5">
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </Button>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 text-white/70 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/10"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              className="w-full h-full border-none"
              title="Fullscreen Certificate Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
}
