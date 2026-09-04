'use client';

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Mail,
  Phone,
  Search,
  ChevronRight,
  X as CloseIcon,
  RefreshCw,
  Inbox,
  Loader2,
  Building,
  Briefcase,
  Download,
  Calendar,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

interface MasterclassRegistration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  occupation?: string;
  organization?: string;
  topicInterest?: string;
  expectation?: string;
  state?: string;
  county?: string;
  country?: string;
  age?: string;
  status: 'Confirmed' | 'Attended' | 'Cancelled';
  createdAt: string;
}

function getWhatsAppUrl(phone: string, name: string) {
  const digits = (phone || '').replace(/\D/g, '');
  const cleanPhone = digits.startsWith('0') ? `234${digits.slice(1)}` : digits;
  const msg = encodeURIComponent(`Hello ${name}, this is Gambo Consultancy regarding your Masterclass 2026 registration.`);
  return `https://wa.me/${cleanPhone}?text=${msg}`;
}

export function AdminMasterclass() {
  const [registrations, setRegistrations] = useState<MasterclassRegistration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState<MasterclassRegistration | null>(null);

  const fetchRegistrations = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/masterclass');
      if (res.ok) {
        const data = await res.json();
        setRegistrations(data.registrations || []);
      }
    } catch (err) {
      console.error('Failed to fetch masterclass registrations:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const updateStatus = async (id: string, newStatus: MasterclassRegistration['status']) => {
    setIsUpdatingStatus(true);
    try {
      const res = await fetch('/api/admin/masterclass', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setRegistrations((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
        if (activeItem && activeItem.id === id) {
          setActiveItem((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error('Failed to update registration status:', err);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const exportCsv = () => {
    if (registrations.length === 0) return;
    const headers = [
      'ID',
      'Full Name',
      'Email',
      'WhatsApp Number',
      'Organization',
      'State',
      'Country',
      'Age Range',
      'Status',
      'Date Registered',
    ];
    const rows = registrations.map((r) => [
      r.id,
      `"${r.fullName.replace(/"/g, '""')}"`,
      `"${r.email}"`,
      `"${r.phone}"`,
      `"${(r.organization || '').replace(/"/g, '""')}"`,
      `"${(r.state || '').replace(/"/g, '""')}"`,
      `"${(r.country || r.county || '').replace(/"/g, '""')}"`,
      `"${(r.age || '').replace(/"/g, '""')}"`,
      r.status,
      r.createdAt,
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Gambo_Masterclass_Registrations_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const filteredRegistrations = registrations.filter((item) => {
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.fullName.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.phone.toLowerCase().includes(query) ||
      (item.organization && item.organization.toLowerCase().includes(query)) ||
      (item.state && item.state.toLowerCase().includes(query)) ||
      (item.country && item.country.toLowerCase().includes(query)) ||
      (item.county && item.county.toLowerCase().includes(query)) ||
      (item.age && item.age.toLowerCase().includes(query));
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: MasterclassRegistration['status']) => {
    switch (status) {
      case 'Confirmed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            Confirmed
          </span>
        );
      case 'Attended':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
            Attended
          </span>
        );
      case 'Cancelled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200/60">
            Cancelled
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 !text-slate-900 font-serif">
            Masterclass Registrations
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Responses and participant profiles pulled directly from the public masterclass intake.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {registrations.length > 0 && (
            <button
              onClick={exportCsv}
              className="p-2 sm:px-3 sm:py-1.5 border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer flex items-center gap-1.5 text-xs font-medium"
              title="Export to CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          )}

          <button
            onClick={fetchRegistrations}
            className="p-2 border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            title="Refresh registrations"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <span className="text-xs font-semibold px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200/60">
            {registrations.length} Total Registrant{registrations.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-5">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Total Registrations</span>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            {registrations.length}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Confirmed Attendees</span>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mt-2">
            {registrations.filter((r) => r.status === 'Confirmed').length}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs col-span-2 sm:col-span-1">
          <span className="text-xs font-medium text-slate-500">Attended / Completed</span>
          <div className="text-2xl sm:text-3xl font-bold text-blue-700 mt-2">
            {registrations.filter((r) => r.status === 'Attended').length}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-3 sm:p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {['All', 'Confirmed', 'Attended', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedStatus === status
                    ? 'bg-brand-primary text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, org..."
              className="w-full pl-8.5 pr-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none"
            />
          </div>
        </div>
      </div>

      {/* Responses List Container */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
              <tr>
                <th className="px-6 py-3.5">Registration ID</th>
                <th className="px-6 py-3.5">Participant</th>
                <th className="px-6 py-3.5">WhatsApp & Email</th>
                <th className="px-6 py-3.5">Organization</th>
                <th className="px-6 py-3.5">State & Country</th>
                <th className="px-6 py-3.5">Date</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRegistrations.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 font-mono text-brand-primary font-medium">{item.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{item.fullName}</div>
                    {item.age && (
                      <span className="inline-block mt-0.5 text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        Age: {item.age}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900 font-medium">{item.email}</div>
                    <div className="text-emerald-700 text-[11px] mt-0.5 font-medium flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {item.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    <div className="font-medium text-slate-800">{item.organization || 'Independent'}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    <div className="font-medium text-slate-800">{item.state || 'N/A'}</div>
                    {(item.country || item.county) && (
                      <div className="text-slate-400 text-[11px] mt-0.5">{item.country || item.county}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-[11px] font-mono whitespace-nowrap">
                    {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem(item);
                      }}
                      className="text-brand-primary hover:text-brand-primary-light font-semibold text-xs inline-flex items-center gap-1 cursor-pointer"
                    >
                      View <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card List View */}
        <div className="md:hidden divide-y divide-slate-100">
          {filteredRegistrations.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="p-4 space-y-2.5 hover:bg-slate-50/60 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-brand-primary">{item.id}</span>
                {getStatusBadge(item.status)}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-slate-900 text-sm">{item.fullName}</div>
                  {item.age && (
                    <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.age}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  {item.organization || 'Independent'}
                </div>
                {(item.state || item.country || item.county) && (
                  <div className="text-xs text-slate-400 mt-0.5">
                    {[item.state, item.country || item.county].filter(Boolean).join(', ')}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-50 text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <MessageCircle className="w-3 h-3" /> {item.phone}
                </span>
                <span className="text-brand-primary font-semibold flex items-center gap-0.5">
                  View <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredRegistrations.length === 0 && !isLoading && (
          <div className="py-14 text-center text-slate-400 space-y-1.5">
            <Inbox className="w-8 h-8 mx-auto text-slate-300" />
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              No masterclass registrations received yet
            </p>
            <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
              As participants submit the public registration form, responses will be pulled and displayed here in real time.
            </p>
          </div>
        )}
      </div>

      {/* Response Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-100 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-slate-400">{activeItem.id}</span>
                  {getStatusBadge(activeItem.status)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{activeItem.fullName}</h3>
                <p className="text-xs text-brand-primary font-medium mt-0.5">
                  {activeItem.organization || 'Participant'}
                </p>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 cursor-pointer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200/70 text-brand-primary">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Email</span>
                    <a
                      href={`mailto:${activeItem.email}`}
                      className="text-xs font-medium text-slate-800 hover:text-brand-primary underline truncate block"
                    >
                      {activeItem.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200/70 text-emerald-600">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">WhatsApp Number</span>
                    <a
                      href={getWhatsAppUrl(activeItem.phone, activeItem.fullName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                    >
                      {activeItem.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Organization and Location Profile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Organization</span>
                  <span className="text-xs font-semibold text-slate-800 mt-0.5 block">
                    {activeItem.organization || 'Independent'}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">State & Country</span>
                  <span className="text-xs font-semibold text-slate-800 mt-0.5 block">
                    {[activeItem.state, activeItem.country || activeItem.county].filter(Boolean).join(', ') || 'Unspecified'}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Age Bracket</span>
                  <span className="text-xs font-semibold text-slate-800 mt-0.5 block">
                    {activeItem.age || 'Unspecified'}
                  </span>
                </div>
              </div>

              {/* Status Updater */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Registration Attendance Status
                  </label>
                  {isUpdatingStatus && (
                    <span className="text-xs text-brand-primary flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" /> Saving...
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['Confirmed', 'Attended', 'Cancelled'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(activeItem.id, s)}
                      disabled={isUpdatingStatus}
                      className={`py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        activeItem.status === s
                          ? 'bg-brand-primary text-white border-brand-primary shadow-xs font-semibold'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Registered on {activeItem.createdAt ? new Date(activeItem.createdAt).toLocaleDateString() : ''}
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href={`mailto:${activeItem.email}?subject=Masterclass Confirmation - Gambo Consultancy`}
                  className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Participant
                </a>
                <a
                  href={getWhatsAppUrl(activeItem.phone, activeItem.fullName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
