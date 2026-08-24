import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Announcement from "./components/Announcement";
import About from "./components/About";
import Services from "./components/Services";
import ScaleToBackground from "./components/ScaleToBackground";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Announcement />
        <About />
        <Services />
        <ScaleToBackground
          variant="swatches"
          alt="Farbfelder aus dem Textilkatalog"
          eyebrow="Textilkatalog · Neu online"
          title={
            <>
              Vielfältige <span className="italic">Farb-</span>
              auswahl.
            </>
          }
          body="T-Shirts, Hoodies, Caps, Workwear und mehr. In vielen Marken, Farben und Größen — perfekt vorbereitet für Druck und Stick."
        >
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[12px] text-ink/70">
            {[
              "XS – 5XL",
              "Bio-Baumwolle",
              "Workwear",
              "Fair produziert",
              "Staffelpreise",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink/12 bg-white/60 px-3 py-1.5 backdrop-blur-md"
              >
                {c}
              </span>
            ))}
          </div>
        </ScaleToBackground>
        <Products />
        <Gallery />
        <Kontakt />
        <Footer />
      </main>
    </>
  );
}
