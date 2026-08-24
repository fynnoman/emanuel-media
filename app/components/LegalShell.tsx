import Link from "next/link";
import Footer from "./Footer";

export default function LegalShell({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-ink">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
        <div className="pointer-events-auto glass flex h-12 items-center gap-4 rounded-full px-3 pl-5 text-[13px] text-ink/85">
          <Link href="/" className="font-display text-[17px] leading-none text-ink">
            Emanuel<span className="text-red">.</span>Media
          </Link>
          <span className="h-4 w-px bg-ink/15" />
          <Link href="/" className="hover:text-ink">
            ← Zurück
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-6 pb-24 pt-40 sm:pt-48">
        <p className="eyebrow text-ink/60">{eyebrow}</p>
        <h1 className="mt-6 font-display text-[48px] leading-[0.98] tracking-tight sm:text-[72px]">
          {title}
        </h1>
        <div className="mt-14 space-y-8 text-[15px] leading-relaxed text-ink/80">
          {children}
        </div>
      </section>

      <Footer />
    </main>
  );
}
