"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
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
          Contact
        </h1>
        <p className="mt-4 text-sm uppercase tracking-widest text-warm-white/40">
          We&apos;d love to hear from you
        </p>
        <div className="mx-auto mt-4 h-px w-16 bg-ember" />
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-10">
            {/* Address */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-warm-white">
                Location
              </h2>
              <div className="mt-3 h-px w-12 bg-ember" />
              <div className="mt-4 space-y-1 text-warm-white/60">
                <p>Village at Leesburg</p>
                <p>1600 Village Market Blvd</p>
                <p>Leesburg, VA 20175</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-warm-white">
                Hours
              </h2>
              <div className="mt-3 h-px w-12 bg-azure" />
              <div className="mt-4 space-y-1 text-warm-white/60">
                <p>Tuesday – Thursday: 5:00 PM – 10:00 PM</p>
                <p>Friday – Saturday: 5:00 PM – 11:00 PM</p>
                <p>Sunday: 5:00 PM – 9:00 PM</p>
                <p>Monday: Closed</p>
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-warm-white">
                Get in Touch
              </h2>
              <div className="mt-3 h-px w-12 bg-gold" />
              <div className="mt-4 space-y-2 text-warm-white/60">
                <p>
                  <span className="text-xs uppercase tracking-widest text-warm-white/30">
                    Phone:{" "}
                  </span>
                  (703) 555-0126
                </p>
                <p>
                  <span className="text-xs uppercase tracking-widest text-warm-white/30">
                    Email:{" "}
                  </span>
                  hello@emberandazure.com
                </p>
              </div>
            </div>
          </div>

          {/* Private dining inquiry form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-warm-white">
              Private Dining Inquiry
            </h2>
            <div className="mt-3 h-px w-12 bg-ember" />
            <p className="mt-4 text-sm text-warm-white/50">
              Planning a special event? Let us create a memorable experience
              for your group.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-sm border border-ember/30 bg-ember/5 p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-ember">
                  Thank You
                </h3>
                <p className="mt-3 text-sm text-warm-white/60">
                  We&apos;ll be in touch soon to discuss your event.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white placeholder:text-warm-white/20 focus:border-ember focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                      Event Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white focus:border-ember focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                      Guest Count
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white placeholder:text-warm-white/20 focus:border-ember focus:outline-none"
                      placeholder="Estimated guests"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-warm-white/40">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-warm-white placeholder:text-warm-white/20 focus:border-ember focus:outline-none"
                    placeholder="Type of event, dietary needs, special requests..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-ember px-8 py-3 text-sm font-semibold uppercase tracking-widest text-warm-white transition-all hover:bg-ember/80"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
