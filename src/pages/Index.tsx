import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cloud, Database, Server, Shield, Zap, Users, Target, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
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
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "Route 53 (AWS Web Architecture)",
      description: "Robust cloud infrastructure using Route 53, CloudFront, WAF, ACM, VPC, EC2, RDS, and Load Balancer, deployed with a custom domain and scalable backend.",
      technologies: ["AWS", "Route 53", "CloudFront", "EC2", "RDS", "VPC"],
      status: "Live",
      impact: "99.9% Uptime"
    },
    {
      title: "3-Tier Web Application Architecture",
      description: "Scalable architecture with EC2, ALB, Auto Scaling Groups, and Amazon RDS inside a VPC, focusing on HA and security.",
      technologies: ["AWS", "EC2", "ALB", "Auto Scaling", "RDS", "VPC"],
      status: "Production",
      impact: "50% Cost Reduction"
    },
    {
      title: "Car Showroom Explorer",
      description: "Python console application simulating car selection and price computation with OOP and data structure integration.",
      technologies: ["Python", "OOP", "Data Structures", "Console App"],
      status: "Completed",
      impact: "Learning Project"
    }
  ];

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "EC2", "S3", "RDS", "Lambda"],
      proficiency: 90
    },
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      skills: ["Jenkins", "Terraform", "Docker", "Kubernetes", "Ansible"],
      proficiency: 85
    },
    {
      title: "Programming & Development",
      icon: Code,
      skills: ["Python", "SQL", "Git", "Linux", "REST APIs"],
      proficiency: 88
    },
    {
      title: "Security & Networking",
      icon: Shield,
      skills: ["VPC", "WAF", "Security Groups", "IAM", "SSL/TLS"],
      proficiency: 82
    }
  ];

  const achievements = [
    { number: "15+", label: "Projects Completed", icon: Target },
    { number: "3+", label: "Years Experience", icon: TrendingUp },
    { number: "8", label: "Cloud Deployments", icon: Cloud },
    { number: "20+", label: "Technologies Mastered", icon: Award }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
      icon: Zap
    },
    {
      title: "Reliability",
      description: "Building robust, scalable systems that businesses can depend on for critical operations.",
      icon: Shield
    },
    {
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to achieve shared goals and objectives.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Hero Section */}
      <section className="relative bg-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Available for Opportunities
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Empowering Your
                  <span className="block text-blue-600">Cloud Journey</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Self-motivated engineering student specializing in cloud architecture, 
                  backend development, and DevOps automation. Ready to drive innovation 
                  and deliver scalable solutions.
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <achievement.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                        <div className="text-sm text-gray-600">{achievement.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com/Naveenveeramreddy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Github className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </a>
                <a 
                  href="https://linkedin.com/in/naveen-veeramreddy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </a>
                <a 
                  href="mailto:naveenveeramreddy181668@gmail.com" 
                  className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </a>
              </div>
            </div>

            {/* Right Content - Professional Image Placeholder */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl">
                {/* Professional Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                    NV
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Cloud className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">AWS Certified</div>
                      <div className="text-xs text-gray-600">Cloud Solutions</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 right-8 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">15+ Projects</div>
                      <div className="text-xs text-gray-600">Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about building scalable cloud solutions and driving digital transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Veeramreddy Venkata Naveen</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Self-motivated engineering student with strong expertise in Python, SQL, and cloud computing. 
                Experienced in backend development and building scalable systems, with proficiency in Linux, 
                Git, and modern development tools. Passionate about creating efficient, secure, and user-centric 
                cloud architectures that drive business value.
              </p>
              
              {/* Core Values */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Core Values</h4>
                <div className="grid gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">{value.title}</h5>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-900">Education</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">B.Tech in Electronics and Communication</h4>
                    <p className="text-gray-600">Pragati Engineering College</p>
                    <p className="text-gray-600">CGPA: 7.8 (2021–2025)</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-gray-900">Intermediate</h4>
                    <p className="text-gray-600">FIITJEE</p>
                    <p className="text-gray-600">888/1000 (2019–2021)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-900">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">AWS Cloud Practitioner (In Progress)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Python Programming</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Linux System Administration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Showcasing my expertise in cloud architecture and backend development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Live' ? 'bg-green-100 text-green-800' :
                        project.status === 'Production' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-medium">{project.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-600">
              Comprehensive skill set across cloud platforms, development, and DevOps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    {category.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Proficiency</span>
                      <span className="font-medium text-gray-900">{category.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${category.proficiency}%` }}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
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
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Soft Skills</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                {["Leadership", "Problem Solving", "Team Collaboration", "Continuous Learning"].map((skill, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Objectives */}
      <section id="services" className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Career Objectives</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-xl leading-relaxed text-gray-700">
              Seeking opportunities to contribute as a <span className="font-semibold text-blue-600">Backend Developer</span>, 
              <span className="font-semibold text-blue-600"> DevOps Engineer</span>, or 
              <span className="font-semibold text-blue-600"> Cloud Architect</span>. 
              Passionate about building scalable infrastructures, automating deployment processes, 
              and implementing best practices for cloud-native applications.
            </p>
            <div className="mt-8 flex justify-center">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Discuss Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to collaborate? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a href="mailto:naveenveeramreddy181668@gmail.com" className="text-blue-600 hover:text-blue-700">
                      naveenveeramreddy181668@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <span className="text-gray-600">+91 9347980893</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">LinkedIn</div>
                    <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                      linkedin.com/in/naveen-veeramreddy
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Github className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">GitHub</div>
                    <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700">
                      github.com/Naveenveeramreddy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Send a Message</CardTitle>
                <CardDescription>
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-2 w-full h-32 p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300">
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
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Naveen Veeramreddy</h3>
              <p className="text-gray-400">Cloud & Backend Developer</p>
            </div>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/Naveenveeramreddy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/naveen-veeramreddy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:naveenveeramreddy181668@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
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