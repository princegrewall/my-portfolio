import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your skills cards here */}
          <Card className="glass-card opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <p className="text-muted-foreground">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card opacity-0 animate-fade-in" style={{animationDelay: "0.5s"}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <p className="text-muted-foreground">
                Node.js, Express, MongoDB, PostgreSQL
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card opacity-0 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Competitive Programming</h3>
              <p className="text-muted-foreground">
                Data Structures, Algorithms, Problem Solving
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
