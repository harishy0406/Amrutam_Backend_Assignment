"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function FindDoctor() {
  return (
    <>
      <div>
  {/* Top Navigation Bar */}
  <nav className="fixed top-0 left-0 right-0 z-50 bg-surface shadow-[0_4px_20px_rgba(63,77,43,0.08)]">
    <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
      <div className="flex items-center gap-8">
        <span className="text-title-lg font-headline-lg text-forest-olive tracking-tight">Amrutam</span>
        <div className="hidden md:flex gap-6 items-center">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 text-label-md font-label-md" href="#">Find Doctor</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Consultations</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Prescriptions</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Analytics</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <input className="bg-soft-beige border-b-2 border-primary/20 focus:border-primary px-4 py-2 rounded-t-lg text-body-md outline-none transition-all w-64" placeholder="Search conditions..." type="text" />
          <span className="material-symbols-outlined absolute right-3 top-2.5 text-outline">search</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:text-primary transition-all active:scale-95"><span className="material-symbols-outlined">notifications</span></button>
          <button className="p-2 hover:text-primary transition-all active:scale-95"><span className="material-symbols-outlined">settings</span></button>
          <div className="flex items-center gap-2 cursor-pointer ml-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">person</span>
            </div>
            <span className="text-label-md font-label-md font-bold hidden sm:block">Profile</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main className="pt-24 pb-stack-lg max-w-container-max mx-auto px-margin-desktop min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Sidebar Filters */}
      <aside className="md:col-span-3 space-y-stack-lg">
        <div className="bg-soft-beige p-6 rounded-xl border border-[#E5DDCB]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-title-lg font-headline-md text-forest-olive">Filters</h3>
            <button className="text-label-sm font-label-sm text-earth-brown uppercase tracking-widest">Clear All</button>
          </div>
          {/* Specialization */}
          <div className="mb-8">
            <label className="text-label-md font-label-md text-on-surface-variant block mb-3">Specialization</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-body-md group-hover:text-primary transition-colors">Panchakarma</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-body-md group-hover:text-primary transition-colors">Yoga Therapy</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-body-md group-hover:text-primary transition-colors">Diet &amp; Nutrition</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-body-md group-hover:text-primary transition-colors">Kayachikitsa</span>
              </label>
            </div>
          </div>
          {/* Availability */}
          <div className="mb-8">
            <label className="text-label-md font-label-md text-on-surface-variant block mb-3">Availability</label>
            <div className="grid grid-cols-2 gap-2">
              <button className="px-3 py-2 bg-primary text-off-white text-label-sm rounded transition-all">Today</button>
              <button className="px-3 py-2 bg-white border border-outline-variant text-label-sm rounded hover:border-primary transition-all">This Week</button>
            </div>
          </div>
          {/* Rating */}
          <div>
            <label className="text-label-md font-label-md text-on-surface-variant block mb-3">Minimum Rating</label>
            <div className="flex items-center justify-between gap-1">
              <button className="p-2 bg-white border border-outline-variant rounded-lg flex flex-col items-center flex-1 hover:border-warning">
                <span className="text-label-sm font-bold">3+</span>
                <span className="material-symbols-outlined text-warning text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              </button>
              <button className="p-2 bg-white border border-outline-variant rounded-lg flex flex-col items-center flex-1 hover:border-warning">
                <span className="text-label-sm font-bold">4+</span>
                <span className="material-symbols-outlined text-warning text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              </button>
              <button className="p-2 bg-primary text-off-white rounded-lg flex flex-col items-center flex-1 shadow-md">
                <span className="text-label-sm font-bold">4.5+</span>
                <span className="material-symbols-outlined text-warning text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-highest p-6 rounded-xl border border-outline-variant overflow-hidden relative">
          <h4 className="text-headline-md font-headline-md text-forest-olive relative z-10">Premium Care</h4>
          <p className="text-body-md mt-2 relative z-10 opacity-80">Access elite practitioners and 24/7 priority booking.</p>
          <button className="mt-4 text-primary font-bold text-label-md flex items-center gap-1 group relative z-10">
            Upgrade Now <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </aside>
      {/* Main Content Area */}
      <div className="md:col-span-9">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-headline-lg font-headline-lg text-forest-olive">Available Doctors</h1>
            <p className="text-body-lg text-on-surface-variant mt-1">24 practitioners found matching your criteria</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-label-md font-label-md text-on-surface-variant">Sort by:</span>
            <select className="bg-transparent border-none text-primary font-bold text-label-md focus:ring-0 cursor-pointer">
              <option>Highest Rated</option>
              <option>Availability</option>
              <option>Years of Experience</option>
            </select>
          </div>
        </div>
        {/* Doctor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Doctor Card 1 */}
          <div className="doctor-card bg-soft-beige rounded-xl border border-[#E5DDCB] p-6 transition-all duration-300 flex flex-col">
            <div className="flex gap-4 mb-6">
              <div className="relative">
                <img className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-sm" data-alt="A portrait of a serene South Asian male doctor with a kind expression, wearing professional clinical attire with subtle ethnic embroidery. He is set against a soft, sun-drenched background of a modern holistic clinic with lush green plants. High-end lifestyle photography, warm natural lighting, premium health and wellness aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbPjWaRWbwaz7UAVLc_ZJ_jH4MooFoJgV-2ecXvyduzLBchxYR4-hrDR7hpM3HPmWgy88r_osiU40D0oXEZjv5LMS1dLGGjf1mZpw9_jlHWFWNnjSfmz_6hFReIg4dSiXz4gvsYuVbJwB-zFWkOTMrSsZUP1Gh4MmgKgszt-qDCeaBtgllfRvgCagUt5c_oQXGvmWqeYzd5E8cvzNB9-fpB6DP_H9Wp0VvIdlf1qRTI6EAlGkDTLn4JA" />
                <div className="absolute -bottom-2 -right-2 bg-success w-5 h-5 rounded-full border-2 border-soft-beige" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-title-lg font-headline-md text-forest-olive">Dr. Ananya Sharma</h3>
                  <div className="flex items-center gap-1 text-warning">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                    <span className="text-label-md font-bold text-on-surface">4.9</span>
                    <span className="text-label-sm text-outline-variant font-normal">(128)</span>
                  </div>
                </div>
                <p className="text-body-md text-earth-brown font-medium">BAMS, Panchakarma Specialist</p>
                <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">history</span>
                  <span className="text-label-sm">12 Years Experience</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Available Today</p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">09:00 AM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">11:30 AM</button>
                <button className="px-4 py-2 bg-primary-container text-on-primary-container border border-primary-container rounded-full text-label-md whitespace-nowrap">02:15 PM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">04:30 PM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">06:00 PM</button>
              </div>
            </div>
            <div className="mt-auto flex gap-3 pt-4 border-t border-outline-variant/30">
              <button className="flex-1 px-4 py-3 bg-white border border-forest-olive text-forest-olive font-bold text-label-md rounded-lg hover:bg-forest-olive/5 transition-all active:scale-95">View Profile</button>
              <button className="flex-[1.5] px-4 py-3 bg-forest-olive text-off-white font-bold text-label-md rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95">Book Now</button>
            </div>
          </div>
          {/* Doctor Card 2 */}
          <div className="doctor-card bg-soft-beige rounded-xl border border-[#E5DDCB] p-6 transition-all duration-300 flex flex-col">
            <div className="flex gap-4 mb-6">
              <div className="relative">
                <img className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-sm" data-alt="A portrait of an older, distinguished female Ayurvedic doctor with graceful silver hair and a professional white coat. She is sitting in a minimalist study with ancient wooden shelves holding herbs and texts. Bright, airy, high-key lighting creates a sense of profound trust and restorative wisdom. Soft earth tones and a premium clinical atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfe568e_m7G-nwCEN1hAmUgHcY7axxvkloAYvy-8EPkQmjBcbwaF34cvuMhciEi5M6dCJJwfa9cEpbCEqTFLy4LMqkg-1fIVvR_P67kkqmSsodYcogrQM0Au2cPZLBZvL_oWvIk0bLF3jSDcNZOhdZ9QqcS6RLwtfV9WorE_msN881jugze3_J7f0ckOOaiV6PEXDI2GLxeVqqE5hLC1H9ReDWMKiGzmF4GicH4PsKE3MHTYrUWfC9yA" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-title-lg font-headline-md text-forest-olive">Dr. Vikram Iyengar</h3>
                  <div className="flex items-center gap-1 text-warning">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                    <span className="text-label-md font-bold text-on-surface">4.8</span>
                    <span className="text-label-sm text-outline-variant font-normal">(94)</span>
                  </div>
                </div>
                <p className="text-body-md text-earth-brown font-medium">MD Ayurveda, Chronic Pain Specialist</p>
                <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">history</span>
                  <span className="text-label-sm">18 Years Experience</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Available Tomorrow</p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">10:00 AM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">11:00 AM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">12:30 PM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">03:45 PM</button>
              </div>
            </div>
            <div className="mt-auto flex gap-3 pt-4 border-t border-outline-variant/30">
              <button className="flex-1 px-4 py-3 bg-white border border-forest-olive text-forest-olive font-bold text-label-md rounded-lg hover:bg-forest-olive/5 transition-all active:scale-95">View Profile</button>
              <button className="flex-[1.5] px-4 py-3 bg-forest-olive text-off-white font-bold text-label-md rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95">Book Now</button>
            </div>
          </div>
          {/* Doctor Card 3 */}
          <div className="doctor-card bg-soft-beige rounded-xl border border-[#E5DDCB] p-6 transition-all duration-300 flex flex-col">
            <div className="flex gap-4 mb-6">
              <div className="relative">
                <img className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-sm" data-alt="A smiling female doctor with a holistic approach, wearing a light-colored linen professional outfit. She is holding a tablet in a bright, modern wellness studio with large windows and blurred bamboo in the background. The lighting is ethereal and soft, emphasizing a serene and restorative health journey. Premium minimalist UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRYdDpIJqhoGyCRmB9atSw5yjDGKSYEla1NR8PgZQfq48mUsiOhKGJ_0xWsKMV0nZHN9v2JAQo5i0ZoKxxLGmJCPL5EVH6NSJiSCzUJ16kZ5CI8EaZXpcRIlv-uQ1YGA6lJoVzGoQF0HbuSccEttQruv9Ej8qdas6QckOvkePLtI6jE06l1sYfGNu44wYfnkrD5jyPf2G2Fva4OmcUVCTcgTWB84GHHZqgsrl4iY6Ge7_xHZNPiYbkQQ" />
                <div className="absolute -bottom-2 -right-2 bg-success w-5 h-5 rounded-full border-2 border-soft-beige" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-title-lg font-headline-md text-forest-olive">Dr. Meera Kapur</h3>
                  <div className="flex items-center gap-1 text-warning">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                    <span className="text-label-md font-bold text-on-surface">5.0</span>
                    <span className="text-label-sm text-outline-variant font-normal">(210)</span>
                  </div>
                </div>
                <p className="text-body-md text-earth-brown font-medium">BAMS, Yoga Therapy Expert</p>
                <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">history</span>
                  <span className="text-label-sm">8 Years Experience</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Available Today</p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">08:30 AM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">01:00 PM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">05:15 PM</button>
              </div>
            </div>
            <div className="mt-auto flex gap-3 pt-4 border-t border-outline-variant/30">
              <button className="flex-1 px-4 py-3 bg-white border border-forest-olive text-forest-olive font-bold text-label-md rounded-lg hover:bg-forest-olive/5 transition-all active:scale-95">View Profile</button>
              <button className="flex-[1.5] px-4 py-3 bg-forest-olive text-off-white font-bold text-label-md rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95">Book Now</button>
            </div>
          </div>
          {/* Doctor Card 4 */}
          <div className="doctor-card bg-soft-beige rounded-xl border border-[#E5DDCB] p-6 transition-all duration-300 flex flex-col">
            <div className="flex gap-4 mb-6">
              <div className="relative">
                <img className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-sm" data-alt="A portrait of a male practitioner in a peaceful clinic, surrounded by modern diagnostic equipment and jars of Ayurvedic herbs. He looks approachable and highly professional. The composition uses high-end architectural photography techniques, soft focus backgrounds, and a serene light-mode palette of warm creams and deep olives." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFqJvUD6FWV79Yt7c8MSAV_E6xkdAN6sGK-rw3AEMkCR2BUjvJk9zVgfE-AywZBIkudqST4A82Q-IwG45mX75urC-pRRGBZQbVkbulDY2qEWtBJ85nmFznaYvbtsBhbCVWyqJWn5S4loWK1gRTmhbUaR34o6aizcdPTriCYPYEDkTL4eLSqMYQNmzAtKt_EucLgU1sUXA383Iai2FZ-HGp4FtyReGOG3uxol0990Vmj0NPmDQR-BGZwg" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-title-lg font-headline-md text-forest-olive">Dr. Rahul Varma</h3>
                  <div className="flex items-center gap-1 text-warning">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                    <span className="text-label-md font-bold text-on-surface">4.7</span>
                    <span className="text-label-sm text-outline-variant font-normal">(56)</span>
                  </div>
                </div>
                <p className="text-body-md text-earth-brown font-medium">BAMS, Diet &amp; Lifestyle Coach</p>
                <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">history</span>
                  <span className="text-label-sm">5 Years Experience</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Next Available: Wednesday</p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">09:15 AM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">12:00 PM</button>
                <button className="px-4 py-2 bg-white border border-outline-variant rounded-full text-label-md hover:border-primary hover:text-primary transition-all whitespace-nowrap">02:30 PM</button>
              </div>
            </div>
            <div className="mt-auto flex gap-3 pt-4 border-t border-outline-variant/30">
              <button className="flex-1 px-4 py-3 bg-white border border-forest-olive text-forest-olive font-bold text-label-md rounded-lg hover:bg-forest-olive/5 transition-all active:scale-95">View Profile</button>
              <button className="flex-[1.5] px-4 py-3 bg-forest-olive text-off-white font-bold text-label-md rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95">Book Now</button>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="mt-stack-lg flex justify-center items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-soft-beige transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-forest-olive text-white font-bold">1</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-soft-beige transition-all">2</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-soft-beige transition-all">3</button>
          <span className="mx-2">...</span>
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-soft-beige transition-all">8</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-soft-beige transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      </div>
    </div>
  </main>
  {/* Footer */}
  <footer className="bg-surface-container-low border-t border-soft-beige">
    <div className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
      <div className="mb-4 md:mb-0">
        <span className="text-headline-md font-headline-md text-forest-olive">Amrutam</span>
        <p className="text-body-md text-on-surface-variant mt-1">© 2026 Amrutam Telemedicine by M Harish Gautham. Ancient Wisdom, Clinical Precision.</p>
      </div>
      <div className="flex gap-6">
        <a className="text-on-surface-variant hover:text-primary underline transition-all text-label-sm font-label-sm" href="#">Privacy Policy</a>
        <a className="text-on-surface-variant hover:text-primary underline transition-all text-label-sm font-label-sm" href="#">Terms of Service</a>
        <a className="text-on-surface-variant hover:text-primary underline transition-all text-label-sm font-label-sm" href="#">Help Center</a>
        <a className="text-on-surface-variant hover:text-primary underline transition-all text-label-sm font-label-sm" href="#">Contact Support</a>
      </div>
    </div>
  </footer>
  {/* FAB for quick filters/assistance on mobile */}
  <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-forest-olive text-off-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform">
    <span className="material-symbols-outlined">filter_list</span>
  </button>
</div>

    </>
  );
}
