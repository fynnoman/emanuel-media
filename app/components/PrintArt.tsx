import type { SVGProps } from "react";

type Variant =
  | "wordmark"
  | "swatches"
  | "poster"
  | "flyers"
  | "shirts"
  | "banner"
  | "bag";

type Props = {
  variant: Variant;
  className?: string;
  title?: string;
};

const RED = "#dc2626";
const INK = "#0b0b0c";
const PAPER = "#faf7f1";
const CREAM = "#f2ede1";

export default function PrintArt({ variant, className, title }: Props) {
  const common = {
    viewBox: "0 0 1000 1250",
    preserveAspectRatio: "xMidYMid slice",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img" as const,
    "aria-label": title,
    className,
  } satisfies SVGProps<SVGSVGElement>;

  switch (variant) {
    case "wordmark":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="wm-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={PAPER} />
              <stop offset="1" stopColor={CREAM} />
            </linearGradient>
            <pattern id="wm-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.1" fill={INK} fillOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="1000" height="1250" fill="url(#wm-bg)" />
          <rect width="1000" height="1250" fill="url(#wm-dots)" />
          <g fill={INK}>
            <text
              x="80"
              y="620"
              fontFamily="Instrument Serif, Georgia, serif"
              fontSize="640"
              fontStyle="italic"
            >
              E
            </text>
            <text
              x="440"
              y="960"
              fontFamily="Instrument Serif, Georgia, serif"
              fontSize="640"
            >
              M
            </text>
          </g>
          <circle cx="470" cy="680" r="18" fill={RED} />
          <g
            fontFamily="ui-monospace, monospace"
            fontSize="16"
            letterSpacing="4"
            fill={INK}
            fillOpacity="0.55"
          >
            <text x="80" y="80">EMANUEL · MEDIA</text>
            <text x="80" y="1200">SAARLOUIS · RODEN</text>
            <text x="700" y="1200">CMYK · SEIT 2005</text>
          </g>
        </svg>
      );

    case "swatches":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="sw-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={PAPER} />
              <stop offset="1" stopColor={CREAM} />
            </linearGradient>
          </defs>
          <rect width="1000" height="1250" fill="url(#sw-bg)" />
          {(() => {
            const palette = [
              INK, PAPER, RED, "#00a1b7", "#ffd400", "#b0b7ba",
              "#3a4149", "#c94327", "#1f6b4a", "#5a2c8a", "#e58a1a", "#7a6a48",
              "#dc143c", "#0057b8", "#f4c9d4", "#9ab8a2", "#2e2b26", "#e0e2d5",
              "#8b1e3f", "#0e7c66", "#c8b273", "#e6e1c5", "#4a90e2", "#f2b6a0",
              "#212832", "#a3c48a", "#f4e04d", "#eae2d0", "#7d1a2a", "#111",
            ];
            const cols = 6;
            const rows = 5;
            const pad = 40;
            const gap = 22;
            const cellW = (1000 - pad * 2 - gap * (cols - 1)) / cols;
            const cellH = (1250 - pad * 2 - gap * (rows - 1)) / rows;
            const lightSet = new Set([PAPER, "#e6e1c5", "#f4e04d", "#c8b273", "#f4c9d4", "#f2b6a0", "#eae2d0"]);
            return palette.slice(0, cols * rows).map((c, i) => {
              const cx = i % cols;
              const cy = Math.floor(i / cols);
              const x = pad + cx * (cellW + gap);
              const y = pad + cy * (cellH + gap);
              const isLight = lightSet.has(c);
              return (
                <g key={i}>
                  <rect x={x} y={y} width={cellW} height={cellH} rx={18} fill={c} />
                  <text
                    x={x + 16}
                    y={y + cellH - 20}
                    fontFamily="ui-monospace, monospace"
                    fontSize="12"
                    fill={isLight ? INK : PAPER}
                    fillOpacity="0.8"
                  >
                    #{i.toString().padStart(2, "0")}
                  </text>
                </g>
              );
            });
          })()}
        </svg>
      );

    case "poster":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="ps-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={PAPER} />
              <stop offset="1" stopColor={CREAM} />
            </linearGradient>
          </defs>
          <rect width="1000" height="1250" fill="url(#ps-bg)" />
          <rect x="60" y="60" width="880" height="1130" fill="none" stroke={INK} strokeOpacity="0.15" strokeWidth="1" />
          <g fill={INK}>
            <text x="80" y="360" fontFamily="Instrument Serif, Georgia, serif" fontSize="220" fontStyle="italic">Ideen</text>
            <text x="80" y="580" fontFamily="Instrument Serif, Georgia, serif" fontSize="220">schnell</text>
            <text x="80" y="800" fontFamily="Instrument Serif, Georgia, serif" fontSize="220" fill={RED}>gedruckt.</text>
          </g>
          <g fontFamily="ui-monospace, monospace" fontSize="14" fill={INK} fillOpacity="0.6" letterSpacing="2">
            <text x="80" y="100">№ 001 — EMANUEL MEDIA</text>
            <text x="80" y="1160">SCHULSTRASSE 54 · SAARLOUIS-RODEN</text>
            <text x="700" y="1160">CMYK · 300G</text>
          </g>
          <line x1="80" y1="130" x2="920" y2="130" stroke={INK} strokeOpacity="0.2" />
          <line x1="80" y1="1120" x2="920" y2="1120" stroke={INK} strokeOpacity="0.2" />
          <g transform="translate(700 900)">
            <circle r="90" fill="#00a1b7" fillOpacity="0.85" />
            <circle r="90" cx="55" fill={RED} fillOpacity="0.75" style={{ mixBlendMode: "multiply" }} />
            <circle r="90" cx="28" cy="60" fill="#ffd400" fillOpacity="0.85" style={{ mixBlendMode: "multiply" }} />
          </g>
        </svg>
      );

    case "flyers":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="fl-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={PAPER} />
              <stop offset="1" stopColor={CREAM} />
            </linearGradient>
          </defs>
          <rect width="1000" height="1250" fill="url(#fl-bg)" />
          <g transform="translate(120 130) rotate(-8)">
            <rect width="360" height="500" rx="16" fill="#ffffff" stroke={INK} strokeOpacity="0.08" />
            <text x="30" y="80" fontFamily="Instrument Serif, Georgia, serif" fontSize="46" fill={INK}>Faasend</text>
            <text x="30" y="130" fontFamily="Instrument Serif, Georgia, serif" fontSize="46" fill={RED} fontStyle="italic">2025</text>
            <rect x="30" y="170" width="300" height="140" fill={RED} fillOpacity="0.12" rx="8" />
            <line x1="30" y1="340" x2="330" y2="340" stroke={INK} strokeOpacity="0.3" />
            {[360, 380, 400, 420, 440].map((y) => (
              <line key={y} x1="30" y1={y} x2="290" y2={y} stroke={INK} strokeOpacity="0.25" />
            ))}
          </g>
          <g transform="translate(500 260) rotate(6)">
            <rect width="360" height="500" rx="16" fill="#ffffff" stroke={INK} strokeOpacity="0.08" />
            <text x="30" y="80" fontFamily="Instrument Serif, Georgia, serif" fontSize="46" fill={INK}>Il Lago</text>
            <text x="30" y="130" fontFamily="Instrument Serif, Georgia, serif" fontSize="30" fontStyle="italic" fill={INK} fillOpacity="0.7">Speisekarte</text>
            <rect x="30" y="160" width="300" height="6" fill={INK} />
            {[200, 230, 260, 290, 320, 350, 380, 410].map((y, i) => (
              <g key={y}>
                <text x="30" y={y} fontFamily="ui-monospace, monospace" fontSize="12" fill={INK} fillOpacity="0.75">Antipasti {i + 1}</text>
                <text x="290" y={y} textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="12" fill={RED}>€ {(4 + i).toFixed(2)}</text>
              </g>
            ))}
          </g>
          <g transform="translate(220 700) rotate(3)">
            <rect width="360" height="500" rx="16" fill={INK} />
            <text x="30" y="90" fontFamily="Instrument Serif, Georgia, serif" fontSize="52" fill={PAPER} fontStyle="italic">Verein</text>
            <text x="30" y="150" fontFamily="Instrument Serif, Georgia, serif" fontSize="52" fill={PAPER}>Roden</text>
            <circle cx="270" cy="380" r="70" fill={RED} />
            <text x="30" y="470" fontFamily="ui-monospace, monospace" fontSize="12" fill={PAPER} fillOpacity="0.85">SEIT 1898 · MUTIG · TREU · STARK</text>
          </g>
          <g transform="translate(600 720) rotate(-4)">
            <rect width="280" height="380" rx="14" fill="#ffd400" />
            <text x="24" y="80" fontFamily="Instrument Serif, Georgia, serif" fontSize="46" fill={INK}>Diplom-</text>
            <text x="24" y="130" fontFamily="Instrument Serif, Georgia, serif" fontSize="46" fill={INK} fontStyle="italic">arbeit</text>
            <line x1="24" y1="160" x2="256" y2="160" stroke={INK} />
            {[190, 210, 230, 250, 270, 290, 310, 330].map((y) => (
              <line key={y} x1="24" y1={y} x2="220" y2={y} stroke={INK} strokeOpacity="0.4" />
            ))}
          </g>
        </svg>
      );

    case "shirts":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="sh-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={PAPER} />
              <stop offset="1" stopColor={CREAM} />
            </linearGradient>
            <symbol id="shirt" viewBox="0 0 100 100">
              <path
                d="M 20 15 L 35 10 Q 50 20 65 10 L 80 15 L 92 30 L 78 42 L 78 92 L 22 92 L 22 42 L 8 30 Z"
                fill="currentColor"
              />
            </symbol>
          </defs>
          <rect width="1000" height="1250" fill="url(#sh-bg)" />
          {(() => {
            const colors = [
              RED, "#00a1b7", "#ffd400", INK, "#dc143c",
              "#0057b8", "#7d1a2a", "#4a90e2", "#a3c48a", "#3a4149",
              "#c8b273", "#f4e04d", "#5a2c8a", "#c94327", "#1f6b4a",
              "#212832", "#f4c9d4", "#0e7c66", "#e58a1a", "#8b1e3f",
            ];
            const cols = 5;
            const rows = 4;
            const pad = 60;
            const gap = 18;
            const cellW = (1000 - pad * 2 - gap * (cols - 1)) / cols;
            const cellH = (1250 - pad * 2 - gap * (rows - 1)) / rows;
            return colors.slice(0, cols * rows).map((c, i) => {
              const cx = i % cols;
              const cy = Math.floor(i / cols);
              const x = pad + cx * (cellW + gap);
              const y = pad + cy * (cellH + gap);
              return (
                <g key={i} color={c}>
                  <rect x={x} y={y} width={cellW} height={cellH} rx={14} fill="#ffffff" stroke={INK} strokeOpacity="0.06" />
                  <use href="#shirt" x={x + cellW * 0.15} y={y + cellH * 0.12} width={cellW * 0.7} height={cellH * 0.7} />
                </g>
              );
            });
          })()}
        </svg>
      );

    case "banner":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="bn-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={RED} />
              <stop offset="1" stopColor="#b81c1c" />
            </linearGradient>
            <pattern id="bn-mesh" width="14" height="14" patternUnits="userSpaceOnUse">
              <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#ffffff30" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1000" height="1250" fill="url(#bn-bg)" />
          <rect width="1000" height="1250" fill="url(#bn-mesh)" />
          <g transform="translate(0 300)">
            <text x="500" y="0" textAnchor="middle" fontFamily="Instrument Serif, Georgia, serif" fontSize="240" fill={PAPER} fontStyle="italic">Rodener</text>
            <text x="500" y="220" textAnchor="middle" fontFamily="Instrument Serif, Georgia, serif" fontSize="240" fill={PAPER}>Tage</text>
            <text x="500" y="360" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="28" letterSpacing="16" fill={PAPER} fillOpacity="0.85">
              17. — 19. AUGUST
            </text>
          </g>
          {[80, 200, 320, 440, 560, 680, 800, 920].map((x) => (
            <circle key={x} cx={x} cy="1100" r="8" fill={INK} />
          ))}
          <text x="500" y="1200" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="14" fill={PAPER} fillOpacity="0.75" letterSpacing="4">
            340 × 173 CM · MESH · ÖSEN
          </text>
        </svg>
      );

    case "bag":
      return (
        <svg {...common}>
          <rect width="1000" height="1250" fill={CREAM} />
          <g transform="translate(200 250)">
            <path
              d="M 60 100 Q 60 20 300 20 Q 540 20 540 100 L 540 700 Q 540 780 460 780 L 140 780 Q 60 780 60 700 Z"
              fill="#c8b273"
            />
            <path
              d="M 140 100 Q 140 -20 240 -20 M 460 100 Q 460 -20 360 -20"
              fill="none"
              stroke="#c8b273"
              strokeWidth="14"
            />
            <g transform="translate(150 260)">
              <text fontFamily="Instrument Serif, Georgia, serif" fontSize="72" fill={INK}>Tischlein</text>
              <text y="72" fontFamily="Instrument Serif, Georgia, serif" fontSize="72" fontStyle="italic" fill={INK}>deck dich</text>
              <line x1="0" y1="100" x2="200" y2="100" stroke={INK} strokeWidth="3" />
              <text y="140" fontFamily="ui-monospace, monospace" fontSize="14" letterSpacing="4" fill={INK} fillOpacity="0.7">
                SAARBRÜCKEN · SEIT 2019
              </text>
            </g>
          </g>
        </svg>
      );
  }
}
