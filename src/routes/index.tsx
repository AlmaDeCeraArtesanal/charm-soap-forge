import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { VSL } from "../components/landing/VSL";
import { NarrativeIntro } from "../components/landing/NarrativeIntro";
import { ForYou } from "../components/landing/ForYou";
import { CourseContent } from "../components/landing/CourseContent";
import { PriceBanner } from "../components/landing/PriceBanner";
import { Bonuses } from "../components/landing/Bonuses";
import { ModulesAccordion } from "../components/landing/ModulesAccordion";
import { PriceSection } from "../components/landing/PriceSection";
import { Certificate } from "../components/landing/Certificate";
import { Testimonials } from "../components/landing/Testimonials";

import { Guarantee } from "../components/landing/Guarantee";
import { FAQ } from "../components/landing/FAQ";
import { FinalCTA } from "../components/landing/FinalCTA";
import { Footer } from "../components/landing/Footer";
import { IMG } from "../components/landing/constants";

const TITLE = "Curso de Jabonería Artesanal | Crea y Emprende en 21 días";
const DESC =
  "Aprende a crear jabones artesanales que venden y construye tu negocio desde casa en 21 días. Método paso a paso, certificado y garantía de 7 días.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.hero1 },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: IMG.hero1 },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div style={{ fontFamily: "var(--font-body)", background: "var(--bg-primary)", color: "var(--texto-dark)" }}>
      <Navbar />
      <main>
        <Hero />
        <VSL />
        <NarrativeIntro />
        <ForYou />
        <CourseContent />
        <ModulesAccordion />
        <Bonuses />
        <PriceBanner />
        <PriceSection />
        <Certificate />
        <Testimonials />
        <FinalCTA />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
