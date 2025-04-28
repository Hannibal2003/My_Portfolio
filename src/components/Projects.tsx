
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hostel Management App",
      description: "A comprehensive Hostel Management App in Kotlin for Android. Designed to get the Hostel Pass and Out Pass from wardens easily and store student data.",
      tags: ["Kotlin", "Android", "Firebase", "Real-time Database"],
      link: "#"
    },
    {
      id: 2,
      title: "AI-based Recommendation System",
      description: "Developed a personalized recommendation system using machine learning algorithms to suggest products based on user behavior and preferences.",
      tags: ["Python", "TensorFlow", "ML", "Data Analysis"],
      link: "#"
    },
    {
      id: 3,
      title: "Smart Attendance System",
      description: "Face recognition based attendance system for educational institutions to automate the attendance tracking process.",
      tags: ["Python", "OpenCV", "Deep Learning", "Flask"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">📂Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="bg-teal/10">
                <CardTitle className="text-teal">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-charcoal text-base mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-teal/10 border-teal/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-teal hover:text-teal-dark hover:bg-teal/10" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
