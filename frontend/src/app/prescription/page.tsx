"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Prescription() {
  return (
    <>
      <div>
  {/* Top Navigation Bar */}
  <nav className="bg-surface dark:bg-inverse-surface shadow-[0_4px_20px_rgba(63,77,43,0.08)] docked full-width top-0 z-50 no-print">
    <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
      <div className="flex items-center gap-8">
        <span className="text-title-lg font-headline-lg text-forest-olive dark:text-primary-fixed-dim tracking-tight cursor-pointer active:scale-95 transition-transform">Amrutam</span>
        <div className="hidden md:flex gap-6">
          <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Find Doctor</a>
          <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Consultations</a>
          <a className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary dark:border-primary-fixed-dim pb-1 text-label-md font-label-md" href="#">Prescriptions</a>
          <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Analytics</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all duration-300">notifications</span>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all duration-300">settings</span>
        <div className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-soft-beige">
            <img className="w-full h-full object-cover" data-alt="A professional headshot of a person with a serene expression, soft daylighting, minimalist aesthetic, in a modern clinical wellness setting. The person has a clean, approachable look consistent with premium healthcare branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxcROsFt2Qnx9ITtZfFA_cL55U7KDYrUZMKPO9l4DDtLhP0Fo8z9B85jYja6ZMk6eAS-AA4bga9ZyAJ5E2f1xAssxBfmszUkt3yYJMlcYXmr4fMTmBt1swGpQ8QgeQ0CXSZ_sro43DC2p3uAEeq5AiVth8B3pL_Z1hWKQoMbhJ2t_IzReUKEnvKGPEIuMxL7UST7HDicNe_Pd38jn5XYWh1DRHkpVL2aaUTwTJpFUxQAbcFyy027JomA" />
          </div>
          <span className="text-label-md font-label-md text-primary">Profile</span>
        </div>
      </div>
    </div>
  </nav>
  {/* Main Content Canvas */}
  <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
    {/* Breadcrumbs & Actions */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 no-print">
      <div className="flex items-center gap-2 text-on-surface-variant">
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        <a className="text-label-md font-label-md hover:text-primary transition-colors" href="#">Back to My Prescriptions</a>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-off-white border border-sand text-forest-olive rounded-lg font-label-md text-label-md hover:bg-soft-beige transition-all active:scale-95" onClick={() => window.print()}>
          <span className="material-symbols-outlined text-warning" style={{fontVariationSettings: '"FILL" 1'}}>print</span>
          Print Prescription
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-forest-olive text-off-white rounded-lg font-label-md text-label-md hover:opacity-90 shadow-sm transition-all active:scale-95">
          <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>download</span>
          Download PDF
        </button>
      </div>
    </div>
    {/* Prescription Card (The Official Document) */}
    <div className="prescription-canvas paper-texture border-t-4 border-warning shadow-[0_8px_40px_rgba(63,77,43,0.1)] rounded-xl overflow-hidden mb-12">
      {/* Prescription Header */}
      <div className="p-8 md:p-12 border-b border-soft-beige bg-surface-container-lowest/50">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex gap-6 items-start">
            <div className="w-20 h-20 rounded-xl bg-soft-beige overflow-hidden border border-sand flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="A portrait of an experienced Ayurvedic physician in a clinical setting. The doctor wears a professional white coat with olive green accents, looking trustworthy and serene. Soft lighting enhances the minimalist, premium wellness atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkcnrxn3bngPLz0fznTJijjBBgg6-A9gN7jvMKMPz8czMKQVfo4cNMeOlmHtcOnvV78-8m3sydINKDHyUjaKDKNiJpLrrtNCB3ejhAUYME59NS0UAFq9Tw41HsXJPSUXFHE4XhxhUCw1NOzYAl0a1WkSWFA45JbugkXm1kpMh4bybxpJEvn_4LJJWiIoeGWIB3rKTz1wxzs7h5iXzsyhGsqKT5sdz3gChOHVHN7OGcNb6LkZVW2SiPMQ" />
            </div>
            <div>
              <h1 className="text-headline-md font-headline-md text-forest-olive mb-1">Dr. Ananya Sharma</h1>
              <p className="text-body-md font-body-md text-on-surface-variant mb-2">BAMS, MD - Ayurvedic Internal Medicine</p>
              <p className="text-label-sm font-label-sm text-tertiary-container flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Verified Practitioner • Clinical Precision Center
              </p>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Prescription ID</p>
            <p className="font-label-md text-label-md text-forest-olive mb-4">#AC-2024-99812</p>
            <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Date Issued</p>
            <p className="font-label-md text-label-md text-forest-olive">October 24, 2024</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-soft-beige/60">
          <div>
            <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest block mb-2">Patient Name</span>
            <p className="text-title-lg font-headline-md text-forest-olive">James Henderson</p>
          </div>
          <div>
            <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest block mb-2">Age / Gender</span>
            <p className="text-body-lg font-body-lg text-on-surface">34 Years • Male</p>
          </div>
          <div>
            <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest block mb-2">Weight / Prakriti</span>
            <p className="text-body-lg font-body-lg text-on-surface">78 kg • Pitta-Vata</p>
          </div>
        </div>
      </div>
      {/* Content Body */}
      <div className="p-8 md:p-12 space-y-12">
        {/* Diagnosis Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-warning" style={{fontVariationSettings: '"FILL" 1'}}>medical_information</span>
            <h2 className="text-title-lg font-headline-md text-forest-olive">Diagnosis &amp; Observation</h2>
          </div>
          <div className="bg-soft-beige/30 border border-soft-beige rounded-lg p-6">
            <p className="text-body-lg font-body-lg text-on-surface leading-relaxed">
              Chronic digestive distress characterized by <span className="font-semibold text-primary">Amlapitta</span> (Hyperacidity) and seasonal fatigue. Observations indicate elevated Pitta levels in the digestive tract. Recommendation includes specialized dietary adjustments and herbal supplements to balance Agni (Digestive Fire).
            </p>
          </div>
        </section>
        {/* Medications Section (Bento-style list) */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-warning" style={{fontVariationSettings: '"FILL" 1'}}>prescriptions</span>
            <h2 className="text-title-lg font-headline-md text-forest-olive">Prescribed Medications</h2>
          </div>
          <div className="space-y-4">
            {/* Medicine Item 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-off-white border border-soft-beige rounded-xl hover:shadow-sm transition-all group">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-forest-olive group-hover:bg-primary group-hover:text-off-white transition-colors">
                  <span className="material-symbols-outlined">pill</span>
                </div>
                <div>
                  <h3 className="text-body-lg font-semibold text-forest-olive">Avipattikar Churna</h3>
                  <p className="text-label-md font-label-md text-on-surface-variant">Herbal blend for acidity</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  500mg • Twice Daily
                </div>
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  After Meals
                </div>
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  Duration: 30 Days
                </div>
              </div>
            </div>
            {/* Medicine Item 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-off-white border border-soft-beige rounded-xl hover:shadow-sm transition-all group">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-forest-olive group-hover:bg-primary group-hover:text-off-white transition-colors">
                  <span className="material-symbols-outlined">liquor</span>
                </div>
                <div>
                  <h3 className="text-body-lg font-semibold text-forest-olive">Kumaryasava</h3>
                  <p className="text-label-md font-label-md text-on-surface-variant">Liquid digestive tonic</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  15ml • Daily
                </div>
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  Before Sleep
                </div>
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  Duration: 15 Days
                </div>
              </div>
            </div>
            {/* Medicine Item 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-off-white border border-soft-beige rounded-xl hover:shadow-sm transition-all group">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-forest-olive group-hover:bg-primary group-hover:text-off-white transition-colors">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <div>
                  <h3 className="text-body-lg font-semibold text-forest-olive">Brahmi Grita</h3>
                  <p className="text-label-md font-label-md text-on-surface-variant">Medicated Ghee for mental clarity</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  5g • Once Daily
                </div>
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  Early Morning
                </div>
                <div className="px-4 py-2 bg-surface-container-low rounded-lg text-label-md font-label-md text-forest-olive">
                  Duration: 45 Days
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Lifestyle Instructions */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-warning" style={{fontVariationSettings: '"FILL" 1'}}>assignment</span>
            <h2 className="text-title-lg font-headline-md text-forest-olive">Instructions &amp; Lifestyle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface-container-low/40 rounded-xl border-l-4 border-forest-olive">
              <h4 className="text-label-md font-bold text-forest-olive uppercase tracking-wider mb-3">Dietary Guidance</h4>
              <ul className="space-y-2 text-body-md text-on-surface">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Avoid spicy, sour, and fermented foods.</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Favor cooling foods like cucumbers, coconut, and melons.</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Sip warm water throughout the day.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface-container-low/40 rounded-xl border-l-4 border-warning">
              <h4 className="text-label-md font-bold text-forest-olive uppercase tracking-wider mb-3">Lifestyle Routine</h4>
              <ul className="space-y-2 text-body-md text-on-surface">
                <li className="flex items-start gap-2"><span className="text-warning">•</span> Practice Sheetali Pranayama for 10 minutes daily.</li>
                <li className="flex items-start gap-2"><span className="text-warning">•</span> Maintain a consistent sleep schedule (Before 10 PM).</li>
                <li className="flex items-start gap-2"><span className="text-warning">•</span> Avoid heavy physical exertion during peak sun hours.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Footer / Signature */}
      <div className="p-8 md:p-12 border-t border-soft-beige bg-surface-container-lowest/30">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-md">
            <p className="text-label-sm font-label-sm text-on-surface-variant mb-2">Note to Pharmacist</p>
            <p className="text-body-md italic text-on-surface-variant">The herbs listed above should be authentic Grade-A Ayurvedic preparations. Do not substitute Kumaryasava with generic herbal bitters.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="mb-2">
              <img className="h-16 w-auto inline-block" data-alt="A realistic, elegant digital signature in dark green ink of a physician. It looks handwritten with fluid strokes, positioned on a clean white digital document background, signifying official validation and professional authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5cyjUPh5FaE0ABExtj7U7XTYtVRCGPr0IY-9pQ6Oh4kJxyWBd61kZbTNJYROA-iru0i7qDEAZW5nRQAnkpX5Gnc5I2B7uW2sKAbcxP2PpD2I51x1BaiFJzspNEyvSxoUgpJfqw51-6BCcldrERYcFmD2-fuhN-ijvjnTPk6WZS8HBh4ndkMezzwCwvndLh-mfMCXJASm6OXsU0t9G0qdykCXEIgSSr3BeNVitnWI6yha9xhq4S6GRzA" />
            </div>
            <p className="text-label-md font-bold text-forest-olive">Digitally Signed By</p>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Dr. Ananya Sharma (Registration: AYU-88219)</p>
          </div>
        </div>
      </div>
    </div>
    {/* Help Section (Post Prescription) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 no-print">
      <div className="p-6 bg-off-white border border-soft-beige rounded-xl flex items-start gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">shopping_cart</span>
        <div>
          <h4 className="font-bold text-forest-olive">Order Medicines</h4>
          <p className="text-label-sm text-on-surface-variant">Get these delivered to your home by verified Amrutam partners.</p>
        </div>
      </div>
      <div className="p-6 bg-off-white border border-soft-beige rounded-xl flex items-start gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">calendar_month</span>
        <div>
          <h4 className="font-bold text-forest-olive">Follow-up Call</h4>
          <p className="text-label-sm text-on-surface-variant">Schedule your 15-day progress check with Dr. Sharma.</p>
        </div>
      </div>
      <div className="p-6 bg-off-white border border-soft-beige rounded-xl flex items-start gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">contact_support</span>
        <div>
          <h4 className="font-bold text-forest-olive">Ask a Question</h4>
          <p className="text-label-sm text-on-surface-variant">Need clarification on the dosage or routine? Chat with support.</p>
        </div>
      </div>
    </div>
  </main>
  {/* Footer */}
  <footer className="bg-surface-container-low dark:bg-surface-container-lowest no-print">
    <div className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
      <div className="mb-6 md:mb-0">
        <span className="text-headline-md font-headline-md text-forest-olive">Amrutam</span>
        <p className="text-body-md font-body-md text-on-surface-variant mt-2">© 2026 Amrutam Telemedicine by M Harish Gautham. Ancient Wisdom, Clinical Precision.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all text-label-sm font-label-sm" href="#">Privacy Policy</a>
        <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all text-label-sm font-label-sm" href="#">Terms of Service</a>
        <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all text-label-sm font-label-sm" href="#">Help Center</a>
        <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all text-label-sm font-label-sm" href="#">Contact Support</a>
      </div>
    </div>
  </footer>
</div>

    </>
  );
}
