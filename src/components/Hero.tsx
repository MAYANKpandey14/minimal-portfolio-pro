
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Code, FileJson, Database, Globe, Server, Layout, Monitor, Laptop, Figma, Github, Binary } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20">
      {/* Tech background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-primary/30"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 rounded-full border border-primary/30"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-primary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn("space-y-6", mounted && "animate-fade-up")}>
            <div className="inline-block">
              <span className="badge font-mono text-xs tracking-wider">Available for hire</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none font-mono">
              <span className="gradient-text">Full Stack</span>
              <br />
              Developer
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-lg">
              Building elegant digital solutions with a focus on efficiency and on-time delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-white/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent/10 hover:border-accent/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className={cn("relative flex items-center justify-center opacity-0 transition-opacity duration-1000 delay-300", 
            mounted && "opacity-100",
            "h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
          )}>
            {/* Revolving tech icons - adjusted for responsiveness and uniform appearance */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative rounded-full border border-primary/10 animate-spin-slow
                w-[300px] h-[300px] 
                sm:w-[340px] sm:h-[340px] 
                md:w-[400px] md:h-[400px]
                lg:w-[480px] lg:h-[480px]">
                <RevolvingTechIcon Icon={Code} position={0} label="JavaScript" />
                <RevolvingTechIcon Icon={Figma} position={30} label="UI/UX" />
                <RevolvingTechIcon Icon={Database} position={60} label="SQL" />
                <RevolvingTechIcon Icon={Globe} position={90} label="React" />
                <RevolvingTechIcon Icon={Server} position={120} label="Node.js" />
                <RevolvingTechIcon Icon={Layout} position={150} label="CSS" />
                <RevolvingTechIcon Icon={Monitor} position={180} label="Responsive" />
                <RevolvingTechIcon Icon={Laptop} position={210} label="Next.js" />
                <RevolvingTechIcon Icon={Github} position={240} label="Git" />
                <RevolvingTechIcon Icon={FileJson} position={270} label="JSON" />
                <RevolvingTechIcon Icon={Binary} position={300} label="TypeScript" />
                <RevolvingTechIcon Icon={Code} position={330} label="HTML" />
              </div>
            </div>
            
            {/* Blob shape gradient background - responsive sizing */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="blob-shape bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse filter blur-md
                w-[180px] h-[180px]
                sm:w-[200px] sm:h-[200px]
                md:w-[220px] md:h-[220px]
                lg:w-[240px] lg:h-[240px]" 
                style={{ animationDuration: '8s' }}>
              </div>
            </div>
            
            {/* Professional portrait in blob shape - responsive sizing */}
            <div className="relative z-10 overflow-hidden
              w-[160px] h-[160px]
              sm:w-[180px] sm:h-[180px]
              md:w-[200px] md:h-[200px]
              lg:w-[220px] lg:h-[220px]">
              <div className="blob-card w-full h-full shadow-xl border border-white/30 backdrop-blur-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/public/profile-pic.png" 
                  alt="Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Revolving tech icon component - now with responsive sizing and uniform appearance
const RevolvingTechIcon = ({ Icon, position, label }: { Icon: any, position: number, label: string }) => {
  const isMobile = useIsMobile();
  
  // Calculate position based on angle - adjusted orbit radius for different screen sizes
  const angle = (position * Math.PI) / 180;
  const radius = isMobile ? 48 : 52; // Increased radius to move icons outward
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  
  // Uniform sizes for all icons
  const iconSize = isMobile ? 18 : 22;
  const fontSize = isMobile ? "text-[8px]" : "text-[10px]";
  
  return (
    <div 
      className={`absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 
        text-foreground/70 bg-white/90 shadow-sm backdrop-blur-sm rounded-full 
        hover:scale-110 hover:text-primary transition-all border border-white/40
        w-16 h-16 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20`}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
      }}
    >
      <Icon size={iconSize} className="opacity-80" />
      <span className={`mt-1 font-mono font-medium opacity-80 ${fontSize}`}>{label}</span>
    </div>
  );
};

export default Hero;
