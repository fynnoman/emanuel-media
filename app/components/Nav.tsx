"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { nav, company } from "@/app/lib/data";
import clsx from "clsx";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" className={className}>
      <path
        d="M4.5 5.5a2 2 0 0 1 2-2h1.7a1 1 0 0 1 .95.68l1.15 3.45a1 1 0 0 1-.24 1.01l-1.4 1.4a12 12 0 0 0 5.3 5.3l1.4-1.4a1 1 0 0 1 1-.24l3.46 1.15a1 1 0 0 1 .68.95V17a2 2 0 0 1-2 2h-.5A14.5 14.5 0 0 1 4.5 6V5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setCondensed(y > 24);
  });

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
        <motion.nav
          layout
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={clsx(
            "pointer-events-auto glass relative flex items-center gap-3 rounded-full text-ink",
            condensed
              ? "h-12 w-full max-w-[520px] px-2 pl-4"
              : "h-14 w-full max-w-[820px] px-3 pl-5"
          )}
        >
          <a
            href="#start"
            className="font-display text-[19px] leading-none tracking-tight"
          >
            Emanuel<span className="text-red">.</span>Media
          </a>

          <div className="mx-2 hidden h-6 w-px bg-ink/10 sm:block" />

          <ul className="hidden items-center gap-1 text-[13px] text-ink/70 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={`tel:${company.phoneHref}`}
              aria-label="Jetzt anrufen"
              className="group inline-flex items-center gap-2 rounded-full bg-red px-3.5 py-1.5 text-[12px] font-medium text-white transition-transform hover:scale-[1.03]"
            >
              <PhoneIcon className="text-white" />
              <span className="hidden sm:inline">Anrufen</span>
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white md:hidden"
              aria-label="Menü"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={clsx(
                    "absolute left-0 top-0 h-px w-full bg-ink transition-all",
                    open ? "translate-y-[6px] rotate-45" : ""
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 top-[6px] h-px w-full bg-ink transition-opacity",
                    open ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={clsx(
                    "absolute bottom-0 left-0 h-px w-full bg-ink transition-all",
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  )}
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[76px] z-40 md:hidden"
          >
            <div className="glass rounded-3xl p-3">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-[15px] text-ink/85 hover:bg-ink/5 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${company.phoneHref}`}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-red px-4 py-3 text-[14px] font-medium text-white"
              >
                <PhoneIcon className="text-white" />
                Anrufen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
