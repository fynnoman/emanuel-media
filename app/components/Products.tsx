"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { products } from "@/app/lib/data";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="produkte" className="relative bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-24 sm:px-10 sm:pb-40 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-24">
          <div className="sticky top-24 self-start">
            <p className="eyebrow text-ink/60">Produkte</p>
            <h2 className="mt-6 font-display text-[48px] leading-[0.98] tracking-tight sm:text-[72px]">
              Neun Kategorien. <br />
              <span className="italic">Ein</span> Anspruch.
            </h2>
            <p className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-ink/70">
              Von der klassischen Visitenkarte bis zum Meshbanner in Bau-Größe —
              alle Formate, Papiere und Verfahren auf einen Blick.
            </p>

            <div className="mt-8 hidden gap-2 text-[11px] text-ink/60 lg:flex lg:flex-wrap">
              {products.map((p) => (
                <a
                  key={p.n}
                  href={`#p-${p.n}`}
                  className="rounded-full border border-ink/12 bg-white px-3 py-1.5 hover:border-ink/30 hover:text-ink"
                >
                  {p.n} · {p.title}
                </a>
              ))}
            </div>
          </div>

          <ol className="relative space-y-24 sm:space-y-32">
            <div
              aria-hidden
              className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-ink/15 to-transparent sm:block"
            />
            {products.map((p, i) => (
              <ProductRow key={p.n} product={p} index={i} />
            ))}
          </ol>
        </div>
      </div>

    </section>
  );
}

function ProductRow({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.li
      id={`p-${product.n}`}
      ref={ref}
      style={{ y }}
      className="relative pl-0 sm:pl-10"
    >
      <span
        aria-hidden
        className="absolute -left-1 top-3 hidden h-2 w-2 rounded-full bg-red ring-4 ring-white sm:block"
      />
      <Reveal>
        <header className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] tabular-nums tracking-[0.2em] text-ink/50">
            {product.n} / 09
          </span>
          <span className="hairline-dark hidden flex-1 sm:block" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-ink/50">
            {product.tag}
          </span>
        </header>

        <h3 className="mt-5 font-display text-[42px] leading-[0.98] tracking-tight sm:text-[64px]">
          {product.title}
        </h3>

        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/75 sm:text-[17px]">
          {product.body}
        </p>

        {product.specs.length > 0 && (
          <dl className="mt-8 grid divide-y divide-ink/10 border-y border-ink/10 text-[13px] sm:text-[14px]">
            {product.specs.map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[minmax(0,120px)_1fr] items-baseline gap-6 py-3"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                  {k}
                </dt>
                <dd className="text-ink/85">{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </Reveal>
    </motion.li>
  );
}
