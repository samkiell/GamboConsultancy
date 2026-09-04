'use client';

import React from 'react';
import {
  ShieldCheck,
  Server,
  Mail,
  FileCheck2,
  Lock,
} from 'lucide-react';

export function AdminSettings() {
  const systemChecks = [
    {
      name: 'Authentication Session',
      description: 'Encrypted HttpOnly cookie session verification',
      status: 'Operational',
      icon: Lock,
    },
    {
      name: 'Database Engine (Neon PostgreSQL)',
      description: 'Serverless pooled PostgreSQL persistent cloud storage',
      status: 'Connected & Active',
      icon: Server,
    },
    {
      name: 'PDF Vector Engine (pdf-lib)',
      description: 'Template compilation and coordinate text injection',
      status: 'Operational',
      icon: FileCheck2,
    },
    {
      name: 'Email Dispatcher (Resend API)',
      description: 'Contact form notification pipeline',
      status: 'Configured',
      icon: Mail,
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 !text-slate-900 font-serif">
            System & Security
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Infrastructure diagnostics and administrative access parameters.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> All Systems Operational
          </span>
        </div>
      </div>

      {/* Diagnostics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {systemChecks.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-brand-primary flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{item.name}</h4>
                  <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full shrink-0">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Security Policies Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-primary" />
          Security Governance & Session Guidelines
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          The Gambo Consultancy administrative control panel enforces session validation through server-side secret
          verification. All certificate issuance activities and client communications are logged to maintain institutional
          integrity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Session Lifetime</span>
            <span className="text-xs font-semibold text-slate-800 mt-1 block">24 Hours (Rolling)</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Cookie Policy</span>
            <span className="text-xs font-semibold text-slate-800 mt-1 block">HttpOnly + Strict SameSite</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Credential Storage</span>
            <span className="text-xs font-semibold text-slate-800 mt-1 block">Environment Isolation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
