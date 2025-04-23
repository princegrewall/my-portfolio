
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Personal Info */}
          <Card className="glass-card p-0 opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Personal Info</h3>
              <div className="space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-medium">web developer</span> with experience in creating visually appealing and user-friendly websites. With a strong foundation in modern web technologies, I enjoy bringing ideas to life in the digital world.
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

          {/* Right Side - Personal Details */}
          <Card className="glass-card p-0 opacity-0 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Details</h3>
              <ul className="space-y-4">
                {[
                  { label: "Name", value: "Your Name" },
                  { label: "Email", value: "youremail@example.com" },
                  { label: "Location", value: "Your City, Country" },
                  { label: "Experience", value: "X Years" },
                  { label: "Degree", value: "Your Degree" },
                  { label: "Freelance", value: "Available" },
                ].map((item, index) => (
                  <li key={index} className="flex border-b border-border pb-3">
                    <span className="font-medium w-32 text-primary">{item.label}:</span>
                    <span className="text-foreground/80">{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex space-x-4">
                {/* Social Icons - Replace with your own links */}
                {[1, 2, 3, 4].map((_, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <span className="text-xs">Icon</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
