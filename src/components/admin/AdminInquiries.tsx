'use client';

import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Search,
  ChevronRight,
  X as CloseIcon,
  RefreshCw,
  Inbox,
  Loader2,
} from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  service?: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Completed';
  createdAt: string;
  message: string;
}

export function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeInquiry, setActiveInquiry] = useState<Inquiry | null>(null);

  const fetchInquiries = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const updateStatus = async (id: string, newStatus: Inquiry['status']) => {
    setIsUpdatingStatus(true);
    try {
      const res = await fetch('/api/admin/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
        if (activeInquiry && activeInquiry.id === id) {
          setActiveInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = selectedStatus === 'All' || inq.status === selectedStatus;
    const matchesDept = selectedDept === 'All' || inq.department === selectedDept;
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (inq.service && inq.service.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesDept && matchesSearch;
  });

  const getStatusBadge = (status: Inquiry['status']) => {
    switch (status) {
      case 'New':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            New
          </span>
        );
      case 'Contacted':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
            Contacted
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200/60">
            In Progress
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60">
            Completed
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
            Consultation Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Client consultation submissions from the public website.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchInquiries}
            className="p-2 border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            title="Refresh inquiries"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <span className="text-xs font-semibold px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200/60">
            {inquiries.filter((i) => i.status === 'New').length} New Leads
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-3 sm:p-4 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {['All', 'New', 'Contacted', 'In Progress', 'Completed'].map((status) => (
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

          {/* Department Filter & Search */}
          <div className="flex items-center gap-2">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="text-xs border border-slate-200 rounded-xl px-2.5 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            >
              <option value="All">All Disciplines</option>
              <option value="Educational Consultancy">Educational Consultancy</option>
              <option value="IT Consultancy">IT Consultancy</option>
              <option value="Leadership Consultancy">Leadership Consultancy</option>
              <option value="Mentorship Consultancy">Mentorship Consultancy</option>
              <option value="Life Coaching Consultancy">Life Coaching Consultancy</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>

            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search leads..."
                className="w-full pl-8.5 pr-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inquiries Container */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
              <tr>
                <th className="px-6 py-3.5">Lead / Client</th>
                <th className="px-6 py-3.5">Department</th>
                <th className="px-6 py-3.5">Contact Details</th>
                <th className="px-6 py-3.5">Date Received</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInquiries.map((inq) => (
                <tr
                  key={inq.id}
                  onClick={() => setActiveInquiry(inq)}
                  className="hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900 text-sm">{inq.name}</div>
                    <div className="text-slate-400 text-[11px] font-mono mt-0.5">{inq.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-brand-primary">{inq.department}</div>
                    <div className="text-slate-500 text-[11px] mt-0.5 line-clamp-1 max-w-xs">
                      {inq.message}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900 font-medium">{inq.email}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">{inq.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-[11px] font-mono whitespace-nowrap">
                    {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(inq.status)}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveInquiry(inq);
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
          {filteredInquiries.map((inq) => (
            <div
              key={inq.id}
              onClick={() => setActiveInquiry(inq)}
              className="p-4 space-y-2.5 hover:bg-slate-50/60 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">{inq.id}</span>
                {getStatusBadge(inq.status)}
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{inq.name}</div>
                <div className="text-xs font-medium text-brand-primary mt-0.5">{inq.department}</div>
              </div>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {inq.message}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-50 text-[11px] text-slate-400">
                <span>{inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : ''}</span>
                <span className="text-brand-primary font-semibold flex items-center gap-0.5">
                  Details <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredInquiries.length === 0 && !isLoading && (
          <div className="py-12 text-center text-slate-400 space-y-1.5">
            <Inbox className="w-7 h-7 mx-auto text-slate-300" />
            <p className="text-xs font-medium text-slate-600">No consultation inquiries received yet</p>
            <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
              Submissions from the public contact form will automatically arrive here.
            </p>
          </div>
        )}
      </div>

      {/* Inquiry Detail Modal */}
      {activeInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-100 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-slate-400">{activeInquiry.id}</span>
                  {getStatusBadge(activeInquiry.status)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{activeInquiry.name}</h3>
                <p className="text-xs text-brand-primary font-medium mt-0.5">
                  {activeInquiry.department}
                </p>
              </div>
              <button
                onClick={() => setActiveInquiry(null)}
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
                      href={`mailto:${activeInquiry.email}`}
                      className="text-xs font-medium text-slate-800 hover:text-brand-primary underline truncate block"
                    >
                      {activeInquiry.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200/70 text-brand-primary">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Phone</span>
                    <a
                      href={`tel:${activeInquiry.phone}`}
                      className="text-xs font-medium text-slate-800 hover:text-brand-primary"
                    >
                      {activeInquiry.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Message */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Client Message
                </label>
                <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {activeInquiry.message}
                </div>
              </div>

              {/* Status Updater */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Pipeline Workflow Status
                  </label>
                  {isUpdatingStatus && (
                    <span className="text-xs text-brand-primary flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" /> Saving...
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['New', 'Contacted', 'In Progress', 'Completed'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(activeInquiry.id, s)}
                      disabled={isUpdatingStatus}
                      className={`py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        activeInquiry.status === s
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
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {activeInquiry.createdAt
                  ? new Date(activeInquiry.createdAt).toLocaleString()
                  : ''}
              </span>
              <a
                href={`mailto:${activeInquiry.email}?subject=Consultation Follow-up - Gambo Consultancy`}
                className="bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" /> Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
