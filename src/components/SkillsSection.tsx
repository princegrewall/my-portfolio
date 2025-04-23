import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    "HTML/CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Express.js",
    "MongoDB",
    "Data Structures",
    "Algorithms",
    "Problem Solving",
    "C++",
    "Python",
    "MySQL",
    "Git",
    "GitHub",
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Leadership",
    "Critical Thinking",
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in competitive programming and web development with a range of technical and soft skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="technical" className="w-full opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <TabsList className="grid w-full grid-cols-2 mb-8 py-1 " >
              <TabsTrigger 
                value="technical"
                onClick={() => setActiveTab("technical")}
              >
                Technical Skills
              </TabsTrigger>
              <TabsTrigger 
                value="soft"
                onClick={() => setActiveTab("soft")}
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="mt-0 space-y-8">
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {technicalSkills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="opacity-0 animate-fade-in bg-secondary/50 rounded-lg p-2 text-center hover-scale"
                        style={{animationDelay: `${0.6 + index * 0.1}s`}}
                      >
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="soft" className="mt-0 space-y-8">
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {softSkills.map((skill, index) => (
                      <div 
                        key={index}
                        className="opacity-0 animate-fade-in bg-secondary/50 rounded-lg p-3 text-center hover-scale"
                        style={{animationDelay: `${0.6 + index * 0.1}s`}}
                      >
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
