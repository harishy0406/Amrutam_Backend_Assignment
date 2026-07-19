"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fetchApi } from '@/lib/api';

export default function DoctorDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetchApi<{data: any[]}>('/bookings/');
        setBookings(response.data);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <>
      <header className="bg-surface shadow-[0_4px_20px_rgba(63,77,43,0.08)] sticky top-0 z-50">
        <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-title-lg font-headline-lg text-forest-olive tracking-tight cursor-pointer">Amrutam - Doctor</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={handleLogout} title="Logout" className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all active:scale-95">logout</button>
          </div>
        </nav>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-desktop py-stack-lg min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-headline-lg font-headline-lg text-forest-olive">My Consultations</h1>
            <p className="text-body-lg text-on-surface-variant mt-1">Manage your upcoming and past appointments.</p>
          </div>
          <button className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition-colors">Set Availability</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-soft-beige">
              <tr>
                <th className="p-4 font-label-md text-on-surface">Patient ID</th>
                <th className="p-4 font-label-md text-on-surface">Status</th>
                <th className="p-4 font-label-md text-on-surface">Date</th>
                <th className="p-4 font-label-md text-on-surface">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-on-surface-variant">Loading appointments...</td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-on-surface-variant">No appointments found.</td>
                </tr>
              ) : (
                bookings.map((booking, idx) => (
                  <tr key={idx} className="border-b border-outline-variant hover:bg-soft-beige/50">
                    <td className="p-4 text-body-md">{booking.patient_id}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-label-sm ${
                        booking.status === 'confirmed' ? 'bg-success/20 text-success' : 
                        booking.status === 'pending' ? 'bg-warning/20 text-warning' : 
                        'bg-error/20 text-error'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-4 text-body-md">{new Date(booking.created_at).toLocaleDateString()}</td>
                    <td className="p-4">
                      {booking.status === 'completed' && (
                        <button className="text-primary hover:underline font-label-md">Write Prescription</button>
                      )}
                      {booking.status === 'pending' && (
                        <div className="flex gap-2">
                           <button className="text-success hover:underline font-label-md">Confirm</button>
                           <button className="text-error hover:underline font-label-md">Cancel</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
