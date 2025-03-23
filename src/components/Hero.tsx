
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Code, FileJson, Database, Globe, Server, Layout } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20">
      {/* Tech background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-primary/30"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 rounded-full border border-accent/30"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-primary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <TechIcon Icon={Code} className="top-[15%] left-[10%] animate-float" delay={0} />
        <TechIcon Icon={FileJson} className="top-[25%] right-[15%] animate-float" delay={1} />
        <TechIcon Icon={Database} className="bottom-[30%] left-[20%] animate-float" delay={2} />
        <TechIcon Icon={Globe} className="top-[40%] left-[30%] animate-float" delay={3} />
        <TechIcon Icon={Server} className="bottom-[20%] right-[25%] animate-float" delay={4} />
        <TechIcon Icon={Layout} className="bottom-[40%] right-[10%] animate-float" delay={5} />
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
          
          <div className={cn("relative h-[450px] md:h-[550px] flex items-center justify-center opacity-0 transition-opacity duration-1000 delay-300", mounted && "opacity-100")}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse" style={{ animationDuration: '6s' }}></div>
            </div>
            <div className="relative z-10 glass-panel rounded-2xl p-8 rotate-3 shadow-xl border border-white/30 backdrop-blur-lg w-full max-w-[420px]">
              <pre className="text-sm sm:text-base font-mono overflow-x-auto">
                <code className="language-javascript">
{`function Developer() {
  const skills = [
    'React', 'Next.js',
    'TypeScript', 'Node.js',
    'CSS', 'UI/UX'
  ];
  
  const values = {
    minimalism: true,
    efficiency: true,
    onTimeDelivery: true,
    coffee: 'Always'
  };
  
  return {
    ...values,
    coding: () => console.log('💻')
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

// Tech icon component
const TechIcon = ({ Icon, className, delay = 0 }: { Icon: any, className?: string, delay?: number }) => {
  return (
    <div 
      className={cn(
        "absolute text-foreground/20 backdrop-blur-sm p-3 rounded-full",
        className
      )}
      style={{ 
        animationDelay: `${delay}s`,
      }}
    >
      <Icon size={28} className="opacity-80" />
    </div>
  );
};

export default Hero;
