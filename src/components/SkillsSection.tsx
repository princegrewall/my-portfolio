
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    { name: "HTML/CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 80 },
    { name: "Node.js", percent: 70 },
    { name: "TypeScript", percent: 75 },
    { name: "Tailwind CSS", percent: 85 },
  ];

  const softSkills = [
    { name: "Communication", percent: 90 },
    { name: "Problem Solving", percent: 85 },
    { name: "Teamwork", percent: 90 },
    { name: "Time Management", percent: 80 },
    { name: "Adaptability", percent: 85 },
    { name: "Creativity", percent: 75 },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in a range of technologies and possess various soft skills that help me deliver outstanding results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="technical" className="w-full opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger 
                value="technical"
                className="text-lg py-3 data-[state=active]:bg-primary"
                onClick={() => setActiveTab("technical")}
              >
                Technical Skills
              </TabsTrigger>
              <TabsTrigger 
                value="soft"
                className="text-lg py-3 data-[state=active]:bg-primary"
                onClick={() => setActiveTab("soft")}
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="mt-0 space-y-8">
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {technicalSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="opacity-0 animate-fade-in"
                      style={{animationDelay: `${0.6 + index * 0.1}s`}}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.percent}%</span>
                      </div>
                      <Progress value={skill.percent} className="h-2 bg-secondary [&>div]:bg-primary" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="soft" className="mt-0 space-y-8">
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="opacity-0 animate-fade-in"
                      style={{animationDelay: `${0.6 + index * 0.1}s`}}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.percent}%</span>
                      </div>
                      <Progress value={skill.percent} className="h-2 bg-secondary [&>div]:bg-primary" />
                    </div>
                  ))}
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
