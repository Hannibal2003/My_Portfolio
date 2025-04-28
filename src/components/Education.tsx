
import { GraduationCap, Award, Briefcase, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  // Group certificates by provider
  const certificatesByProvider = {
    "Infosys Springboard": [
      { id: 1, title: "Introduction to Cyber Security", filePath: "/placeholder.svg" },
      { id: 2, title: "Introduction to Machine Learning", filePath: "/placeholder.svg" },
      { id: 3, title: "Designing Front-end Python", filePath: "/placeholder.svg" },
    ],
    "Coursera": [
      { id: 4, title: "Data Analysis with Python", filePath: "/placeholder.svg" },
      { id: 5, title: "Excel Basics for Data Analysis", filePath: "/placeholder.svg" },
    ],
    "PadhAI E-Learning": [
      { id: 6, title: "Python Programming", filePath: "/placeholder.svg" },
    ],
    "NPTL": [
      // Add NPTL certificates here if available
      // { id: 7, title: "Example NPTL Course", filePath: "/path/to/nptl_cert.pdf" },
    ]
  };
  // Filter out providers with no certificates
  const providersWithCerts = Object.entries(certificatesByProvider)
                                  .filter(([_, certs]) => certs.length > 0);

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
            <div className="space-y-8">
              {providersWithCerts.map(([provider, certs], providerIndex) => (
                <div key={provider} className="animate-slide-up" style={{ animationDelay: `${0.3 + (providerIndex * 0.2)}s` }}>
                  <h4 className="text-xl font-semibold text-teal mb-4 flex items-center">
                    <Award className="mr-2" size={20} /> {provider}
                  </h4>
                  <div className="space-y-4 pl-6 border-l border-gray-200 ml-2">
                    {certs.map((cert, certIndex) => (
                      <Dialog key={cert.id}>
                        <DialogTrigger asChild>
                          <div
                            className="hover:scale-105 transition-transform duration-200 animate-slide-up cursor-pointer group"
                            style={{ animationDelay: `${0.3 + (providerIndex * 0.2) + (certIndex * 0.05)}s` }}
                          >
                            <p className="text-charcoal flex items-center">
                              {cert.title}
                              <ExternalLink className="ml-2 h-4 w-4 text-gray-400 group-hover:text-teal transition-colors" />
                            </p>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]">
                          <DialogHeader>
                            <DialogTitle>{cert.title} - {provider}</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4 max-h-[80vh] overflow-auto">
                            {/* Basic image display. For PDFs, you might need a different approach or library */}
                            <img
                              src={cert.filePath}
                              alt={`Certificate for ${cert.title}`}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
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
