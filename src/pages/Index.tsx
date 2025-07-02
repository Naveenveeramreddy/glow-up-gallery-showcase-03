
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cloud, Database, Server, Shield } from "lucide-react";
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

  const skillCategories = [
    {
      title: "Cloud Platform",
      icon: Cloud,
      skills: ["AWS"]
    },
    {
      title: "Cloud Technologies",
      icon: Server,
      skills: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "CloudWatch", "Route 53", "IAM", "Auto Scaling", "Load Balancer"]
    },
    {
      title: "DevOps Tools",
      icon: Code,
      skills: ["Jenkins", "Terraform", "Docker", "Kubernetes", "Ansible", "Git", "GitHub"]
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python"]
    },
    {
      title: "Operating Systems",
      icon: Server,
      skills: ["Linux", "Windows"]
    },
    {
      title: "Security & Networking",
      icon: Shield,
      skills: ["VPC", "WAF", "Security Groups", "IAM"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-200/20"></div>
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            NV
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            Hi, I'm Naveen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 font-medium">
            Cloud & Backend Developer
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-gray-600">
            Self-motivated engineering student passionate about building scalable, secure, and efficient cloud architectures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-600">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Veeramreddy Venkata Naveen</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                Self-motivated engineering student with strong skills in Python, SQL, and cloud computing. 
                Experienced in backend development and building scalable systems, with proficiency in Linux, 
                Git, and Visual Studio Code. Passionate about creating efficient, secure, and user-centric 
                cloud architectures.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-600">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">B.Tech in Electronics and Communication</h4>
                    <p className="text-gray-600">Pragati Engineering College</p>
                    <p className="text-gray-600">CGPA: 7.8 (2021–2025)</p>
                  </div>
                  <Separator className="bg-gray-200" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Intermediate</h4>
                    <p className="text-gray-600">FIITJEE</p>
                    <p className="text-gray-600">888/1000 (2019–2021)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-600">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-800 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-blue-600" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
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
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Skills & Technologies</h2>
          <p className="text-center text-lg text-gray-600 mb-16">My technical expertise</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-blue-600 flex items-center gap-3">
                    <category.icon className="h-6 w-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-blue-200 text-gray-700 hover:bg-blue-50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Soft Skills</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                {["Teamwork", "Initiative", "Adaptability", "Willingness to Learn"].map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-blue-300 text-blue-700 p-3 text-center justify-center hover:bg-blue-50 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-600">Career Interests</h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Aspiring backend and cloud developer focused on building scalable infrastructures and backend systems. 
            Open to opportunities in <span className="text-blue-600 font-semibold">backend engineering</span>, 
            <span className="text-blue-600 font-semibold"> DevOps</span>, and 
            <span className="text-blue-600 font-semibold"> cloud architecture</span> roles.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-600">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <a href="mailto:naveenveeramreddy181668@gmail.com" className="hover:text-blue-600 transition-colors text-gray-600">
                    naveenveeramreddy181668@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-600">+91 9347980893</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-blue-600" />
                  <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors text-gray-600">
                    linkedin.com/in/naveen-veeramreddy
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="h-6 w-6 text-blue-600" />
                  <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors text-gray-600">
                    github.com/Naveenveeramreddy
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-gray-50 border-gray-300 text-gray-800 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-50 border-gray-300 text-gray-800 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32 p-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Naveen Veeramreddy. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
