import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cloud, Database, Server, Shield, Sparkles, Brain, Zap } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Neural Network Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Animated Neural Network Lines */}
              {Array.from({ length: 15 }).map((_, i) => (
                <g key={i}>
                  <line
                    x1={Math.random() * 1000}
                    y1={Math.random() * 1000}
                    x2={Math.random() * 1000}
                    y2={Math.random() * 1000}
                    stroke="url(#neuralGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                  <circle
                    cx={Math.random() * 1000}
                    cy={Math.random() * 1000}
                    r="3"
                    fill="url(#neuralGradient)"
                    className="animate-ping"
                    style={{
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + Math.random() * 1}s`
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="text-center z-10 max-w-5xl mx-auto relative">
          {/* AI-Inspired Avatar */}
          <div className="relative mb-12">
            <div className="w-40 h-40 mx-auto relative">
              {/* Outer Ring with Rotation */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-sm" />
              </div>
              
              {/* Middle Ring */}
              <div className="absolute inset-2 rounded-full border border-blue-400/50 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md" />
              </div>
              
              {/* Inner Avatar */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                <div className="relative">
                  NV
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-2 -left-2 animate-bounce" style={{ animationDelay: '0s' }}>
                <div className="w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Cloud className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-8 h-8 bg-purple-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 bg-cyan-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Code className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 animate-bounce" style={{ animationDelay: '1.5s' }}>
                <div className="w-8 h-8 bg-green-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="space-y-6 mb-12">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Hi, I'm Naveen
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-xl -z-10 animate-pulse" />
            </div>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl mb-6 text-gray-300 font-medium">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Cloud & Backend Developer
                </span>
                <span className="ml-2 inline-block animate-pulse">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </span>
              </p>
            </div>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-400 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              Self-motivated engineering student passionate about building 
              <span className="text-blue-400 font-semibold"> scalable</span>, 
              <span className="text-purple-400 font-semibold"> secure</span>, and 
              <span className="text-cyan-400 font-semibold"> efficient</span> cloud architectures
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Projects
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-10 py-4 text-lg backdrop-blur-sm bg-white/5 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/Naveenveeramreddy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="https://linkedin.com/in/naveen-veeramreddy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse" />
            </div>
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