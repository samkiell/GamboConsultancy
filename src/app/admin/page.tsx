'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  BarChart3,
  Award,
  Mail,
  Building2,
  Settings,
  LogOut,
  Lock,
  User,
  Loader2,
  Menu,
  X,
  ExternalLink,
  Shield,
  GraduationCap,
} from 'lucide-react';

import { AdminAnalytics } from '@/components/admin/AdminAnalytics';
import { AdminCertifications } from '@/components/admin/AdminCertifications';
import { AdminInquiries } from '@/components/admin/AdminInquiries';
import { AdminMasterclass } from '@/components/admin/AdminMasterclass';
import { AdminDepartments } from '@/components/admin/AdminDepartments';
import { AdminSettings } from '@/components/admin/AdminSettings';

function AdminContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [secret, setSecret] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Tab State: analytics, certifications, inquiries, masterclass, departments, settings
  const initialTab = searchParams.get('tab') || 'analytics';
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Dashboard Stats State
  const [stats, setStats] = useState<any>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(false);

  // Sync tab with URL if param changes
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (
      tabParam &&
      ['analytics', 'certifications', 'inquiries', 'masterclass', 'departments', 'settings'].includes(tabParam)
    ) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Check auth state on mount
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

  // Fetch stats once authenticated
  useEffect(() => {
    if (isAuthenticated) {
      async function fetchStats() {
        setIsLoadingStats(true);
        try {
          const res = await fetch('/api/admin/stats');
          if (res.ok) {
            const data = await res.json();
            setStats(data);
          }
        } catch (err) {
          console.error('Error fetching admin statistics:', err);
        } finally {
          setIsLoadingStats(false);
        }
      }
      fetchStats();
    }
  }, [isAuthenticated]);

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
      setError('An error occurred during authentication');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/certifications/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    setStats(null);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileSidebarOpen(false);
    router.replace(`/admin?tab=${tabId}`, { scroll: false });
  };

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-brand-primary mb-3" />
        <p className="text-xs font-medium text-slate-500 tracking-wide">
          Verifying Administrator Session...
        </p>
      </div>
    );
  }

  // Unauthenticated Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50/30 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-primary/10 rounded-2xl mb-4 text-brand-primary">
              <Shield className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 font-serif">Gambo Consultancy</h1>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary mt-1">
              Admin Portal
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Sign in with your administrator credentials to access management tools.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Admin Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  placeholder="admin@gamboconsultancy.com"
                  required
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Secret Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={secret}
                  onChange={(e) => setSecret(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  placeholder="••••••••••••"
                  required
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 flex items-center gap-2">
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-brand-primary hover:bg-brand-primary-light text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm cursor-pointer text-sm mt-2"
            >
              {isLoggingIn ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-brand-primary transition-colors inline-flex items-center gap-1"
            >
              ← Back to main website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Navigation Items Definition
  const navigationItems = [
    {
      id: 'analytics',
      label: 'Overview & Analytics',
      icon: BarChart3,
      badge: null,
    },
    {
      id: 'certifications',
      label: 'Certification Hub',
      icon: Award,
      badge: stats?.kpis?.certificatesIssued > 0 ? `${stats.kpis.certificatesIssued}` : null,
    },
    {
      id: 'inquiries',
      label: 'Consultation Inquiries',
      icon: Mail,
      badge: stats?.kpis?.newInquiries > 0 ? `${stats.kpis.newInquiries} new` : null,
    },
    {
      id: 'masterclass',
      label: 'Masterclass',
      icon: GraduationCap,
      badge: stats?.kpis?.masterclassCount > 0 ? `${stats.kpis.masterclassCount}` : null,
    },
    {
      id: 'departments',
      label: 'Consultancy Divisions',
      icon: Building2,
      badge: null,
    },
    {
      id: 'settings',
      label: 'System & Security',
      icon: Settings,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 flex flex-col font-sans text-slate-900 antialiased">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/admin" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Gambo Consultancy"
              width={150}
              height={36}
              priority
              className="h-7 sm:h-8 w-auto"
            />
            <div className="hidden sm:flex items-center">
              <span className="h-4 w-px bg-slate-200 mx-3"></span>
              <span className="text-[11px] font-semibold tracking-wider text-brand-primary bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 uppercase">
                Admin
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live site link */}
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-brand-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100"
          >
            <span>View Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          {/* Sign out button */}
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-red-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Mobile Horizontal Tab Navigation (Quick Switch) */}
      <div className="md:hidden bg-white border-b border-slate-200/80 px-4 py-2.5 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-brand-primary text-white shadow-xs'
                  : 'text-slate-600 bg-slate-100/80 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-60 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-2.5 shadow-xs sticky top-24">
            <nav className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-brand-primary text-white shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Mobile Slide-over Drawer */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <div
              className="w-72 bg-white h-full p-5 space-y-4 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="font-semibold text-slate-900 text-sm">Navigation</span>
                  <button
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1.5 mt-4">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleTabChange(item.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-brand-primary text-white shadow-xs font-semibold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          {activeTab === 'analytics' && (
            <AdminAnalytics
              stats={stats}
              onNavigateTab={(tab) => handleTabChange(tab)}
            />
          )}

          {activeTab === 'certifications' && <AdminCertifications />}

          {activeTab === 'inquiries' && <AdminInquiries />}

          {activeTab === 'masterclass' && <AdminMasterclass />}

          {activeTab === 'departments' && <AdminDepartments />}

          {activeTab === 'settings' && <AdminSettings />}
        </main>
      </div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <Loader2 className="w-8 h-8 animate-spin text-brand-primary" />
        </div>
      }
    >
      <AdminContent />
    </Suspense>
  );
}
