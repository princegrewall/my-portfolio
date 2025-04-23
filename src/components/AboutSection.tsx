
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Mail, Linkedin, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Photo */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Avatar className="w-64 h-64 rounded-full border-4 border-primary/20">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>

          {/* Right Side - About Text */}
          <Card className="glass-card p-0 opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">About Me</h3>
              <div className="space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-medium">Competitive Programmer</span> and <span className="text-primary font-medium">Web Developer</span> with experience in creating visually appealing and user-friendly websites. With a strong foundation in modern web technologies, I enjoy bringing ideas to life in the digital world.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in web development started several years ago when I discovered my passion for coding. Since then, I've been constantly learning and improving my skills to deliver high-quality solutions.
                </p>
                <div className="pt-4">
                  <Button className="bg-primary hover:bg-primary/80">Download Resume</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Details - Bottom Section */}
        <div className="mt-16 opacity-0 animate-fade-in" style={{animationDelay: "0.6s"}}>
          <Card className="glass-card">
            <CardContent className="p-6 flex flex-wrap gap-6 justify-center items-center">
              <a href="mailto:youremail@example.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>youremail@example.com</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                <span>github.com/yourusername</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/yourusername</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
