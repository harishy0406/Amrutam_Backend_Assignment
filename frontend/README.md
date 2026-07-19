# Amrutam Telemedicine Frontend
> **A modern, responsive, and intuitive interface for patients and doctors.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Language-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## 🎯 Overview

The frontend is built with Next.js 15 (App Router) and Tailwind CSS. It provides a seamless experience for users to browse doctors, book appointments, and manage prescriptions, seamlessly integrating with the FastAPI backend.

## ✨ Highlights

- 🚀 **Next.js App Router** — Optimized for performance and SEO.
- 🎨 **Tailwind CSS** — Beautiful, responsive, and consistent design system.
- 🔌 **Axios Interceptors** — Centralized API client with automatic token injection.
- 🔒 **Route Protection** — Client-side route guards for authenticated pages.
- 📱 **Responsive Design** — Fully mobile-friendly interface.

## 📂 Project Structure

- `/src/app` - Next.js routing and pages (e.g., `/login`, `/doctors`, `/prescriptions`).
- `/src/components` - Reusable UI components (buttons, inputs, cards).
- `/src/lib` - Utility functions and the `api.ts` Axios client.

## ⚡ Getting Started

1. Configure `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to interact with the platform.
