"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [role, setRole] = useState<"patient" | "doctor" | "admin">("patient");
  const [showPassword, setShowPassword] = useState(false);

  const getIndicatorLeft = () => {
    switch (role) {
      case "patient":
        return "calc(0% + 4px + 0%)";
      case "doctor":
        return "calc(32% + 4px + 2%)";
      case "admin":
        return "calc(64% + 4px + 4%)";
      default:
        return "calc(0% + 4px + 0%)";
    }
  };

  return (
    <>
      {/* Atmospheric Background Element */}
      <div className="absolute inset-0 bg-texture pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>

      <main className="relative z-10 w-full max-w-md mx-auto mt-20">
        {/* Logo Branding */}
        <div className="text-center mb-stack-lg">
          <h1 className="text-forest-olive font-headline-lg text-headline-lg tracking-tight mb-stack-sm">
            Amrutam
          </h1>
          <p className="text-on-surface-variant font-body-md text-body-md opacity-80">
            Ancient Wisdom, Clinical Precision.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-soft-beige border border-sand/30 rounded-xl p-8 custom-shadow backdrop-blur-sm">
          {/* Role Selection Tabs */}
          <div className="flex items-center justify-between p-1 bg-surface-container-low rounded-lg mb-stack-lg relative overflow-hidden">
            <div
              className="absolute top-1 h-[calc(100%-8px)] w-[32%] bg-white rounded-md shadow-sm transition-all duration-300 ease-out"
              style={{ left: getIndicatorLeft() }}
            ></div>
            <button
              className={`relative z-10 flex-1 py-2 font-label-md text-label-md transition-colors ${
                role === "patient" ? "text-forest-olive" : "text-on-surface-variant"
              }`}
              onClick={() => setRole("patient")}
            >
              Patient
            </button>
            <button
              className={`relative z-10 flex-1 py-2 font-label-md text-label-md transition-colors ${
                role === "doctor" ? "text-forest-olive" : "text-on-surface-variant"
              }`}
              onClick={() => setRole("doctor")}
            >
              Doctor
            </button>
            <button
              className={`relative z-10 flex-1 py-2 font-label-md text-label-md transition-colors ${
                role === "admin" ? "text-forest-olive" : "text-on-surface-variant"
              }`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-stack-md" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-stack-sm">
              <label
                className="block font-label-md text-label-md text-forest-olive ml-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border-b-2 border-transparent focus:border-primary border-sand/20 rounded-t-lg outline-none transition-all placeholder:text-outline-variant font-body-md text-body-md"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-stack-sm">
              <div className="flex justify-between items-center px-1">
                <label
                  className="font-label-md text-label-md text-forest-olive"
                  htmlFor="password"
                >
                  Password
                </label>
                <Link
                  className="text-label-sm font-label-sm text-secondary hover:text-primary transition-colors"
                  href="#"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                  lock
                </span>
                <input
                  className="w-full pl-10 pr-10 py-3 bg-white/50 border-b-2 border-transparent focus:border-primary border-sand/20 rounded-t-lg outline-none transition-all placeholder:text-outline-variant font-body-md text-body-md"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-outline transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? "visibility_off" : "visibility"}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-1 pt-1">
              <input
                className="w-4 h-4 rounded border-sand text-primary focus:ring-primary/20 bg-white/50"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-label-sm font-label-sm text-on-surface-variant cursor-pointer"
                htmlFor="remember"
              >
                Remember me on this device
              </label>
            </div>
            <Link href={role === "admin" ? "/admin" : role === "doctor" ? "/booking-status" : "/find-doctor"} className="block">
              <button
                className="w-full bg-forest-olive hover:bg-primary text-off-white font-label-md text-label-md py-4 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98] mt-stack-md flex items-center justify-center space-x-2"
                type="button"
              >
                <span>Sign In to Dashboard</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </Link>
          </form>

          <div className="mt-stack-lg pt-stack-lg border-t border-sand/20 text-center">
            <p className="text-body-md font-body-md text-on-surface-variant mb-stack-md">
              Or continue with
            </p>
            <div className="flex space-x-gutter">
              <button className="flex-1 flex items-center justify-center py-2.5 px-4 bg-white/60 border border-sand/30 rounded-lg hover:bg-white transition-all group">
                <div
                  className="w-5 h-5 mr-2"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaqR2Op7jCnoyGcP3RPK8_BZP-CuodjTnspSjIYf5Iz5Yt9UFHG7JGE6pzELZzAaBwh6Y8SbzfqjOM2_WIa2k2XSJDPuQhcGG3xL3jhzu2kojJYWWSj7j-MjkqQskYTL3nZfWs-1N8rSQ6W2CTox-F-hWOhDKSAh8fx43j8gvk-zo-MgKCoA4E4PPT4DFDYuHe-OrZ4U5MoOqjkNQvivCfKb7Jx3CcTH4k5JRJjl67FwjPArM6fpAhhA')",
                  }}
                ></div>
                <span className="text-label-sm font-label-sm text-forest-olive">
                  Google
                </span>
              </button>
              <button className="flex-1 flex items-center justify-center py-2.5 px-4 bg-white/60 border border-sand/30 rounded-lg hover:bg-white transition-all group">
                <span className="material-symbols-outlined mr-2 text-outline group-hover:text-primary">
                  fingerprint
                </span>
                <span className="text-label-sm font-label-sm text-forest-olive">
                  Biometrics
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Footer Links */}
        <div className="mt-stack-lg text-center pb-8">
          <p className="text-on-surface-variant font-body-md text-body-md">
            Don't have an account?{" "}
            <Link className="text-secondary font-semibold hover:underline" href="#">
              Request Access
            </Link>
          </p>
          <div className="mt-stack-md flex items-center justify-center space-x-gutter opacity-60">
            <Link
              className="text-label-sm font-label-sm hover:text-forest-olive transition-colors"
              href="#"
            >
              Privacy
            </Link>
            <span className="text-outline-variant">•</span>
            <Link
              className="text-label-sm font-label-sm hover:text-forest-olive transition-colors"
              href="#"
            >
              Terms
            </Link>
            <span className="text-outline-variant">•</span>
            <Link
              className="text-label-sm font-label-sm hover:text-forest-olive transition-colors"
              href="#"
            >
              Support
            </Link>
          </div>
        </div>
      </main>

      {/* Side Image Decoration for Web (Bento-style hint) */}
      <div className="hidden xl:flex fixed right-margin-desktop top-1/2 -translate-y-1/2 w-80 flex-col space-y-gutter pointer-events-none">
        <div className="h-64 w-full rounded-2xl border border-sand/30 overflow-hidden relative group custom-shadow">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqqUGUtr7BbENuIp-sfEkmT0jMGVPvvGkFiH84VNGqmWqpNlw5o6N8ye-EqiyFG1IWJsNT4AwGUcgClXhFwKJBWgQ1EfUYAadeYLvC7DgwSlRXO-hxiCMzlfw3SIxibOtLBqmOzNUQBfmv2C6tr0Cq5TmGAL0jxfB6QfDUI7ytHvjR93acTSYF-ZvMJV5_prHXJ0ge9n1v01Uhzdz9f3lvWXUZTUOpJ6fpFm5E7YABSg9iJW3CSE9iWQ')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-olive/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-off-white">
            <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-widest">
              Holistic Care
            </p>
            <h3 className="font-headline-md text-headline-md leading-tight">
              Rooted in Tradition
            </h3>
          </div>
        </div>
        <div className="h-48 w-full rounded-2xl border border-sand/30 overflow-hidden relative group custom-shadow">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa34PoeT5Err_IYE241vfLzg0lCD7rdX85udLzq3OW4z5o64nj4tFaL6Zmh_DUkKh1f0uGu7yhQ_w1ck7itVq7l8oo2btUS8G2oQBcucZUtqlTqDOhFO3LxzuercwuLWJ6OBYYhhUIi_wrOWeYB5FQPhCh9ixf7hXvRWdu5PRHl55UIVF_Sm3WyGByA1W1w_Z-lmbtg-XawdKFCIYDwYFZQjx9u7dGV0ShhyZzrTFUni0QuCwV-bW-xw')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-off-white">
            <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-widest">
              Precision
            </p>
            <h3 className="font-headline-md text-headline-md leading-tight">
              Data-Driven Health
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
