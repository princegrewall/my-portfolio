
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Calendar, Book } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Contest Tracker",
      category: "web",
      image: "contest-tracker",
      description: "A platform to track upcoming competitive programming contests from various platforms like LeetCode, CodeChef, and CodeForces with filters and reminders.",
      technologies: ["React", "Node.js", "MongoDB", "API Integration"],
      icon: <Calendar className="text-primary" />
    },
    {
      title: "Student Manager",
      category: "web",
      image: "student-manager",
      description: "A comprehensive system for students to access club activities, track attendance, manage library resources, and access curriculum. Teachers can edit curriculum, and coordinators can manage subclubs and events.",
      technologies: ["React", "Express", "PostgreSQL", "Authentication"],
      icon: <Book className="text-primary" />
    },
    {
      title: "Codex",
      category: "web",
      image: "codex",
      description: "A coding platform where students can solve coding problems, participate in live contests, create and host their own contests, and view real-time leaderboards.",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets", "Judge0 API"],
      icon: <Code className="text-primary" />
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent projects focused on competitive programming and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Define types for project
interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  icon: JSX.Element;
}

// Project Card Component
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <Card 
      className="glass-card overflow-hidden hover-scale opacity-0 animate-fade-in"
      style={{animationDelay: `${0.6 + index * 0.1}s`}}
    >
      <div className="h-48 bg-secondary/70 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Replace with actual images in a real portfolio */}
          <div className="text-4xl text-muted-foreground/50 flex flex-col items-center gap-3">
            <div className="text-5xl">{project.icon}</div>
            <div>Project Image</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline" className="border-white text-white hover:bg-white/20">
            View Project
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-secondary rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
