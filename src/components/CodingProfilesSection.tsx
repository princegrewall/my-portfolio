
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const CodingProfilesSection = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "coder2324",
      stats: "Knight (1930+)",
      url: "https://leetcode.com/coder2324",
      color: "bg-[#F89F1B]/10 border-[#F89F1B]/30",
      textColor: "text-[#F89F1B]"
    },
    {
      platform: "CodeForces",
      username: "_princegrewal",
      stats: "Specialist (1500+)",
      url: "https://codeforces.com/profile/_princegrewal",
      color: "bg-[#3B5998]/10 border-[#3B5998]/30",
      textColor: "text-[#3B5998]"
    },
    {
      platform: "CodeChef",
      username: "princegrewal",
      stats: "4 Star (1850+)",
      url: "https://www.codechef.com/users/princegrewal",
      color: "bg-[#5B4638]/10 border-[#5B4638]/30",
      textColor: "text-[#5B4638]"
    },
    {
      platform: "AtCoder",
      username: "princegrewal",
      stats: "Green (900+)",
      url: "https://atcoder.jp/users/princegrewal",
      color: "bg-[#5B4638]/10 border-[#222222]/30",
      textColor: "text-[#888888]"
    },
    {
      platform: "GeeksForGeeks",
      username: "princegrewal",
      stats: "4 Star (1850+)",
      url: "https://auth.geeksforgeeks.org/user/princegrewal",
      color: "bg-[#2F8D46]/10 border-[#2F8D46]/30",
      textColor: "text-[#2F8D46]"
    },
    {
      platform: "GitHub",
      username: "princegrewall",
      stats: "10+ repositories",
      url: "https://github.com/princegrewall",
      color: "bg-[#333333]/10 border-[#333333]/30",
      textColor: "text-[#333333]"
    }
  ];

  return (
    <section id="coding-profiles" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">Coding Profiles</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my competitive programming profiles across various platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <Card 
              key={index}
              className={`overflow-hidden opacity-0 animate-fade-in hover-scale border ${profile.color}`}
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`text-3xl font-bold mb-2 ${profile.textColor}`}>{profile.platform}</div>
                <div className="font-semibold">@{profile.username}</div>
                <div className="text-muted-foreground text-sm mb-4">{profile.stats}</div>
                <Button 
                  variant="outline" 
                  className="mt-2 gap-2"
                  onClick={() => window.open(profile.url, '_blank')}
                >
                  <Github size={16} />
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
