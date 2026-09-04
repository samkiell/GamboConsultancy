'use client';

import React from 'react';
import {
  GraduationCap,
  Cpu,
  Compass,
  Users2,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';

export function AdminDepartments() {
  const departments = [
    {
      name: 'Educational Consultancy',
      icon: GraduationCap,
      description: 'Empowering educators, enriching learning, and developing institutions.',
      subTracks: [
        'Academic Development & Counselling',
        'Teaching Consultancy & Pedagogical Skills',
        'Research Design & Grant Writing Advisory',
        'School Leadership & Governance',
      ],
      status: 'Active',
    },
    {
      name: 'IT Consultancy',
      icon: Cpu,
      description: 'Transforming technology infrastructure, digital systems, and custom software.',
      subTracks: [
        'IT Strategy & Architecture Roadmaps',
        'Digital Transformation & Modernisation',
        'Cybersecurity Solutions & Audits',
        'Cloud Computing & Software Development',
      ],
      status: 'Active',
    },
    {
      name: 'Leadership Consultancy',
      icon: Compass,
      description: 'Building visionary leaders, executive capability, and high-performance organisations.',
      subTracks: [
        'Executive Coaching & Leadership Assessment',
        'Management Consultancy & Strategic Advisory',
        'Change Management & Organizational Culture',
        'Performance Management Frameworks',
      ],
      status: 'Active',
    },
    {
      name: 'Mentorship Consultancy',
      icon: Users2,
      description: 'Guiding professionals, students, and entrepreneurs to sustained success.',
      subTracks: [
        'Career Coaching & Professional Trajectory',
        'Leadership & Entrepreneurial Mentorship',
        'One-on-One & Group Mentoring Programs',
      ],
      status: 'Active',
    },
    {
      name: 'Life Coaching Consultancy',
      icon: HeartHandshake,
      description: 'Unlocking personal potential, wellness, mindfulness, and productivity.',
      subTracks: [
        'Personal Growth & Mindset Development',
        'Career Transition & Life Coaching',
        'Mindfulness & Stress Management',
        'Time Management & Productivity',
      ],
      status: 'Active',
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 !text-slate-900 font-serif">
            Consultancy Divisions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Overview of the 5 institutional divisions and core service capabilities.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            5 Disciplines Available
          </span>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {departments.map((dept) => {
          const Icon = dept.icon;
          return (
            <div
              key={dept.name}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    {dept.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">{dept.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{dept.description}</p>

                {/* Subtracks */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Core Focus Areas
                  </span>
                  {dept.subTracks.map((sub) => (
                    <div key={sub} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
