
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">📬Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <Card className="shadow-lg">
            <CardHeader className="bg-teal text-white">
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription className="text-white/80">
                Let's connect and discuss opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-3 text-teal" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 mt-1">
                    Mukkalavilai pacode,
                    <br />Kanyakumar-629168
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="mr-3 text-teal" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:hannibaljanus2003@gmail.com" className="text-teal hover:underline">
                    hannibaljanus2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="mr-3 text-teal" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+919443319919" className="text-teal hover:underline">
                    +91 9043510919
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">🔗Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Hannibal2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-teal hover:text-white p-2 rounded-full transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hannibal-janus-p-j-9879ab228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-teal hover:text-white p-2 rounded-full transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-teal hover:text-white p-2 rounded-full transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  {/* <a
                    href="hannibaljanus2003@gmail.com"
                    className="bg-gray-100 hover:bg-teal hover:text-white p-2 rounded-full transition-colors"
                  >
                    <Mail size={20} />
                  </a> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
              <CardDescription>
                Fill the form below and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-teal focus:ring-teal"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-teal focus:ring-teal"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-teal focus:ring-teal"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-teal focus:ring-teal resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-teal hover:bg-teal-dark text-white w-full"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
