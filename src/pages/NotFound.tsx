
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";


const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Header />
      <div className="text-center max-w-lg px-6">
        <h1 className="text-8xl font-semibold text-primary mb-2">OOPs</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
