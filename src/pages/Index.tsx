
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cloud, Database, Server } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "Route 53 (AWS Web Architecture)",
      description: "Robust cloud infrastructure using Route 53, CloudFront, WAF, ACM, VPC, EC2, RDS, and Load Balancer, deployed with a custom domain and scalable backend.",
      technologies: ["AWS", "Route 53", "CloudFront", "EC2", "RDS", "VPC"]
    },
    {
      title: "3-Tier Web Application Architecture",
      description: "Scalable architecture with EC2, ALB, Auto Scaling Groups, and Amazon RDS inside a VPC, focusing on HA and security.",
      technologies: ["AWS", "EC2", "ALB", "Auto Scaling", "RDS", "VPC"]
    },
    {
      title: "Car Showroom Explorer",
      description: "Python console application simulating car selection and price computation with OOP and data structure integration.",
      technologies: ["Python", "OOP", "Data Structures", "Console App"]
    }
  ];

  const skills = [
    { name: "Python", icon: Code, level: 90 },
    { name: "SQL", icon: Database, level: 85 },
    { name: "AWS", icon: Cloud, level: 80 },
    { name: "Linux", icon: Server, level: 75 },
    { name: "Git", icon: Github, level: 85 }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300AEEF" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-[#00AEEF] to-[#0080CC] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold">
            NV
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E0E0E0] to-[#00AEEF] bg-clip-text text-transparent">
            Hi, I'm Naveen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#B0B0B0]">
            Cloud & Backend Developer
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Self-motivated engineering student passionate about building scalable, secure, and efficient cloud architectures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-[#00AEEF] hover:bg-[#0080CC] text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#00AEEF] transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#00AEEF] transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00AEEF]">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Veeramreddy Venkata Naveen</h3>
              <p className="text-lg leading-relaxed mb-6">
                Self-motivated engineering student with strong skills in Python, SQL, and cloud computing. 
                Experienced in backend development and building scalable systems, with proficiency in Linux, 
                Git, and Visual Studio Code. Passionate about creating efficient, secure, and user-centric 
                cloud architectures.
              </p>
              <Button className="bg-[#00AEEF] hover:bg-[#0080CC] text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="bg-[#1A1A1A] border-[#333333]">
                <CardHeader>
                  <CardTitle className="text-[#00AEEF]">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">B.Tech in Electronics and Communication</h4>
                    <p className="text-[#B0B0B0]">Pragati Engineering College</p>
                    <p className="text-[#B0B0B0]">CGPA: 7.8 (2021–2025)</p>
                  </div>
                  <Separator className="bg-[#333333]" />
                  <div>
                    <h4 className="font-semibold">Intermediate</h4>
                    <p className="text-[#B0B0B0]">FIITJEE</p>
                    <p className="text-[#B0B0B0]">888/1000 (2019–2021)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00AEEF]">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-[#333333] hover:border-[#00AEEF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00AEEF]/20">
                <CardHeader>
                  <CardTitle className="text-[#E0E0E0] flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-[#00AEEF]" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#B0B0B0] mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00AEEF]">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <skill.icon className="h-6 w-6 text-[#00AEEF]" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-[#B0B0B0]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#333333] rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#00AEEF] to-[#0080CC] h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Teamwork", "Initiative", "Adaptability", "Willingness to Learn"].map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-[#00AEEF] text-[#00AEEF] p-3 text-center">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {["Linux", "Visual Studio Code", "Git"].map((tool, index) => (
                    <Badge key={index} className="bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/20">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#00AEEF]">Career Interests</h2>
          <p className="text-xl leading-relaxed">
            Aspiring backend and cloud developer focused on building scalable infrastructures and backend systems. 
            Open to opportunities in <span className="text-[#00AEEF] font-semibold">backend engineering</span>, 
            <span className="text-[#00AEEF] font-semibold"> DevOps</span>, and 
            <span className="text-[#00AEEF] font-semibold"> cloud architecture</span> roles.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00AEEF]">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-[#00AEEF]" />
                  <a href="mailto:naveenveeramreddy181668@gmail.com" className="hover:text-[#00AEEF] transition-colors">
                    naveenveeramreddy181668@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-[#00AEEF]" />
                  <span>+91 9347980893</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-[#00AEEF]" />
                  <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="hover:text-[#00AEEF] transition-colors">
                    linkedin.com/in/naveen-veeramreddy
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="h-6 w-6 text-[#00AEEF]" />
                  <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="hover:text-[#00AEEF] transition-colors">
                    github.com/Naveenveeramreddy
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-[#1A1A1A] border-[#333333]">
              <CardHeader>
                <CardTitle className="text-[#00AEEF]">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-[#E0E0E0]">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-[#333333] border-[#555555] text-[#E0E0E0] focus:border-[#00AEEF]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#E0E0E0]">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-[#333333] border-[#555555] text-[#E0E0E0] focus:border-[#00AEEF]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-[#E0E0E0]">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32 p-3 bg-[#333333] border border-[#555555] rounded-md text-[#E0E0E0] focus:border-[#00AEEF] focus:outline-none resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#00AEEF] hover:bg-[#0080CC] text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0A0A0A] border-t border-[#333333]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#B0B0B0]">
            © 2024 Naveen Veeramreddy. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
