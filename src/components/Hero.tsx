
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20">
      <div 
        className={cn(
          "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-0 transition-opacity duration-1000",
          mounted && "opacity-100"
        )}
      />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn("space-y-6", mounted && "animate-fade-up")}>
            <div className="inline-block">
              <span className="badge">Available for hire</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none">
              Full Stack
              <br />
              Developer
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-lg">
              Building elegant digital solutions with a focus on efficiency and on-time delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className={cn("relative h-[400px] md:h-[500px] flex items-center justify-center opacity-0 transition-opacity duration-1000 delay-300", mounted && "opacity-100")}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-secondary/50 animate-pulse" style={{ animationDuration: '6s' }}></div>
            </div>
            <div className="relative z-10 glass-panel rounded-2xl p-8 rotate-3 shadow-xl">
              <pre className="text-xs sm:text-sm font-mono overflow-x-auto">
                <code className="language-javascript">
{`function Developer() {
  const skills = [
    'React', 'Node.js',
    'TypeScript', 'UI/UX'
  ];
  
  return {
    coding: true,
    deliverOnTime: true,
    coffee: 'Always'
  };
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
