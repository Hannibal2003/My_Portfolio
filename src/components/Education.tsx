
import { GraduationCap, Award, Briefcase } from "lucide-react";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "B.Tech Artificial Intelligence and Data Science",
      institution: "Saranathan College of Higher Education",
      year: "2021 - 2025",
      icon: <GraduationCap className="text-teal" size={24} />,
    },
    {
      id: 2,
      degree: "HSC (Higher Secondary School)",
      institution: "Abraham Janus Memorial Matric Higher Secondary School",
      year: "2021",
      grade: "86%",
      icon: <GraduationCap className="text-teal" size={24} />,
    },
    {
      id: 3,
      degree: "SSLC",
      institution: "Abraham Janus Memorial Matric Higher Secondary School",
      year: "2019",
      grade: "89%",
      icon: <GraduationCap className="text-teal" size={24} />,
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "Introduction to Cyber Security",
      provider: "Infosys Springboard",
      icon: <Award className="text-teal" size={24} />,
    },
    {
      id: 2,
      title: "Introduction to Machine Learning",
      provider: "Infosys Springboard",
      icon: <Award className="text-teal" size={24} />,
    },
    {
      id: 3,
      title: "Designing Front-end Python",
      provider: "Infosys Springboard",
      icon: <Award className="text-teal" size={24} />,
    },
    {
      id: 4,
      title: "Data Analysis with Python",
      provider: "Coursera",
      icon: <Award className="text-teal" size={24} />,
    },
    {
      id: 5,
      title: "Excel Basics for Data Analysis",
      provider: "Coursera",
      icon: <Award className="text-teal" size={24} />,
    },
    {
      id: 6,
      title: "Python Programming",
      provider: "PadhAI E-Learning",
      icon: <Award className="text-teal" size={24} />,
    },
  ];

  const experiences = [
    {
      id: 1,
      role: "Internship",
      company: "Underwent 1 week internship in Python Programming Conducted by Pantech",
      icon: <Briefcase className="text-teal" size={24} />,
    },
    {
      id: 2,
      role: "Workshop",
      company: "Underwent 3-days Workshop for Mobile App Development Conducted by Kaigotsu",
      icon: <Briefcase className="text-teal" size={24} />,
    },
    {
      id: 3,
      role: "Workshop",
      company: "Underwent 4-days Workshop for Tableau Tool Conducted at Saranathan Academy of Higher Education",
      icon: <Briefcase className="text-teal" size={24} />,
    },
  ];

  return (
    <section id="education" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 animate-fade-in">Education & Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Education */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-8 text-charcoal">Academic Qualifications</h3>
            <div className="space-y-8">
              {educations.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="timeline-item animate-slide-up"
                  style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                >
                  <div className="timeline-dot"></div>
                  <div className="flex items-start hover:scale-105 transition-transform duration-200">
                    <div>
                      <h4 className="text-xl font-semibold text-teal">{edu.degree}</h4>
                      <p className="text-gray-700 mt-1">{edu.institution}</p>
                      <p className="text-gray-500 mt-1">{edu.year}</p>
                      {edu.grade && <p className="text-gray-600 mt-1">Grade: {edu.grade}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold my-8 text-charcoal animate-fade-in" style={{ animationDelay: "0.4s" }}>Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="timeline-item animate-slide-up"
                  style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                >
                  <div className="timeline-dot"></div>
                  <div className="flex items-start hover:scale-105 transition-transform duration-200">
                    <div>
                      <h4 className="text-xl font-semibold text-teal">{exp.role}</h4>
                      <p className="text-gray-700 mt-1">{exp.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Certificates */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-8 text-charcoal">Certificates</h3>
            <div className="grid grid-cols-1 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={cert.id}
                  className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{cert.icon}</div>
                    <div>
                      <h4 className="font-medium text-charcoal">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.provider}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
