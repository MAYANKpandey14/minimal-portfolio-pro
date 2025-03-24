
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        scrolled ? "backdrop-blur-lg bg-white/70 shadow-sm border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-medium tracking-tight transition-opacity hover:opacity-80 font-mono">
          <span className="sr-only">Full Stack Developer</span>
          <span className="inline-block gradient-text">&lt;FSdev /&gt;</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button 
            className="text-foreground p-2 focus:outline-none"
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - slides in from the right */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 w-64 bg-white/95 backdrop-blur-md shadow-lg border-l border-border/20 p-6 transform transition-all duration-300 ease-in-out z-50 md:hidden",
          scrolled ? "bg-white shadow-lg" : "bg-white/95",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end mb-6">
            <button 
              onClick={toggleMobileMenu}
              className="text-foreground p-2 hover:bg-accent/10 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/20"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto pt-6">
            <a 
              href="#contact" 
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
              onClick={toggleMobileMenu}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#hire-me", label: "Hire Me" },
  { href: "#contact", label: "Contact" }
];

export default Header;
