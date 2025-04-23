
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Image, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "web",
      image: "ecommerce",
      description: "A fully functional e-commerce platform with product listings, cart functionality, and secure checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Portfolio Template",
      category: "design",
      image: "portfolio",
      description: "A modern and responsive portfolio template for creative professionals to showcase their work.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    },
    {
      title: "Task Management App",
      category: "app",
      image: "taskapp",
      description: "A productivity application that helps users organize tasks, set priorities, and track progress.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Restaurant Booking System",
      category: "web",
      image: "restaurant",
      description: "An online reservation system for restaurants with table management and notification features.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
    },
    {
      title: "Travel Blog Theme",
      category: "design",
      image: "blog",
      description: "A beautiful and responsive blog theme designed for travel bloggers with various post layouts.",
      technologies: ["WordPress", "PHP", "jQuery", "SASS"],
    },
    {
      title: "Fitness Tracker",
      category: "app",
      image: "fitness",
      description: "A mobile application that tracks workouts, nutrition, and progress towards fitness goals.",
      technologies: ["React Native", "Redux", "Firebase"],
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Development" },
    { id: "design", label: "Design" },
    { id: "app", label: "Applications" },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent projects and see my creative and technical skills in action.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <TabsList className="flex flex-wrap justify-center mb-12 border border-border rounded-full p-1 max-w-2xl mx-auto bg-secondary/50">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="rounded-full px-6 py-2 text-base data-[state=active]:bg-primary"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* All Projects */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          {/* Filtered Projects */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category.id)
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
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
}

// Project Card Component
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const getProjectIcon = (category) => {
    switch (category) {
      case "web":
        return <Code className="text-primary" />;
      case "design":
        return <Image className="text-primary" />;
      default:
        return <Star className="text-primary" />;
    }
  };

  return (
    <Card 
      className="glass-card overflow-hidden hover-scale opacity-0 animate-fade-in"
      style={{animationDelay: `${0.6 + index * 0.1}s`}}
    >
      <div className="h-48 bg-secondary/70 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Replace with actual images in a real portfolio */}
          <div className="text-4xl text-muted-foreground/50">Project Image</div>
        </div>
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline" className="border-white text-white hover:bg-white/20">
            View Project
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {getProjectIcon(project.category)}
          <span className="text-sm text-muted-foreground">{project.category === "web" ? "Web Development" : project.category === "design" ? "Design" : "Application"}</span>
        </div>
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
