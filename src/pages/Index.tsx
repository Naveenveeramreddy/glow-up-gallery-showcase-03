import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cloud, Database, Server, Shield, Zap, Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Menu, X, Settings, Monitor, Lock, MapPin, Calendar, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "Route 53 (AWS Web Architecture)",
      description: "Robust cloud infrastructure using Route 53, CloudFront, WAF, ACM, VPC, EC2, RDS, and Load Balancer, deployed with a custom domain and scalable backend.",
      technologies: ["AWS", "Route 53", "CloudFront", "EC2", "RDS", "VPC", "WAF", "ACM"],
      status: "Live",
      icon: Cloud
    },
    {
      title: "3-Tier Web Application Architecture",
      description: "Scalable architecture with EC2, ALB, Auto Scaling Groups, and Amazon RDS inside a VPC, focusing on HA and security.",
      technologies: ["AWS", "EC2", "ALB", "Auto Scaling", "RDS", "VPC"],
      status: "Production",
      icon: Server
    },
    {
      title: "Car Showroom Explorer",
      description: "Python console application simulating car selection and price computation with OOP and data structure integration.",
      technologies: ["Python", "OOP", "Data Structures", "Console App"],
      status: "Completed",
      icon: Code
    }
  ];

  const skills = [
    {
      category: "Cloud Platform",
      description: "AWS",
      items: ["AWS"],
      icon: Cloud,
      proficiency: 90
    },
    {
      category: "Cloud Technologies",
      description: "Core AWS Services",
      items: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "CloudWatch", "Route 53", "IAM", "Auto Scaling", "Load Balancer"],
      icon: Server,
      proficiency: 88
    },
    {
      category: "DevOps Tools",
      description: "CI/CD & Infrastructure",
      items: ["Jenkins", "Terraform", "Docker", "Kubernetes", "Ansible", "Git", "GitHub"],
      icon: Settings,
      proficiency: 85
    },
    {
      category: "Programming",
      description: "Development Languages",
      items: ["Python"],
      icon: Code,
      proficiency: 90
    },
    {
      category: "Operating Systems",
      description: "System Administration",
      items: ["Linux", "Windows"],
      icon: Monitor,
      proficiency: 87
    },
    {
      category: "Security & Networking",
      description: "Cloud Security & Network",
      items: ["VPC", "WAF", "Security Groups", "IAM"],
      icon: Shield,
      proficiency: 85
    }
  ];

  const achievements = [
    { number: "15+", label: "Projects Completed", icon: Target },
    { number: "3+", label: "Years Experience", icon: TrendingUp },
    { number: "8", label: "Cloud Deployments", icon: Cloud },
    { number: "7.8", label: "CGPA", icon: Award }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">Naveen</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="block hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block hover:text-primary transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center tech-bg overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float-gentle" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float-gentle" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float-gentle" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(0,174,239,0.03)_25px,rgba(0,174,239,0.03)_26px,transparent_27px,transparent_99px,rgba(0,174,239,0.03)_100px),linear-gradient(transparent_24px,rgba(0,174,239,0.03)_25px,rgba(0,174,239,0.03)_26px,transparent_27px,transparent_99px,rgba(0,174,239,0.03)_100px)] bg-[length:100px_100px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center z-10">
          <div className="animate-fade-in-up">
            {/* Enhanced Profile Section */}
            <div className="relative inline-block mb-12">
              {/* Profile Photo with Enhanced Effects */}
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-primary via-accent to-primary/80 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-2xl animate-float-gentle hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse-glow" />
                  <span className="relative z-10">NV</span>
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 shadow-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Location & Experience Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">India</span>
                </div>
                <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Cloud Specialist</span>
                </div>
              </div>
            </div>

            {/* Enhanced Title Section */}
            <div className="relative mb-8">
              <h1 className="heading-primary mb-6 leading-tight">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mb-2">
                  Hi, I'm
                </span>
                <span className="gradient-text block">Naveen Veeramreddy</span>
                <span className="block text-2xl md:text-4xl lg:text-5xl font-normal text-muted-foreground mt-2">
                  Cloud & <span className="text-primary">Backend</span> Developer
                </span>
              </h1>

              {/* Animated Underline */}
              <div className="flex justify-center mt-6">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow" />
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-body text-xl leading-relaxed mb-6">
                Self-motivated engineering student passionate about building 
                <span className="text-primary font-semibold"> scalable cloud infrastructures</span> and 
                <span className="text-primary font-semibold"> backend systems</span>. 
                Ready to drive innovation in cloud architecture and DevOps.
              </p>
              
              {/* Tech Stack Preview */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["AWS", "Python", "Docker", "Kubernetes", "Terraform"].map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-colors px-4 py-2 text-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center gap-4 mb-12">
              <a 
                href="https://github.com/Naveenveeramreddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-16 h-16 bg-card/80 backdrop-blur-sm hover:bg-primary/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover-glow border border-border/50 hover:border-primary/50 hover:scale-110"
              >
                <Github className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  GitHub
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/naveen-veeramreddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-16 h-16 bg-card/80 backdrop-blur-sm hover:bg-blue-500/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover-glow border border-border/50 hover:border-blue-500/50 hover:scale-110"
              >
                <Linkedin className="w-7 h-7 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  LinkedIn
                </div>
              </a>
              
              <a 
                href="mailto:naveenveeramreddy181668@gmail.com"
                className="group relative w-16 h-16 bg-card/80 backdrop-blur-sm hover:bg-green-500/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover-glow border border-border/50 hover:border-green-500/50 hover:scale-110"
              >
                <Mail className="w-7 h-7 text-muted-foreground group-hover:text-green-400 transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Email
                </div>
              </a>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-primary hover:border-primary/80"
              >
                <span className="mr-3">View My Projects</span>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="group bg-transparent hover:bg-primary/10 text-foreground font-semibold px-10 py-4 rounded-2xl border-2 border-primary/50 hover:border-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="mr-3">Get in Touch</span>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate about creating efficient, secure, and user-centric cloud architectures
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4 gradient-text">Veeramreddy Venkata Naveen</h3>
                <p className="text-body leading-relaxed">
                  Self-motivated engineering student with strong skills in Python, SQL, and cloud computing. 
                  Experienced in backend development and building scalable systems, with proficiency in Linux, 
                  Git, and Visual Studio Code. Passionate about creating efficient, secure, and user-centric 
                  cloud architectures.
                </p>
              </div>

              <Button className="btn-primary w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="card-shadow hover-glow">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">B.Tech in Electronics and Communication</h4>
                    <p className="text-muted-foreground">Pragati Engineering College</p>
                    <p className="text-primary font-medium">CGPA: 7.8 (2021–2025)</p>
                  </div>
                  <Separator className="bg-border" />
                  <div>
                    <h4 className="font-semibold text-foreground">Intermediate</h4>
                    <p className="text-muted-foreground">FIITJEE</p>
                    <p className="text-primary font-medium">888/1000 (2019–2021)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow hover-glow">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Career Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Aspiring backend and cloud developer focused on building scalable infrastructures 
                    and backend systems. Open to opportunities in backend engineering, DevOps, and 
                    cloud architecture roles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my expertise in cloud architecture and backend development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-shadow hover-lift group bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          project.status === 'Live' ? 'bg-green-900/50 text-green-300 border-green-600' :
                          project.status === 'Production' ? 'bg-blue-900/50 text-blue-300 border-blue-600' :
                          'bg-gray-900/50 text-gray-300 border-gray-600'
                        }`}
                      >
                        {project.status}
                      </Badge>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
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
      <section id="skills" className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              My technical expertise across cloud platforms, DevOps, and development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="card-shadow hover-glow bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <skillCategory.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{skillCategory.category}</div>
                      <div className="text-sm text-muted-foreground">{skillCategory.description}</div>
                    </div>
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium text-primary">{skillCategory.proficiency}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill"
                        style={{ width: `${skillCategory.proficiency}%` }}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-primary/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate? Let's discuss opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-card rounded-lg card-shadow hover-glow">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a href="mailto:naveenveeramreddy181668@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                      naveenveeramreddy181668@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-card rounded-lg card-shadow hover-glow">
                  <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <span className="text-muted-foreground">+91 9347980893</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-card rounded-lg card-shadow hover-glow">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">LinkedIn</div>
                    <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      linkedin.com/in/naveen-veeramreddy
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-card rounded-lg card-shadow hover-glow">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Github className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">GitHub</div>
                    <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-200 transition-colors">
                      github.com/Naveenveeramreddy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-shadow hover-glow bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="form-label">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="form-label">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="form-label">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="form-input h-32 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card/50 border-t border-border">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 gradient-text">Naveen Veeramreddy</h3>
              <p className="text-muted-foreground">Cloud & Backend Developer</p>
            </div>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:naveenveeramreddy181668@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground">
                © 2024 Naveen Veeramreddy. Built with React & Tailwind CSS. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
