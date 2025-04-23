import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>

      {/* Animated background circles */}
      <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl animate-bounce-slow"></div>
      <div
        className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-accent/20 filter blur-3xl animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-1 items-center">
          {/* Left Side - Introduction and Photo */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="text-center lg:text-left opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-2">
                <span className="text-gradient">Hello, I'm</span>
                <br />
                <span>Prince Grewal</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">Competitive Programmer & Web Developer</p>
            </div>

            <div
              className="flex justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
                {/* Replace with your image */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center text-xl text-muted-foreground">
                  <img src="/profile.jpg" alt="Prince Grewal" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Me */}
          <Card className="glass-card p-0 opacity-0 animate-fade-in lg:-ml-6" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-5 md:p-6">
              <h3 className="text-2xl font-bold mb-4 text-gradient">About Me</h3>
              <div className="space-y-3">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-medium">Competitive Programmer</span> and{" "}
                  <span className="text-primary font-medium">Web Developer</span> with experience in creating visually
                  appealing and user-friendly websites. With a strong foundation in modern web technologies, I enjoy
                  bringing ideas to life in the digital world.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                Coming to my competitive journey, I am a passionate programmer with notable achievements across various platforms — <span className="text-primary font-medium">Knight on LeetCode, Specialist on Codeforces, 4-Star on both CodeChef and GeeksforGeeks, and a 900+ rating on AtCoder.</span> Alongside this, I have built several projects using a wide range of modern web technologies, reflecting my strong problem-solving skills and enthusiasm for full-stack development.
                </p>
                <div className="pt-3">
                     <a href="/Prince_resume.pdf" download>
                        <Button className="bg-primary hover:bg-primary/80">Download Resume</Button>
                      </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute  left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <a href="#about">
            <ChevronDown size={32} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
