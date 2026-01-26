'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, Download, FileText, Lock, User, LogOut, Maximize2, X as CloseIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function CertificationAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [secret, setSecret] = useState('');
  const [traineeName, setTraineeName] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Check auth state on load
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/certifications/auth');
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError(null);

    try {
      const res = await fetch('/api/certifications/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, secret }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/certifications/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    setPdfUrl(null);
  };

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
        body: JSON.stringify({ traineeName }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
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

  const downloadPdf = () => {
    if (!pdfUrl) return;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${traineeName.replace(/\s+/g, '_')}_Gambo_Consultancy_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-brand-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4">
              <Lock className="w-8 h-8 text-brand-primary" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
            <p className="text-gray-500 mt-2">Sign in to manage certificates</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  placeholder="Enter your admin email"
                  required
                />
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secret Passcode</label>
              <div className="relative">
                <input
                  type="password"
                  value={secret}
                  onChange={(e) => setSecret(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  placeholder="Enter your secret passcode"
                  required
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-brand-primary hover:bg-brand-primary-light text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoggingIn ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-brand-primary/10 p-2 rounded-lg">
            <FileText className="w-6 h-6 text-brand-primary" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 leading-none">Certificate Generator</h1>
        </div>
        <button
          onClick={handleLogout}
          className="text-gray-500 hover:text-red-600 flex items-center gap-2 transition-colors text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-6 md:p-10">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Controls */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Generation Details</h2>
              <form onSubmit={handleGenerate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trainee Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={traineeName}
                    onChange={(e) => setTraineeName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                    placeholder="Enter full name"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1.5">This name will be printed on the certificate.</p>
                </div>

                <button
                  type="submit"
                  disabled={isGenerating || !traineeName.trim()}
                  className="w-full bg-brand-primary hover:bg-brand-primary-light text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5" />
                      Generate Certificate
                    </>
                  )}
                </button>
              </form>

              {error && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                  {error}
                </div>
              )}
            </div>

            {pdfUrl && (
              <div className="bg-brand-primary/5 rounded-xl border border-brand-primary/10 p-6">
                <h3 className="text-brand-primary font-semibold mb-2">Certificate Ready!</h3>
                <p className="text-sm text-gray-600 mb-4">
                  The certificate for <strong>{traineeName}</strong> has been generated successfully.
                </p>
                <button
                  onClick={downloadPdf}
                  className="w-full bg-white border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            )}
          </div>

          {/* Preview */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full min-h-[500px] flex flex-col">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">PDF Preview</h2>
                {pdfUrl && (
                   <button 
                    onClick={() => setIsFullscreen(true)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-primary-light transition-colors py-1 px-2 rounded-md hover:bg-brand-primary/5"
                   >
                     <Maximize2 className="w-3.5 h-3.5" />
                     Expand View
                   </button>
                )}
              </div>
              
              <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-auto p-4 relative group">
                {pdfUrl ? (
                  <div className="w-full h-full relative cursor-pointer" onClick={() => setIsFullscreen(true)}>
                    <iframe
                      src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-full border-none rounded shadow-lg pointer-events-none"
                      title="Certificate Preview"
                    />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium text-gray-900">
                        <Maximize2 className="w-4 h-4" />
                        Click to Expand
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-300">
                      <FileText className="w-10 h-10 text-gray-300" />
                    </div>
                    <p className="text-gray-500 font-medium">Enter a name and click generate to see preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fullscreen Preview Modal */}
      {isFullscreen && pdfUrl && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm p-4 md:p-10 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-semibold text-lg">Certificate Preview - {traineeName}</h3>
            <div className="flex items-center gap-4">
              <Button onClick={downloadPdf} variant="primary" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download
              </Button>
              <button 
                onClick={() => setIsFullscreen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
                <CloseIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-2xl">
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
