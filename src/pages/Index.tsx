import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cloud, Database, Server, Shield, Zap, Terminal, Cpu, HardDrive, Network } from "lucide-react";
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
      technologies: ["AWS", "Route 53", "CloudFront", "EC2", "RDS", "VPC"],
      status: "DEPLOYED"
    },
    {
      title: "3-Tier Web Application Architecture",
      description: "Scalable architecture with EC2, ALB, Auto Scaling Groups, and Amazon RDS inside a VPC, focusing on HA and security.",
      technologies: ["AWS", "EC2", "ALB", "Auto Scaling", "RDS", "VPC"],
      status: "ACTIVE"
    },
    {
      title: "Car Showroom Explorer",
      description: "Python console application simulating car selection and price computation with OOP and data structure integration.",
      technologies: ["Python", "OOP", "Data Structures", "Console App"],
      status: "COMPLETE"
    }
  ];

  const skillCategories = [
    {
      title: "Cloud Platform",
      icon: Cloud,
      skills: ["AWS"],
      level: 85
    },
    {
      title: "Cloud Technologies",
      icon: Server,
      skills: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "CloudWatch", "Route 53", "IAM", "Auto Scaling", "Load Balancer"],
      level: 90
    },
    {
      title: "DevOps Tools",
      icon: Terminal,
      skills: ["Jenkins", "Terraform", "Docker", "Kubernetes", "Ansible", "Git", "GitHub"],
      level: 80
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python"],
      level: 88
    },
    {
      title: "Operating Systems",
      icon: HardDrive,
      skills: ["Linux", "Windows"],
      level: 85
    },
    {
      title: "Security & Networking",
      icon: Shield,
      skills: ["VPC", "WAF", "Security Groups", "IAM"],
      level: 82
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Code },
    { label: "Cloud Deployments", value: "8", icon: Cloud },
    { label: "Years Learning", value: "3+", icon: Zap },
    { label: "Technologies", value: "20+", icon: Cpu }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cyberpunk Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Matrix-style Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Neon Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Scanning Lines */}
          <div className="absolute inset-0">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan-line" />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-scan-line-reverse" style={{ animationDelay: '3s' }} />
          </div>

          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00ff00" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Circuit Lines */}
              {Array.from({ length: 20 }).map((_, i) => (
                <g key={i}>
                  <line
                    x1={Math.random() * 1000}
                    y1={Math.random() * 1000}
                    x2={Math.random() * 1000}
                    y2={Math.random() * 1000}
                    stroke="url(#circuitGradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  />
                  <circle
                    cx={Math.random() * 1000}
                    cy={Math.random() * 1000}
                    r="4"
                    fill="url(#circuitGradient)"
                    className="animate-ping"
                    style={{
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${1.5 + Math.random() * 2}s`
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>
        
        <div className="text-center z-10 max-w-6xl mx-auto relative">
          {/* Cyberpunk Avatar */}
          <div className="relative mb-12">
            <div className="w-40 h-40 mx-auto relative">
              {/* Outer Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-green-500/20 backdrop-blur-sm" />
              </div>
              
              {/* Middle Pulsing Ring */}
              <div className="absolute inset-2 rounded-full border border-purple-400/70 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md" />
              </div>
              
              {/* Inner Avatar with Neon Effect */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-cyan-500/50">
                <div className="relative">
                  NV
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/50 to-purple-400/50 blur-sm -z-10" />
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-3 -left-3 animate-float" style={{ animationDelay: '0s' }}>
                <div className="w-10 h-10 bg-cyan-500/80 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-400/50 shadow-lg shadow-cyan-500/50">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 bg-purple-500/80 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-400/50 shadow-lg shadow-purple-500/50">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-green-500/80 rounded-lg flex items-center justify-center backdrop-blur-sm border border-green-400/50 shadow-lg shadow-green-500/50">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 bg-yellow-500/80 rounded-lg flex items-center justify-center backdrop-blur-sm border border-yellow-400/50 shadow-lg shadow-yellow-500/50">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Cyberpunk Typography */}
          <div className="space-y-8 mb-12">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient-x font-mono tracking-wider">
                NAVEEN.EXE
              </h1>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-green-600/20 blur-xl -z-10 animate-pulse" />
              <div className="text-center mt-2">
                <span className="text-cyan-400 font-mono text-sm tracking-widest">&gt; SYSTEM_ONLINE</span>
              </div>
            </div>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl mb-6 text-gray-300 font-mono">
                <span className="text-cyan-400">[</span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  CLOUD_ARCHITECT
                </span>
                <span className="text-cyan-400">]</span>
                <span className="ml-2 inline-block animate-pulse text-green-400">
                  ●
                </span>
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-gray-400 bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 font-mono">
                <span className="text-cyan-400">&gt;</span> Initializing cloud architect protocol...<br/>
                <span className="text-purple-400">&gt;</span> Loading backend development modules...<br/>
                <span className="text-green-400">&gt;</span> DevOps systems: <span className="text-green-400 font-bold">OPERATIONAL</span><br/>
                <span className="text-yellow-400">&gt;</span> Ready to deploy scalable solutions.
              </p>
            </div>

            {/* Stats Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cyberpunk CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-12 py-4 text-lg shadow-2xl shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/50 font-mono tracking-wider"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                [EXECUTE_PORTFOLIO]
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative border-2 border-green-400/70 text-green-400 hover:bg-green-400/10 hover:border-green-400 px-12 py-4 text-lg backdrop-blur-sm bg-black/60 transition-all duration-300 transform hover:scale-105 font-mono tracking-wider"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                [INIT_CONTACT]
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Cyberpunk Social Links */}
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/Naveenveeramreddy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 rounded-lg bg-black/60 backdrop-blur-sm border border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <Github className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <div className="absolute inset-0 bg-cyan-400/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="https://linkedin.com/in/naveen-veeramreddy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 rounded-lg bg-black/60 backdrop-blur-sm border border-purple-400/50 hover:border-purple-400 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
              <div className="absolute inset-0 bg-purple-400/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="mailto:naveenveeramreddy181668@gmail.com" 
              className="group relative p-4 rounded-lg bg-black/60 backdrop-blur-sm border border-green-400/50 hover:border-green-400 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
            >
              <Mail className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors" />
              <div className="absolute inset-0 bg-green-400/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Cyberpunk Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-cyan-400">
              <span className="text-sm font-mono tracking-widest">[SCROLL_DOWN]</span>
              <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center shadow-lg shadow-cyan-500/50">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse shadow-sm shadow-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 font-mono tracking-wider">[ABOUT_MODULE]</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white font-mono">Veeramreddy Venkata Naveen</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300 font-mono">
                Self-motivated engineering student with strong skills in Python, SQL, and cloud computing. 
                Experienced in backend development and building scalable systems, with proficiency in Linux, 
                Git, and Visual Studio Code. Passionate about creating efficient, secure, and user-centric 
                cloud architectures.
              </p>
              <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 font-mono tracking-wider border border-cyan-400/50">
                <Download className="mr-2 h-4 w-4" />
                [DOWNLOAD_RESUME]
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="bg-black/60 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-cyan-400 font-mono">[EDUCATION_DATA]</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-mono">
                  <div>
                    <h4 className="font-semibold text-white">B.Tech in Electronics and Communication</h4>
                    <p className="text-gray-300">Pragati Engineering College</p>
                    <p className="text-gray-300">CGPA: 7.8 (2021–2025)</p>
                  </div>
                  <Separator className="bg-cyan-500/30" />
                  <div>
                    <h4 className="font-semibold text-white">Intermediate</h4>
                    <p className="text-gray-300">FIITJEE</p>
                    <p className="text-gray-300">888/1000 (2019–2021)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 font-mono tracking-wider">[PROJECT_ARCHIVE]</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/60 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between font-mono">
                    {project.title}
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded font-mono ${
                        project.status === 'DEPLOYED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        project.status === 'ACTIVE' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                        {project.status}
                      </span>
                      <ExternalLink className="h-5 w-5 text-cyan-400" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed font-mono text-sm">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono">
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
      <section id="skills" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400 font-mono tracking-wider">[SKILL_MATRIX]</h2>
          <p className="text-center text-lg text-gray-300 mb-16 font-mono">Technical proficiency levels</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-black/60 border border-green-500/30 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center gap-3 font-mono">
                    <category.icon className="h-6 w-6" />
                    {category.title}
                  </CardTitle>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${category.level}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-mono">{category.level}% PROFICIENCY</span>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-green-400/50 text-gray-300 hover:bg-green-500/10 transition-colors font-mono"
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
            <h3 className="text-2xl font-semibold mb-6 text-center text-white font-mono">[SOFT_SKILLS]</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                {["Teamwork", "Initiative", "Adaptability", "Willingness to Learn"].map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-purple-400/50 text-purple-400 p-3 text-center justify-center hover:bg-purple-500/10 transition-colors font-mono">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 font-mono tracking-wider">[CAREER_OBJECTIVES]</h2>
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <p className="text-xl leading-relaxed text-gray-300 font-mono">
              <span className="text-cyan-400">&gt;</span> Seeking opportunities in <span className="text-green-400 font-semibold">backend engineering</span><br/>
              <span className="text-purple-400">&gt;</span> Specializing in <span className="text-green-400 font-semibold">DevOps automation</span><br/>
              <span className="text-yellow-400">&gt;</span> Architecting <span className="text-green-400 font-semibold">cloud infrastructure</span><br/>
              <span className="text-green-400">&gt;</span> Status: <span className="text-green-400 font-bold">READY_FOR_DEPLOYMENT</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 font-mono tracking-wider">[CONTACT_INTERFACE]</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white font-mono">[CONNECTION_PROTOCOLS]</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-black/60 rounded-lg border border-cyan-500/30">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <a href="mailto:naveenveeramreddy181668@gmail.com" className="hover:text-cyan-400 transition-colors text-gray-300 font-mono">
                    naveenveeramreddy181668@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-black/60 rounded-lg border border-purple-500/30">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <span className="text-gray-300 font-mono">+91 9347980893</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-black/60 rounded-lg border border-green-500/30">
                  <Linkedin className="h-6 w-6 text-green-400" />
                  <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-gray-300 font-mono">
                    linkedin.com/in/naveen-veeramreddy
                  </a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-black/60 rounded-lg border border-yellow-500/30">
                  <Github className="h-6 w-6 text-yellow-400" />
                  <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors text-gray-300 font-mono">
                    github.com/Naveenveeramreddy
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-black/60 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyan-400 font-mono">[MESSAGE_TRANSMISSION]</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 font-mono">NAME_INPUT</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-gray-800 border-cyan-500/30 text-white focus:border-cyan-400 font-mono"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 font-mono">EMAIL_ADDRESS</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-800 border-cyan-500/30 text-white focus:border-cyan-400 font-mono"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300 font-mono">MESSAGE_PAYLOAD</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32 p-3 bg-gray-800 border border-cyan-500/30 rounded-md text-white focus:border-cyan-400 focus:outline-none resize-none font-mono"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 font-mono tracking-wider">
                    [TRANSMIT_MESSAGE]
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 font-mono">
            <span className="text-cyan-400">&gt;</span> © 2024 Naveen Veeramreddy. Built with React & Tailwind CSS. <span className="text-green-400">[SYSTEM_STABLE]</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;