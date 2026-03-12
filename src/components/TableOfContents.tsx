"use client";

import { useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6"
        aria-expanded={open}
      >
        <span className="font-display text-xl font-bold sm:text-2xl">
          Table of Contents
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <nav className="columns-1 gap-x-6 border-t border-[var(--border)] px-5 py-4 sm:columns-2 sm:px-6 lg:columns-3">
            {items.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="mb-2 block text-sm text-[var(--accent)] hover:underline"
                onClick={() => setOpen(false)}
              >
                {i + 1}. {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
