import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { ShuffleHero } from "@/components/ui/shuffle-grid";
import { EcosystemDock } from "@/components/site/EcosystemDock";
import { Services } from "@/components/site/Services";
import { Clients } from "@/components/site/Clients";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyAndMetrics } from "@/components/site/WhyAndMetrics";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Contact } from "@/components/site/Contact";
import { Packages } from "@/components/site/Packages";
import { Consultation } from "@/components/site/Consultation";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BRANDFRA — We Make You Visible." },
      { name: "description", content: "The Complete Branding & Growth Partner. Founder branding, PR, SEO, content, and performance marketing engineered for measurable revenue." },
      { property: "og:title", content: "BRANDFRA — We Make You Visible." },
      { property: "og:description", content: "The Complete Branding & Growth Partner for Businesses and Individuals." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-28"><ShuffleHero /></div>
      <EcosystemDock />
      <Services />
      <Clients />
      <CaseStudies />
      <Testimonials />
      <WhyAndMetrics />
      <Packages />
      <FinalCTA />
      <Contact />
      <Consultation />
      <Footer />
    </main>
  );
}
