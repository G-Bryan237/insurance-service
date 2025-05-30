import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Brands } from "@/components/Brands";
import { Quote } from "@/components/Quote";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { WeHelp } from "@/components/WeHelp";
import { InsuranceTips } from "@/components/InsuranceTips";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <WeHelp />
      <Brands />
      <Quote />
      <Process />
      <Testimonials />
      <Blog />
      <InsuranceTips />
      <Footer />
    </div>
  );
}
