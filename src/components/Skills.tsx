
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Network } from "lucide-react";

const Skills = () => {
  const programmingSkills = [
    "C++", "Python", "Java", 
    "HTML/CSS", "JavaScript", "TypeScript", 
    "XML", "Node.js", "SQL"
  ];
  
  const tools = [
    "Git", "VS Code", "Jupyter Notebook", 
    "PyTorch", "TensorFlow", "Firebase", 
    "MongoDB", "Express", "React",
    "Docker", "AWS", "Tableau"
  ];
  
  const networkingSkills = [
    "Network Architecture", "IP Addressing", 
    "Routing & Switching", "Network Security", 
    "Troubleshooting"
  ];

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Skills */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-teal">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal/20 p-2 rounded-full mr-4">
                  <Code size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-bold">Programming</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {programmingSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-teal/10 text-charcoal border-teal/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-teal">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal/20 p-2 rounded-full mr-4">
                  <Database size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-bold">Tools & Frameworks</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="bg-teal/10 text-charcoal border-teal/20">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Computer Network */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-teal">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal/20 p-2 rounded-full mr-4">
                  <Network size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-bold">Computer Network</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {networkingSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-teal/10 text-charcoal border-teal/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
