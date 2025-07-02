import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cloud, Database, Server, Shield, Award, CheckCircle, ArrowRight } from "lucide-react";
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

  const achievements = [
    "Cloud Architecture Design",
    "Scalable Backend Systems",
    "DevOps Implementation",
    "Security Best Practices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Professional Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Professional Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Subtle Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-xl" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-100/40 rounded-lg rotate-45 blur-lg" />
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-slate-100/50 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200/30 rounded-lg rotate-12 blur-xl" />

          {/* Professional Accent Lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/50 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-200/50 to-transparent" />
        </div>
        
        <div className="text-center z-10 max-w-6xl mx-auto relative">
          {/* Professional Avatar */}
          <div className="relative mb-12">
            <div className="w-32 h-32 mx-auto relative">
              {/* Clean Professional Ring */}
              <div className="absolute inset-0 rounded-full border-3 border-blue-200 bg-white shadow-xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white">
                  NV
                </div>
              </div>
              
              {/* Professional Status Indicators */}
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Subtle Tech Icons */}
              <div className="absolute -bottom-1 -left-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <Cloud className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1">
                <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-md">
                  <Code className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Typography */}
          <div className="space-y-6 mb-12">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-800 tracking-tight">
                Naveen Veeramreddy
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            </div>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl mb-6 text-slate-600 font-medium">
                Cloud & Backend Developer
                <span className="ml-2 inline-block">
                  <Award className="w-6 h-6 text-blue-600" />
                </span>
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-slate-600 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
                Self-motivated engineering student with expertise in building 
                <span className="text-blue-600 font-semibold"> scalable cloud architectures</span>, 
                <span className="text-indigo-600 font-semibold"> secure backend systems</span>, and 
                <span className="text-slate-700 font-semibold"> efficient DevOps solutions</span>
              </p>
            </div>

            {/* Professional Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{achievement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-10 py-4 text-lg bg-white/90 backdrop-blur-sm transition-all duration-300 rounded-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Professional Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/Naveenveeramreddy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-4 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <Github className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/naveen-veeramreddy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-4 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="mailto:naveenveeramreddy181668@gmail.com" 
              className="group p-4 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-slate-600 group-hover:text-indigo-600 transition-colors" />
            </a>
          </div>

          {/* Professional Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce" />
              </div>
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