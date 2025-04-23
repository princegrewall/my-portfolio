
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>
      
      {/* Animated background circles */}
      <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl animate-bounce-slow"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-accent/20 filter blur-3xl animate-bounce-slow" style={{animationDelay: "1s"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
              <span className="text-gradient">Hello, I'm</span>
              <br />
              <span>Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Web Developer & Designer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-primary hover:bg-primary/80 text-lg px-8 py-6">
                My Projects
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="flex-1 flex justify-center opacity-0 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
              {/* Replace with your image */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center text-xl text-muted-foreground">
                Your Photo
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <a href="#about">
            <ChevronDown size={32} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
