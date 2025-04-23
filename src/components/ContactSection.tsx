import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <Card className="glass-card">
            <CardContent className="p-6 flex flex-wrap gap-6 justify-center items-center">
              <a href="mailto:princegrewal2324@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>princegrewal2324@gmail.com</span>
              </a>
              <a href="https://github.com/princegrewall" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                <span>github.com/princegrewall</span>
              </a>
              <a href="https://linkedin.com/in/princegrewal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/princegrewal</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 8930365082</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 