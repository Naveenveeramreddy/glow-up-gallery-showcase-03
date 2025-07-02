
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cloud, Database, Server, Shield, Zap, Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Menu, X, Settings, Monitor, Lock, MapPin, Calendar, Star, Briefcase, GraduationCap, Rocket, Globe, ChevronDown } from "lucide-react";
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
      icon: Cloud,
      link: "#"
    },
    {
      title: "3-Tier Web Application Architecture",
      description: "Scalable architecture with EC2, ALB, Auto Scaling Groups, and Amazon RDS inside a VPC, focusing on HA and security.",
      technologies: ["AWS", "EC2", "ALB", "Auto Scaling", "RDS", "VPC"],
      status: "Production",
      icon: Server,
      link: "#"
    },
    {
      title: "Car Showroom Explorer",
      description: "Python console application simulating car selection and price computation with OOP and data structure integration.",
      technologies: ["Python", "OOP", "Data Structures", "Console App"],
      status: "Completed",
      icon: Code,
      link: "#"
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg">
                NV
              </div>
              <div className="text-xl font-bold gradient-text">Naveen Veeramreddy</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-primary transition-colors font-medium">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-border/50">
              <button onClick={() => scrollToSection('home')} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-muted-foreground hover:text-primary transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Professional Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
        
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-gentle" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-40 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '4s' }} />
        </div>

        {/* Professional Grid Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(0,174,239,0.02)_25px,rgba(0,174,239,0.02)_26px,transparent_27px,transparent_99px,rgba(0,174,239,0.02)_100px),linear-gradient(transparent_24px,rgba(0,174,239,0.02)_25px,rgba(0,174,239,0.02)_26px,transparent_27px,transparent_99px,rgba(0,174,239,0.02)_100px)] bg-[length:100px_100px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 z-10">
          <div className="text-center animate-fade-in-up">
            {/* Professional Profile Section */}
            <div className="relative inline-block mb-12">
              {/* Enhanced Profile Display */}
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary via-accent to-primary/90 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse-glow rounded-2xl" />
                  <span className="relative z-10">NV</span>
                </div>
                
                {/* Professional Status Indicator */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-card/95 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 shadow-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Open to opportunities</span>
                  </div>
                </div>
              </div>

              {/* Professional Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 hover:bg-card/80 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">India</span>
                </div>
                <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 hover:bg-card/80 transition-colors">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 hover:bg-card/80 transition-colors">
                  <Cloud className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Cloud Specialist</span>
                </div>
              </div>
            </div>

            {/* Professional Typography */}
            <div className="relative mb-10">
              <div className="mb-4">
                <p className="text-lg text-muted-foreground font-medium mb-2">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
                  <span className="gradient-text">Naveen Veeramreddy</span>
                </h1>
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
                  Cloud & <span className="text-primary font-semibold">Backend Developer</span>
                </div>
              </div>

              {/* Professional Underline */}
              <div className="flex justify-center mt-8">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              </div>
            </div>

            {/* Professional Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                Self-motivated engineering student passionate about building 
                <span className="text-primary font-semibold"> scalable cloud infrastructures</span> and 
                <span className="text-primary font-semibold"> backend systems</span>. 
                Ready to drive innovation in cloud architecture and DevOps.
              </p>
              
              {/* Professional Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {["AWS", "Python", "Docker", "Kubernetes", "Terraform"].map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 px-4 py-2 text-sm font-medium hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Professional Social Links */}
            <div className="flex justify-center gap-4 mb-12">
              <a 
                href="https://github.com/Naveenveeramreddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-card/80 backdrop-blur-sm hover:bg-card rounded-xl flex items-center justify-center transition-all duration-300 border border-border/50 hover:border-primary/50 hover:scale-110"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  GitHub
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/naveen-veeramreddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-card/80 backdrop-blur-sm hover:bg-card rounded-xl flex items-center justify-center transition-all duration-300 border border-border/50 hover:border-blue-500/50 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  LinkedIn
                </div>
              </a>
              
              <a 
                href="mailto:naveenveeramreddy181668@gmail.com"
                className="group relative w-14 h-14 bg-card/80 backdrop-blur-sm hover:bg-card rounded-xl flex items-center justify-center transition-all duration-300 border border-border/50 hover:border-green-500/50 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-green-400 transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Email
                </div>
              </a>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="group font-semibold px-8 py-4 rounded-xl border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">Get in Touch</span>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Professional Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-sm font-medium">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional About Section */}
      <section id="about" className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2 mb-4">
                About Me
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Professional Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating efficient, secure, and user-centric cloud architectures that drive innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold gradient-text">Veeramreddy Venkata Naveen</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Self-motivated engineering student with strong expertise in Python, SQL, and cloud computing. 
                  Experienced in backend development and building scalable systems, with proficiency in Linux, 
                  Git, and modern development tools. Passionate about creating efficient, secure, and user-centric 
                  cloud architectures that solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-3 py-1">Cloud Architecture</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Backend Development</Badge>
                  <Badge variant="secondary" className="px-3 py-1">DevOps</Badge>
                </div>
              </div>

              <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="card-shadow hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-foreground">B.Tech in Electronics and Communication</h4>
                    <p className="text-muted-foreground">Pragati Engineering College</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary/30 text-primary">CGPA: 7.8</Badge>
                      <span className="text-sm text-muted-foreground">2021–2025</span>
                    </div>
                  </div>
                  <Separator className="bg-border/50" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-foreground">Intermediate</h4>
                    <p className="text-muted-foreground">FIITJEE</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary/30 text-primary">888/1000</Badge>
                      <span className="text-sm text-muted-foreground">2019–2021</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    Career Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Aspiring backend and cloud developer focused on building scalable infrastructures 
                    and robust backend systems. Open to opportunities in backend engineering, DevOps, and 
                    cloud architecture roles where I can contribute to innovative solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2 mb-4">
                Portfolio
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing my expertise in cloud architecture, backend development, and scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group card-shadow hover:shadow-xl bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 hover:scale-105">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          project.status === 'Live' ? 'bg-green-500/20 text-green-300 border-green-500/50' :
                          project.status === 'Production' ? 'bg-blue-500/20 text-blue-300 border-blue-500/50' :
                          'bg-gray-500/20 text-gray-300 border-gray-500/50'
                        } px-3 py-1`}
                      >
                        {project.status}
                      </Badge>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 transition-colors text-xs px-2 py-1">
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

      {/* Enhanced Skills Section */}
      <section id="skills" className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2 mb-4">
                Expertise
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My technical expertise across cloud platforms, DevOps tools, and development technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="group card-shadow hover:shadow-xl bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 hover:scale-105">
                <CardHeader className="space-y-4">
                  <CardTitle className="flex items-center gap-4 text-foreground">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skillCategory.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{skillCategory.category}</div>
                      <div className="text-sm text-muted-foreground">{skillCategory.description}</div>
                    </div>
                  </CardTitle>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">Proficiency</span>
                      <span className="font-bold text-primary">{skillCategory.proficiency}%</span>
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
                        className="border-primary/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs px-2 py-1"
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

      {/* Enhanced Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2 mb-4">
                Contact
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? Let's discuss opportunities and create something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="group flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl card-shadow hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a href="mailto:naveenveeramreddy181668@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                      naveenveeramreddy181668@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl card-shadow hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-green-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <span className="text-muted-foreground">+91 9347980893</span>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl card-shadow hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-blue-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">LinkedIn</div>
                    <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      linkedin.com/in/naveen-veeramreddy
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl card-shadow hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-gray-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500/20 to-gray-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">GitHub</div>
                    <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-200 transition-colors">
                      github.com/Naveenveeramreddy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-shadow hover:shadow-xl bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  Send a Message
                </CardTitle>
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
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <span className="mr-2">Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 bg-card/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  NV
                </div>
                <h3 className="text-2xl font-bold gradient-text">Naveen Veeramreddy</h3>
              </div>
              <p className="text-muted-foreground text-lg">Cloud & Backend Developer</p>
            </div>
            
            <div className="flex justify-center gap-6 mb-10">
              <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-card/50">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-card/50">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:naveenveeramreddy181668@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-card/50">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-border/50 pt-8">
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
