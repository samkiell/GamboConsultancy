'use client';

import React from 'react';
import {
  Award,
  Users,
  Mail,
  CheckCircle2,
  Inbox,
  ChevronRight,
} from 'lucide-react';

interface AdminAnalyticsProps {
  stats: any;
  onNavigateTab: (tab: string) => void;
}

export function AdminAnalytics({ stats, onNavigateTab }: AdminAnalyticsProps) {
  const kpis = stats?.kpis || {
    totalInquiries: 0,
    newInquiries: 0,
    certificatesIssued: 0,
    activeConsultations: 0,
    completedConsultations: 0,
  };

  const monthlyTrends = stats?.monthlyTrends || [];
  const departmentBreakdown = stats?.departmentBreakdown || [];
  const recentActivity = stats?.recentActivity || [];

  const maxInquiries = Math.max(
    ...monthlyTrends.map((t: any) => Math.max(t.inquiries, t.certificates)),
    1
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top Executive Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-brand-primary to-emerald-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Real-Time Operations Data
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white !text-white tracking-tight">
            Executive Operations & Analytics
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1.5 max-w-xl leading-relaxed">
            Live metrics aggregated directly from client inquiries and issued credentials.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onNavigateTab('certifications')}
            className="bg-white hover:bg-emerald-50 text-brand-primary px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Award className="w-4 h-4" />
            Issue Certificate
          </button>
          <button
            onClick={() => onNavigateTab('inquiries')}
            className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Inquiries
            {kpis.newInquiries > 0 && (
              <span className="bg-white text-brand-primary text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-1">
                {kpis.newInquiries}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {/* Total Inquiries */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Total Inquiries</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-primary flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {kpis.totalInquiries}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {kpis.newInquiries > 0 ? (
                <span className="text-emerald-700 font-medium">{kpis.newInquiries} new pending</span>
              ) : (
                'All inquiries reviewed'
              )}
            </p>
          </div>
        </div>

        {/* Certificates Issued */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Certificates Issued</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {kpis.certificatesIssued}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Accredited credentials</p>
          </div>
        </div>

        {/* Active Consultations */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Active Consultations</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {kpis.activeConsultations}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">In progress or contacted</p>
          </div>
        </div>

        {/* Completed Consultations */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Completed Projects</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {kpis.completedConsultations}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Successfully fulfilled</p>
          </div>
        </div>
      </div>

      {/* Main Analytics: Trends + Department Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Activity Trend Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 border-b border-slate-100 gap-2">
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 !text-slate-900">
                Monthly Activity Trajectory
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Inquiries received vs certificates generated
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary"></span>
                <span className="text-slate-600 font-medium">Inquiries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span className="text-slate-600 font-medium">Certificates</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="pt-6 pb-2">
            <div className="h-48 flex items-end justify-between gap-2 sm:gap-6 px-2">
              {monthlyTrends.map((item: any) => {
                const inquiryHeight =
                  item.inquiries > 0
                    ? Math.max(Math.round((item.inquiries / maxInquiries) * 100), 12)
                    : 4;
                const certHeight =
                  item.certificates > 0
                    ? Math.max(Math.round((item.certificates / maxInquiries) * 100), 12)
                    : 4;

                return (
                  <div
                    key={item.month}
                    className="flex-1 flex flex-col items-center h-full justify-end group"
                  >
                    <div className="w-full flex items-end justify-center gap-1 sm:gap-2 h-full">
                      {/* Inquiry Bar */}
                      <div className="relative w-full max-w-[20px] flex flex-col items-center">
                        <div
                          style={{ height: `${inquiryHeight}%` }}
                          className={`w-full rounded-t-sm transition-all duration-300 relative ${
                            item.inquiries > 0 ? 'bg-brand-primary' : 'bg-slate-100'
                          }`}
                        >
                          <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none whitespace-nowrap z-10 font-mono">
                            {item.inquiries} inquiries
                          </span>
                        </div>
                      </div>
                      {/* Certificate Bar */}
                      <div className="relative w-full max-w-[20px] flex flex-col items-center">
                        <div
                          style={{ height: `${certHeight}%` }}
                          className={`w-full rounded-t-sm transition-all duration-300 relative ${
                            item.certificates > 0 ? 'bg-blue-500' : 'bg-slate-100'
                          }`}
                        >
                          <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none whitespace-nowrap z-10 font-mono">
                            {item.certificates} certs
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 mt-2.5">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Department Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="pb-4 border-b border-slate-100">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 !text-slate-900">
                Department Distribution
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Share of requests across consultancy arms
              </p>
            </div>

            {departmentBreakdown.length > 0 ? (
              <div className="space-y-3.5 mt-5">
                {departmentBreakdown.map((dept: any) => (
                  <div key={dept.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-700 font-medium truncate max-w-[170px]">
                        {dept.name}
                      </span>
                      <span className="text-slate-500 font-mono text-[11px]">
                        {dept.count} ({dept.percentage}%)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.max(dept.percentage, dept.count > 0 ? 5 : 0)}%`,
                          backgroundColor: dept.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-xs text-slate-400">
                No department submissions recorded yet.
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">5 Divisions Configured</span>
            <button
              onClick={() => onNavigateTab('departments')}
              className="text-xs font-semibold text-brand-primary hover:text-brand-primary-light flex items-center gap-1 cursor-pointer"
            >
              View Offerings <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Pipeline Status + Live Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pipeline Status */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 !text-slate-900 mb-1">
              Inquiry Pipeline
            </h3>
            <p className="text-xs text-slate-400 mb-5">Current status of client consultations</p>

            <div className="space-y-2.5">
              <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">New & Unaddressed</span>
                <span className="text-xs font-bold text-slate-900">{kpis.newInquiries}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Active Engagements</span>
                <span className="text-xs font-bold text-slate-900">{kpis.activeConsultations}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Completed</span>
                <span className="text-xs font-bold text-slate-900">{kpis.completedConsultations}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <button
              onClick={() => onNavigateTab('inquiries')}
              className="w-full text-center py-2 text-xs font-semibold text-brand-primary hover:bg-emerald-50/60 rounded-xl transition-colors cursor-pointer"
            >
              Open Inquiries Manager →
            </button>
          </div>
        </div>

        {/* Live Operations Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 !text-slate-900">
                Recent Operations
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Audit trail of contact form submissions and certificate generation
              </p>
            </div>
          </div>

          {recentActivity.length > 0 ? (
            <div className="space-y-2.5">
              {recentActivity.map((activity: any) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50/80 transition-colors"
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      activity.type === 'certificate'
                        ? 'bg-blue-50 text-blue-600'
                        : 'bg-emerald-50 text-brand-primary'
                    }`}
                  >
                    {activity.type === 'certificate' ? (
                      <Award className="w-3.5 h-3.5" />
                    ) : (
                      <Mail className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs font-semibold text-slate-800 truncate">
                        {activity.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                        {activity.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 space-y-1.5">
              <Inbox className="w-7 h-7 mx-auto text-slate-300" />
              <p className="text-xs font-medium text-slate-600">No operations recorded yet</p>
              <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                Incoming website inquiries and generated certificates will appear here automatically.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
