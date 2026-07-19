"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

export default function BookingStatus() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <>
      <div>
  {/* TopNavBar (Shell Component) */}
  <header className="bg-surface shadow-[0_4px_20px_rgba(63,77,43,0.08)] sticky top-0 z-50">
    <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
      <div className="text-title-lg font-headline-lg text-forest-olive tracking-tight cursor-pointer">
        Amrutam
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Find Doctor</a>
        <a className="text-primary font-bold border-b-2 border-primary pb-1 text-label-md font-label-md" href="#">Consultations</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Prescriptions</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Analytics</a>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all">notifications</span>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all">settings</span>
        <button onClick={handleLogout} title="Logout" className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all active:scale-95">logout</button>
        <button className="bg-forest-olive text-off-white px-6 py-2 rounded-lg text-label-md font-label-md active:scale-95 transition-transform">
          Profile
        </button>
      </div>
    </nav>
  </header>
  <main className="max-w-container-max mx-auto px-margin-desktop py-stack-lg min-h-[calc(100vh-160px)]">
    {/* Multi-Step Progress Indicator */}
    <div className="max-w-3xl mx-auto mb-12">
      <div className="flex justify-between items-center relative">
        {/* Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0" />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary -translate-y-1/2 z-0 origin-left scale-x-100 transition-transform duration-1000" />
        {/* Steps */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-warm-cream">
            <span className="material-symbols-outlined text-[20px]">check</span>
          </div>
          <span className="absolute -bottom-8 whitespace-nowrap text-label-sm font-label-sm text-primary uppercase">Select Doctor</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-warm-cream">
            <span className="material-symbols-outlined text-[20px]">check</span>
          </div>
          <span className="absolute -bottom-8 whitespace-nowrap text-label-sm font-label-sm text-primary uppercase">Schedule</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-warm-cream">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '"FILL" 1'}}>stars</span>
          </div>
          <span className="absolute -bottom-8 whitespace-nowrap text-label-sm font-label-sm text-primary font-bold uppercase">Confirmation</span>
        </div>
      </div>
    </div>
    {/* Success Animation State */}
    <div className="flex flex-col items-center text-center mb-12 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mb-6 success-glow">
        <span className="material-symbols-outlined text-success text-[48px] animate-pulse">check_circle</span>
      </div>
      <h1 className="font-headline-lg text-headline-lg text-forest-olive mb-2">Payment Successful</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Your constitutional consultation has been secured. A confirmation email with clinical pre-screening forms has been sent to your inbox.</p>
    </div>
    {/* Bento Grid Layout for Summary & Transaction */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Consultation Summary Card */}
      <div className="md:col-span-7 bento-card rounded-xl p-8 flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div>
            <span className="bg-secondary-container text-on-secondary-container text-label-sm font-label-sm px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Consultation Summary</span>
            <h2 className="font-headline-md text-headline-md text-forest-olive mt-2">Vata-Pitta Balance Session</h2>
          </div>
          <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-soft-beige">
            <img className="w-full h-full object-cover" data-alt="A professional studio portrait of a middle-aged female Ayurvedic doctor with a serene expression, wearing a minimalist cream-colored clinical coat and a simple gold necklace. The lighting is soft and warm, reflecting a premium wellness clinic environment with botanical accents in the blurred background. High-key aesthetic, clinical yet warm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsj3b1TG-mImLqo6gmqvRl1NAdKptTYPZo1Cok4JbPuTQO4nedKjAgwUSSu5hotkm81YCXmMR0xKl8owLRs41DOlrGvcWvXu7gfvFIIz2jaOEIGgV_NV1eSEBGoVftF_wtmkZtLGej0tTAhhLPnnNJwpeHirjUBiUXba7hS0wQYtnb4tVL7GsvZkGle4fxvb6asSlOAkTMpHix6kP8oEEzH-TGVzPdHwOhelQFaC0mz7c9mDviSt_PkQ" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-soft-beige flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-forest-olive">person</span>
            </div>
            <div>
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">Practitioner</p>
              <p className="text-body-md font-semibold text-on-surface">Dr. Ananya Sharma</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-soft-beige flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-forest-olive">calendar_today</span>
            </div>
            <div>
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">Date</p>
              <p className="text-body-md font-semibold text-on-surface">October 24, 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-soft-beige flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-forest-olive">schedule</span>
            </div>
            <div>
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">Time Slot</p>
              <p className="text-body-md font-semibold text-on-surface">10:30 AM — 11:30 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-soft-beige flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-forest-olive">videocam</span>
            </div>
            <div>
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">Mode</p>
              <p className="text-body-md font-semibold text-on-surface">HD Video Consultation</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-soft-beige">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30">
            <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>info</span>
            <div>
              <p className="text-label-md font-label-md text-secondary-fixed-dim font-bold mb-1">AYURVEDIC TIP</p>
              <p className="text-body-md text-on-surface-variant italic">"Please avoid heavy meals 2 hours before your session for a more accurate pulse reading (Nadi Pariksha) during the visual assessment."</p>
            </div>
          </div>
        </div>
      </div>
      {/* Transaction Details Card */}
      <div className="md:col-span-5 flex flex-col gap-gutter">
        <div className="bento-card rounded-xl p-8">
          <h3 className="font-title-lg text-title-lg text-forest-olive mb-6">Payment Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-body-md">
              <span className="text-on-surface-variant">Consultation Fee</span>
              <span className="font-semibold">$120.00</span>
            </div>
            <div className="flex justify-between items-center text-body-md">
              <span className="text-on-surface-variant">Clinical Surcharge</span>
              <span className="font-semibold">$15.00</span>
            </div>
            <div className="flex justify-between items-center text-body-md">
              <span className="text-on-surface-variant">Holistic Discount</span>
              <span className="text-success font-semibold">-$10.00</span>
            </div>
            <div className="pt-4 border-t border-soft-beige flex justify-between items-center">
              <span className="font-headline-md text-forest-olive">Total Paid</span>
              <div className="text-right">
                <span className="font-headline-md text-primary text-2xl">$125.00</span>
                <p className="text-label-sm font-label-sm text-on-surface-variant">Charged to Visa ending in 4242</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-3 bg-warm-cream rounded-lg border border-sand/30">
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">Ref ID</p>
              <p className="text-label-md font-label-md font-bold text-forest-olive">AC-882910</p>
            </div>
            <div className="p-3 bg-warm-cream rounded-lg border border-sand/30">
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">Status</p>
              <div className="flex items-center gap-1 text-success">
                <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '"FILL" 1'}}>verified</span>
                <p className="text-label-md font-label-md font-bold">SETTLED</p>
              </div>
            </div>
          </div>
        </div>
        {/* Secondary Actions */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-forest-olive text-off-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined">calendar_add_on</span>
            Add to Google Calendar
          </button>
          <button className="w-full bg-off-white border border-sand text-forest-olive py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-warm-cream transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined">download</span>
            Download Receipt (PDF)
          </button>
          <button className="w-full bg-transparent text-secondary py-2 font-semibold text-label-md hover:underline transition-all">
            Reschedule Appointment
          </button>
        </div>
      </div>
    </div>
    {/* Next Steps Section */}
    <section className="mt-16">
      <h3 className="font-headline-md text-headline-md text-forest-olive mb-8">Clinical Preparation</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Action 1 */}
        <div className="p-6 bg-off-white border border-soft-beige rounded-2xl flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex-shrink-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-secondary-container">assignment</span>
          </div>
          <div>
            <h4 className="font-title-lg text-forest-olive mb-1">Prakriti Analysis</h4>
            <p className="text-body-md text-on-surface-variant mb-4">Complete your body constitution questionnaire.</p>
            <a className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Start Form <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
        {/* Action 2 */}
        <div className="p-6 bg-off-white border border-soft-beige rounded-2xl flex items-start gap-4 opacity-50">
          <div className="w-10 h-10 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-outline">history</span>
          </div>
          <div>
            <h4 className="font-title-lg text-forest-olive mb-1">Medical History</h4>
            <p className="text-body-md text-on-surface-variant mb-4">Upload previous pathology reports for review.</p>
            <span className="text-label-sm font-label-sm uppercase tracking-tighter px-2 py-0.5 bg-outline-variant text-on-surface rounded">Locked</span>
          </div>
        </div>
        {/* Action 3 */}
        <div className="p-6 bg-off-white border border-soft-beige rounded-2xl flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex-shrink-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">live_help</span>
          </div>
          <div>
            <h4 className="font-title-lg text-forest-olive mb-1">Support Desk</h4>
            <p className="text-body-md text-on-surface-variant mb-4">Chat with our clinic concierge for technical help.</p>
            <a className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Open Chat <span className="material-symbols-outlined">chat_bubble</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer (Shell Component) */}
  <footer className="bg-surface-container-low border-t border-soft-beige mt-20">
    <div className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
      <div className="mb-6 md:mb-0">
        <div className="text-headline-md font-headline-md text-forest-olive mb-2">Amrutam</div>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-sm">© 2026 Amrutam Telemedicine by M Harish Gautham. Ancient Wisdom, Clinical Precision.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a className="text-on-surface-variant hover:text-primary underline transition-all text-label-sm font-label-sm" href="#">Privacy Policy</a>
        <a className="text-on-surface-variant hover:text-primary underline transition-all text-label-sm font-label-sm" href="#">Terms of Service</a>
        <a className="text-on-surface-variant hover:text-primary underline transition-all text-label-sm font-label-sm" href="#">Help Center</a>
        <a className="text-on-surface-variant hover:text-primary underline transition-all text-label-sm font-label-sm" href="#">Contact Support</a>
      </div>
    </div>
  </footer>
</div>

    </>
  );
}
