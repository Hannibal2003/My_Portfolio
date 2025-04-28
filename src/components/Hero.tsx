
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-teal-light/20 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              <span className="text-charcoal">Hi, I'm</span> <span className="text-teal">Hannibal Janus</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-slide-up">
              AI Engineer | Building the Future with AI and Designs
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: "0.2s"}}>
              <Button asChild className="bg-teal hover:bg-teal-dark text-white">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild className="border-teal text-teal hover:bg-teal/10">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-teal/20 to-teal/40 rounded-full -z-10 blur-2xl transform scale-110"></div>
              <Avatar className="w-full h-full border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300">
                <AvatarImage 
                  src="/lovable-uploads/Untitled_design-removebg-preview (1).png"
                  alt="Hannibal Janus"
                  className="object-cover object-center scale-105"
                />
                <AvatarFallback>HJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-teal" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
