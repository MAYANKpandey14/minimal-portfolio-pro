
const Skills = () => {
  return (
    <section id="skills" className="section-container bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="section-heading">Skills & Expertise</h2>
        <p className="section-subheading">
          Technical proficiency combined with a keen eye for detail.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-medium mb-6">Frontend Development</h3>
          <div className="space-y-6">
            {frontendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Backend Development</h3>
          <div className="space-y-6">
            {backendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-xl font-medium mb-6 text-center">Other Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {otherSkills.map((skill) => (
            <span 
              key={skill} 
              className="px-4 py-2 rounded-full bg-white shadow-sm border border-border text-sm font-medium hover:shadow-md transition-shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const frontendSkills = [
  { name: "React / Next.js", level: "Expert", percentage: 95 },
  { name: "TypeScript", level: "Advanced", percentage: 90 },
  { name: "CSS / Tailwind", level: "Expert", percentage: 95 },
  { name: "UI/UX Design", level: "Advanced", percentage: 85 }
];

const backendSkills = [
  { name: "Node.js", level: "Expert", percentage: 90 },
  { name: "PostgreSQL / MongoDB", level: "Advanced", percentage: 85 },
  { name: "GraphQL", level: "Intermediate", percentage: 80 },
  { name: "AWS / Cloud Infrastructure", level: "Advanced", percentage: 85 }
];

const otherSkills = [
  "Docker", "CI/CD", "Jest", "React Testing Library", 
  "Firebase", "Redux", "Figma", "Git", "Microservices",
  "Performance Optimization", "SEO", "Accessibility"
];

export default Skills;
