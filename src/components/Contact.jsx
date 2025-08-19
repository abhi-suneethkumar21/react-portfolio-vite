import React, { useMemo, useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const subject = useMemo(
    () => `Portfolio Contact from ${name?.trim() || "Website Visitor"}`,
    [name]
  );
  const body = useMemo(() => message?.trim() || "", [message]);

  const mailtoHref = useMemo(
    () =>
      `mailto:abhi.suneeth@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
    [subject, body]
  );

  const gmailHref = useMemo(
    () =>
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        "abhi.suneeth@gmail.com"
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    [subject, body]
  );

  const formValid = (message?.trim()?.length || 0) > 0;

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="card p-6 sm:p-8">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
          Use Gmail or your default mail app.
        </p>

        <form
          className="grid sm:grid-cols-2 gap-4 mt-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="card px-3 py-2 sm:col-span-2"
            autoComplete="name"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="card px-3 py-2 sm:col-span-2 h-28"
          />
          <div className="sm:col-span-2 flex flex-wrap gap-3">
            {/* Gmail compose in a new tab */}
            <a
              href={gmailHref}
              target="_blank"
              rel="noreferrer"
              className={`btn-primary inline-flex items-center gap-2 ${
                !formValid ? "pointer-events-none opacity-60" : ""
              }`}
            >
              <Send size={16} /> Send via Gmail
            </a>

            {/* Fallback: default email app via mailto */}
            <a
              href={mailtoHref}
              className={`btn-ghost inline-flex items-center gap-2 ${
                !formValid ? "pointer-events-none opacity-60" : ""
              }`}
            >
              <Send size={16} /> Use Mail App
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
