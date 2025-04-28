
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-l-4 border-teal">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal mb-4">Objective</h3>
              <p className="text-gray-700 leading-relaxed">
                To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. I'm passionate about learning new technologies and applying them to solve real-world problems.
              </p>
              
              <h3 className="text-xl font-bold text-teal mt-8 mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-chip">AI Engineer</span>
                <span className="skill-chip">Machine Intelligence</span>
                <span className="skill-chip">ML/DL</span>
                <span className="skill-chip">Data Science</span>
                <span className="skill-chip">Web Development</span>
              </div>
              
              <h3 className="text-xl font-bold text-teal mt-8 mb-4">Personal Strengths</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Problem Solving</li>
                <li>Team Work</li>
                <li>Continuous Learning</li>
                <li>Adaptability</li>
              </ul>
              
              <h3 className="text-xl font-bold text-teal mt-8 mb-4">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-chip">Gym</span>
                <span className="skill-chip">Listening to Music</span>
                <span className="skill-chip">Playing Kabaddi</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
