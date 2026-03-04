import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyItMatters from "@/components/sections/WhyItMatters";
import HowItWorks from "@/components/sections/HowItWorks";
import KeyFeatures from "@/components/sections/KeyFeatures";
import Impact from "@/components/sections/Impact";
import GovernanceAndTrust from "@/components/sections/GovernanceAndTrust";
import UseCases from "@/components/sections/UseCases";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyItMatters />
      <HowItWorks />
      <KeyFeatures />
      <Impact />
      <GovernanceAndTrust />
      <UseCases />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
