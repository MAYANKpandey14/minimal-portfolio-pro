
import { useState } from 'react';
import { cn } from "@/lib/utils";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading">
          A selection of my recent work delivering efficient, minimalist solutions.
        </p>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2 p-1 bg-secondary/50 rounded-full">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                activeFilter === category.id 
                  ? "bg-accent shadow-sm text-white" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
          >
            <div className="relative overflow-hidden h-48">
              <div 
                className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent flex items-end p-6"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="badge bg-white/90 text-foreground">{project.category}</span>
                </div>
              </div>
              <div 
                className="h-full w-full bg-secondary/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
              >
                <div className="h-20 w-20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent/70"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 16h8"></path><path d="M8 12h8"></path></svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={project.liveUrl} 
                  className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Preview
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
                <span className="text-muted-foreground">|</span>
                <a 
                  href={project.codeUrl} 
                  className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'backend', name: 'Backend' }
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with cart functionality and payment processing.",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Portfolio Dashboard",
    description: "Personal investment tracker with data visualization and real-time updates.",
    category: "frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "Content Management System",
    description: "Customizable CMS built for content creators with advanced editing capabilities.",
    category: "fullstack",
    technologies: ["React", "GraphQL", "PostgreSQL", "AWS"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Task Management API",
    description: "RESTful API for task management with authentication and permission controls.",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 5,
    title: "Real Estate Listings",
    description: "Property search platform with filtering, sorting, and map integration.",
    category: "frontend",
    technologies: ["React", "Redux", "Mapbox", "Styled Components"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 6,
    title: "Messaging Microservice",
    description: "Scalable microservice for real-time messaging in distributed applications.",
    category: "backend",
    technologies: ["Node.js", "Redis", "WebSockets", "Docker"],
    liveUrl: "#",
    codeUrl: "#"
  }
];

export default Projects;
