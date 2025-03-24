
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background subtle tech patterns */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-accent/5 to-transparent opacity-50 blur-3xl"></div>
      </div>
      <Analytics/>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
