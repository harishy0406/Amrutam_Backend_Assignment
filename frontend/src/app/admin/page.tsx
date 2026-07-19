"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { fetchApi } from '@/lib/api';

export default function AdminDashboard() {
  const router = useRouter();
  
  const [revenue, setRevenue] = useState(0);
  const [totalConsultations, setTotalConsultations] = useState(0);
  const [activeDoctors, setActiveDoctors] = useState(0);
  const [doctorStats, setDoctorStats] = useState<any[]>([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const revData = await fetchApi<{total_revenue: number, currency: string}>('/admin/analytics/revenue');
        setRevenue(revData.total_revenue);
        
        const consultData = await fetchApi<any[]>('/admin/analytics/consultations?days=30');
        const total = consultData.reduce((acc, curr) => acc + (curr.count || 0), 0);
        setTotalConsultations(total);
        
        const docData = await fetchApi<any[]>('/admin/analytics/doctors?limit=5');
        setDoctorStats(docData);
        setActiveDoctors(docData.length); // Assuming docData returns list of active doctors
      } catch (err) {
        console.error("Failed to fetch analytics", err);
      }
    };
    fetchAnalytics();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <>
      <div>
  {/* Top Navigation Bar */}
  <header className="bg-surface shadow-[0_4px_20px_rgba(63,77,43,0.08)] sticky top-0 z-50">
    <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
      <div className="flex items-center gap-12">
        <span className="text-title-lg font-headline-lg text-forest-olive tracking-tight cursor-pointer">Amrutam</span>
        <div className="hidden md:flex gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Find Doctor</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Consultations</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Prescriptions</a>
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md" href="#">Analytics</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center bg-soft-beige/50 rounded-full px-4 py-2 border border-sand/30">
          <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-body-md w-48" placeholder="Search data points..." type="text" />
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all active:scale-95">notifications</button>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all active:scale-95">settings</button>
          <button onClick={handleLogout} title="Logout" className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all active:scale-95">logout</button>
          <div className="h-10 w-10 rounded-full border-2 border-sand overflow-hidden cursor-pointer active:scale-95 transition-transform">
            <img className="w-full h-full object-cover" data-alt="A professional medical administrator profile portrait, clean studio lighting, wearing soft earthy toned professional attire, minimalist clinical background with a touch of botanical greenery, high resolution photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDACQm8AAlzccOEMvYTwxpil8OGgzbfjnEVGFXh0Fy8H0cKgMO2tfi3ZAKk2LxuWOGo8AXj2G63zB-rNhk8xPc4DEZHuILPPWO65C2rQ6JFItX2jf3fDaNeev_E30jlN8F16tcinVuphDCF71II1TCxlgoI59BBcZp1L4aFvu-f7_3Hro_GAD3iBu2dMmO4-c56Z0dXt2NzAqBV6n1_RSSAu2bXxF8_sQlPrDGojcqpcnZ34TChTm6Msg" />
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main className="flex-grow w-full max-w-container-max mx-auto px-margin-desktop py-stack-lg">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-forest-olive">Analytics Dashboard</h1>
        <p className="text-on-surface-variant text-body-md">Ancient wisdom tracked with modern precision.</p>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-off-white border border-sand text-forest-olive rounded-lg font-label-md text-label-md hover:bg-soft-beige transition-all active:scale-95">
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          Last 30 Days
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-forest-olive text-off-white rounded-lg font-label-md text-label-md hover:opacity-90 shadow-sm transition-all active:scale-95">
          <span className="material-symbols-outlined text-[20px]">file_download</span>
          Export Report
        </button>
      </div>
    </div>
    {/* Metric Cards Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-10">
      {/* Total Consultations */}
      <div className="bg-soft-beige p-6 rounded-xl border border-[#E5DDCB] shadow-sm hover:translate-y-[-2px] transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-primary">stethoscope</span>
          </div>
          <span className="text-success flex items-center font-label-md text-label-sm">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            12.5%
          </span>
        </div>
        <p className="text-on-surface-variant font-label-md text-label-md mb-1">Total Consultations</p>
        <h3 className="text-forest-olive font-headline-md text-headline-md">{totalConsultations}</h3>
      </div>
      {/* Revenue */}
      <div className="bg-soft-beige p-6 rounded-xl border border-[#E5DDCB] shadow-sm hover:translate-y-[-2px] transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-secondary/10 rounded-lg">
            <span className="material-symbols-outlined text-secondary">payments</span>
          </div>
          <span className="text-success flex items-center font-label-md text-label-sm">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            8.2%
          </span>
        </div>
        <p className="text-on-surface-variant font-label-md text-label-md mb-1">Total Revenue</p>
        <h3 className="text-forest-olive font-headline-md text-headline-md">₹ {revenue.toLocaleString()}</h3>
      </div>
      {/* Active Doctors */}
      <div className="bg-soft-beige p-6 rounded-xl border border-[#E5DDCB] shadow-sm hover:translate-y-[-2px] transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-forest-olive/10 rounded-lg">
            <span className="material-symbols-outlined text-forest-olive">medication</span>
          </div>
          <span className="text-on-surface-variant flex items-center font-label-md text-label-sm">
            <span className="material-symbols-outlined text-[16px]">remove</span>
            0%
          </span>
        </div>
        <p className="text-on-surface-variant font-label-md text-label-md mb-1">Active Doctors</p>
        <h3 className="text-forest-olive font-headline-md text-headline-md">{activeDoctors}</h3>
      </div>
      {/* Patient Satisfaction */}
      <div className="bg-soft-beige p-6 rounded-xl border border-[#E5DDCB] shadow-sm hover:translate-y-[-2px] transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-warning/10 rounded-lg">
            <span className="material-symbols-outlined text-warning" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          </div>
          <span className="text-success flex items-center font-label-md text-label-sm">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            4.1%
          </span>
        </div>
        <p className="text-on-surface-variant font-label-md text-label-md mb-1">Satisfaction Rate</p>
        <h3 className="text-forest-olive font-headline-md text-headline-md">4.9/5.0</h3>
      </div>
    </div>
    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Revenue Trend Line Graph */}
      <div className="lg:col-span-2 bg-off-white p-8 rounded-xl border border-[#E5DDCB] shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-forest-olive font-title-lg text-title-lg">Revenue Trends</h4>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-forest-olive" />
              <span className="text-label-sm font-label-sm text-on-surface-variant">Consultations</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <span className="w-3 h-3 rounded-full bg-sand" />
              <span className="text-label-sm font-label-sm text-on-surface-variant">Prescriptions</span>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full flex items-end justify-between gap-2 px-2">
          {/* Fake Line Graph Visual */}
          <div className="absolute inset-0 flex flex-col justify-between py-2 border-l border-b border-sand/30">
            <div className="w-full border-t border-sand/10" />
            <div className="w-full border-t border-sand/10" />
            <div className="w-full border-t border-sand/10" />
            <div className="w-full border-t border-sand/10" />
          </div>
          {/* Line Simulation (SVG for quality) */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'rgba(63, 77, 43, 0.2)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(63, 77, 43, 0)', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path className="transition-all duration-1000" d="M0,180 Q100,120 200,150 T400,80 T600,100 T800,40" fill="none" stroke="#3F4D2B" strokeWidth={3} />
            <path d="M0,180 Q100,120 200,150 T400,80 T600,100 T800,40 V256 H0 Z" fill="url(#lineGrad)" />
          </svg>
          {/* X-Axis Labels */}
          <div className="absolute bottom-[-32px] w-full flex justify-between px-2 text-label-sm font-label-sm text-on-surface-variant">
            <span>WK 1</span><span>WK 2</span><span>WK 3</span><span>WK 4</span><span>WK 5</span>
          </div>
        </div>
      </div>
      {/* Doctor Utilization Bar Chart */}
      <div className="bg-off-white p-8 rounded-xl border border-[#E5DDCB] shadow-sm">
        <h4 className="text-forest-olive font-title-lg text-title-lg mb-8">Doctor Utilization</h4>
        <div className="space-y-6">
          {doctorStats.length > 0 ? doctorStats.map((doc, idx) => {
            // Mock a utilization percentage for now if not provided, or use actual
            const utilization = doc.utilization || Math.floor(Math.random() * (95 - 40 + 1) + 40);
            return (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-label-sm font-label-sm">
                  <span className="text-on-surface">{doc.doctor_name || `Doctor ${idx + 1}`}</span>
                  <span className="text-forest-olive">{utilization}%</span>
                </div>
                <div className="w-full bg-soft-beige rounded-full h-2 overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-1000 ${utilization > 70 ? 'bg-forest-olive' : 'bg-sand'}`} style={{width: `${utilization}%`}} />
                </div>
              </div>
            );
          }) : (
            <p className="text-body-md text-on-surface-variant">No doctor data available yet.</p>
          )}
        </div>
        <button className="w-full mt-8 text-center text-label-md font-label-md text-forest-olive hover:underline">View All Staff</button>
      </div>
    </div>
    {/* Recent Activity Table */}
    <div className="mt-10 bg-off-white rounded-xl border border-[#E5DDCB] shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-[#E5DDCB] flex justify-between items-center">
        <h4 className="text-forest-olive font-title-lg text-title-lg">Recent Consultations</h4>
        <button className="text-label-md font-label-md text-forest-olive flex items-center gap-1 hover:opacity-80">
          See All <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-soft-beige/30">
              <th className="px-8 py-4 font-label-md text-label-md text-on-surface-variant">Patient</th>
              <th className="px-8 py-4 font-label-md text-label-md text-on-surface-variant">Doctor</th>
              <th className="px-8 py-4 font-label-md text-label-md text-on-surface-variant">Specialization</th>
              <th className="px-8 py-4 font-label-md text-label-md text-on-surface-variant">Status</th>
              <th className="px-8 py-4 font-label-md text-label-md text-on-surface-variant">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-soft-beige">
            <tr className="hover:bg-soft-beige/20 transition-colors">
              <td className="px-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sand/20 flex items-center justify-center text-forest-olive font-bold text-xs">AS</div>
                  <span className="font-medium text-on-surface">Arjun Sharma</span>
                </div>
              </td>
              <td className="px-8 py-4 text-on-surface-variant">Dr. Priya Nair</td>
              <td className="px-8 py-4 text-on-surface-variant">Panchakarma</td>
              <td className="px-8 py-4">
                <span className="px-3 py-1 bg-success/10 text-success rounded-full text-label-sm font-label-sm">Completed</span>
              </td>
              <td className="px-8 py-4 font-label-sm text-label-sm text-on-surface">₹ 1,500</td>
            </tr>
            <tr className="hover:bg-soft-beige/20 transition-colors">
              <td className="px-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sand/20 flex items-center justify-center text-forest-olive font-bold text-xs">MK</div>
                  <span className="font-medium text-on-surface">Maya Kapoor</span>
                </div>
              </td>
              <td className="px-8 py-4 text-on-surface-variant">Dr. Ananya Sharma</td>
              <td className="px-8 py-4 text-on-surface-variant">Dietetics</td>
              <td className="px-8 py-4">
                <span className="px-3 py-1 bg-warning/10 text-warning rounded-full text-label-sm font-label-sm">Pending</span>
              </td>
              <td className="px-8 py-4 font-label-sm text-label-sm text-on-surface">₹ 1,200</td>
            </tr>
            <tr className="hover:bg-soft-beige/20 transition-colors">
              <td className="px-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sand/20 flex items-center justify-center text-forest-olive font-bold text-xs">RV</div>
                  <span className="font-medium text-on-surface">Rohan Verma</span>
                </div>
              </td>
              <td className="px-8 py-4 text-on-surface-variant">Dr. Rahul Varma</td>
              <td className="px-8 py-4 text-on-surface-variant">Dravyaguna</td>
              <td className="px-8 py-4">
                <span className="px-3 py-1 bg-success/10 text-success rounded-full text-label-sm font-label-sm">Completed</span>
              </td>
              <td className="px-8 py-4 font-label-sm text-label-sm text-on-surface">₹ 1,800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  {/* Footer Component */}
  <footer className="bg-surface-container-low border-t border-soft-beige mt-stack-lg">
    <div className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
      <div className="mb-6 md:mb-0">
        <span className="text-headline-md font-headline-md text-forest-olive block mb-2">Amrutam</span>
        <p className="text-on-surface-variant font-body-md text-body-md max-w-xs">Ancient Wisdom, Clinical Precision. Telemedicine platform for holistic healing.</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex gap-8">
          <a className="text-on-surface-variant hover:text-primary underline transition-all font-label-sm text-label-sm" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary underline transition-all font-label-sm text-label-sm" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary underline transition-all font-label-sm text-label-sm" href="#">Help Center</a>
        </div>
        <p className="text-on-surface-variant font-label-sm text-label-sm opacity-60">© 2026 Amrutam Telemedicine by M Harish Gautham. Ancient Wisdom, Clinical Precision.</p>
      </div>
    </div>
  </footer>
</div>

    </>
  );
}
