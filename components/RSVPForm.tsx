"use client";

import { useState, useTransition } from "react";
import { createGuest } from "@/lib/actions/guests";
import Success from "./Success";

export default function RSVPForm() {
  const [fullName, setFullName] = useState("");
  const [attendance, setAttendance] = useState(true);
  const [number, setNumber] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        await createGuest({
          full_name: fullName,
          accepted: attendance,
          number: attendance ? number : 0,
        });

        setSubmitted(true);

      } catch (error) {
        console.error(error);
      }
    });
  };

  if (submitted) {
    return (
      <Success attendance={attendance} fullName={fullName} number={number} />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-light-gold shadow-xl bg-white p-5 sm:p-10">
      <form className="space-y-4 sm:space-y-7" onSubmit={handleSubmit}>
        <div>
          <label className="form-label">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="form-label">
            Attendance
          </label>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
            <label className="radio-label">
              <input
                type="radio"
                name="attendance"
                checked={attendance}
                onChange={() => setAttendance(true)}
                required
              />

              <span className="text-gold font-mulish">
                Joyfully Accepts
              </span>
            </label>

            <label className="radio-label">
              <input
                type="radio"
                name="attendance"
                checked={!attendance}
                onChange={() => setAttendance(false)}
              />

              <span className="text-gold font-mulish">
                Regretfully Declines
              </span>
            </label>
          </div>
        </div>

        {attendance && (
          <div>
            <label className="form-label">
              Number of Guests
            </label>

            <input
              type="number"
              min={1}
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
              required
            />
          </div>
        )}

        <button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send RSVP"}
        </button>
      </form>
    </div>
  );
}