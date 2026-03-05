"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-24">
      {/* Header */}
      <div className="px-6 text-center">
        <h1 className="font-heading text-5xl font-bold text-warm-white md:text-6xl">
          Reservations
        </h1>
        <p className="mt-4 text-sm uppercase tracking-widest text-warm-white/40">
          Secure your table at Ember &amp; Azure
        </p>
        <div className="mx-auto mt-4 h-px w-16 bg-ember" />
      </div>

      <div className="mx-auto mt-16 max-w-2xl px-6">
        {/* OpenTable placeholder */}
        <div className="mb-12 rounded-sm border border-white/10 bg-white/[0.02] p-8 text-center">
          {/* PLACEHOLDER: OpenTable reservation widget */}
          <p className="text-sm text-warm-white/40">
            OpenTable reservation widget will be embedded here.
          </p>
        </div>

        {/* Reservation form */}
        {submitted ? (
          <div className="rounded-sm border border-ember/30 bg-ember/5 p-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-ember">
              Thank You
            </h2>
            <p className="mt-4 text-warm-white/60">
              We&apos;ve received your reservation request. You&apos;ll hear
              from us shortly to confirm.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white placeholder:text-warm-white/20 focus:border-ember focus:outline-none"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white placeholder:text-warm-white/20 focus:border-ember focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                  Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white focus:border-ember focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                  Time
                </label>
                <select
                  required
                  className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white focus:border-ember focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                  Party Size
                </label>
                <select
                  required
                  className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white focus:border-ember focus:outline-none"
                >
                  <option value="">Select</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                  <option value="9+">9+ (large party)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                Special Requests
              </label>
              <textarea
                rows={3}
                className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white placeholder:text-warm-white/20 focus:border-ember focus:outline-none"
                placeholder="Allergies, celebrations, seating preferences..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-ember px-8 py-3 text-sm font-semibold uppercase tracking-widest text-warm-white transition-all hover:bg-ember/80"
            >
              Request Reservation
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-sm text-warm-white/40">
          Walk-ins welcome at the bar.
        </p>
      </div>
    </div>
  );
}
