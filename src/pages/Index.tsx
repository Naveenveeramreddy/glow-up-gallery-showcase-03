
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Download,
  Star,
  Award,
  Users,
  Code,
  Server,
  Shield,
  Cloud,
  Settings,
  Terminal
} from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    {
      category: "Cloud Platform",
      icon: <Cloud className="w-5 h-5" />,
      items: ["AWS"],
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Cloud Technologies", 
      icon: <Server className="w-5 h-5" />,
      items: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "CloudWatch", "Route 53", "IAM", "Auto Scaling", "Load Balancer"],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "DevOps Tools",
      icon: <Settings className="w-5 h-5" />,
      items: ["Jenkins", "Terraform", "Docker", "Kubernetes", "Ansible", "Git", "GitHub"],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Programming",
      icon: <Code className="w-5 h-5" />,
      items: ["Python"],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Operating Systems",
      icon: <Terminal className="w-5 h-5" />,
      items: ["Linux", "Windows"],
      color: "from-red-500 to-red-600"
    },
    {
      category: "Security & Networking",
      icon: <Shield className="w-5 h-5" />,
      items: ["VPC", "WAF", "Security Groups", "IAM"],
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and Jenkins CI/CD pipelines",
      tech: ["AWS", "Terraform", "Jenkins", "Docker"],
      status: "Production",
      impact: "99.9% uptime"
    },
    {
      title: "Kubernetes Microservices Platform",
      description: "Scalable microservices architecture with automated monitoring and logging",
      tech: ["Kubernetes", "Docker", "Python", "CloudWatch"],
      status: "Active",
      impact: "40% cost reduction"
    },
    {
      title: "Security Compliance Framework",
      description: "Enterprise security framework with automated compliance monitoring",
      tech: ["AWS IAM", "WAF", "Security Groups", "Ansible"],
      status: "Deployed",
      impact: "100% compliance"
    }
  ];

  const experience = [
    {
      role: "Senior Cloud Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      achievements: [
        "Led cloud migration reducing infrastructure costs by 35%",
        "Implemented automated CI/CD pipelines increasing deployment frequency by 300%",
        "Designed disaster recovery solutions achieving 99.99% availability"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Innovation Labs",
      period: "2020 - 2022", 
      achievements: [
        "Built containerized applications using Docker and Kubernetes",
        "Automated infrastructure provisioning with Terraform",
        "Established monitoring and alerting systems with CloudWatch"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative section-professional overflow-hidden">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h1 className="heading-xl mb-2">
                    <span className="professional-gradient">Naveen Veeramreddy</span>
                  </h1>
                  <h2 className="heading-lg text-muted-foreground mb-4">
                    Cloud & DevOps Engineer
                  </h2>
                  <p className="text-professional max-w-lg mx-auto lg:mx-0">
                    Self-motivated engineering student specializing in AWS cloud architecture, 
                    infrastructure automation, and DevOps practices. I build scalable, secure, 
                    and cost-effective cloud solutions.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Remote • Available</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full self-center" />
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>5+ Years Experience</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="lg" className="btn-professional group">
                        <Mail className="w-4 h-4 mr-2" />
                        Get In Touch
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Let's discuss your project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <Button variant="outline" size="lg" className="btn-professional-outline group">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <TooltipProvider>
                  {[
                    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" },
                    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
                    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:" }
                  ].map((social, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="subtle-glow">
                          {social.icon}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 glass-professional animate-gentle-float" />
                <div className="absolute inset-4 rounded-xl bg-card professional-card flex items-center justify-center">
                  <Avatar className="w-40 h-40 animate-subtle-pulse">
                    <AvatarImage src="/api/placeholder/400/400" alt="Naveen Veeramreddy" />
                    <AvatarFallback className="text-4xl font-bold">NV</AvatarFallback>
                    <div className="status-indicator">
                      <div className="status-online" />
                    </div>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          onClick={() => scrollToSection('skills')}
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-professional bg-card/30">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Technical Expertise</h2>
            <p className="text-professional max-w-2xl mx-auto">
              Comprehensive cloud and DevOps skills built through years of hands-on experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="professional-card border-0 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <h3 className="heading-md text-lg">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-professional">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <p className="text-professional max-w-2xl mx-auto">
              Real-world solutions that demonstrate technical expertise and business impact
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="professional-card border-0 bg-card/50 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <h3 className="heading-md text-xl mb-3">{project.title}</h3>
                  <p className="text-professional text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Star className="w-4 h-4" />
                    <span className="font-medium">{project.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-professional bg-card/30">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Professional Experience</h2>
            <p className="text-professional max-w-2xl mx-auto">
              Track record of delivering complex cloud solutions and leading technical initiatives
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="professional-card border-0 bg-card/50">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="heading-md text-xl mb-1">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-professional text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-professional">
        <div className="container-professional">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Let's Build Something Great</h2>
            <p className="text-professional mb-8">
              Ready to discuss your next cloud project? I'm here to help you build scalable, 
              secure, and efficient solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-professional group">
                <Mail className="w-4 h-4 mr-2" />
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="btn-professional-outline">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container-professional">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Cloud Engineer Portfolio. Built with modern web technologies.
            </p>
            <div className="flex items-center gap-4">
              <TooltipProvider>
                {[
                  { icon: <Github className="w-4 h-4" />, label: "GitHub" },
                  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                  { icon: <Mail className="w-4 h-4" />, label: "Email" }
                ].map((social, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="w-8 h-8 subtle-glow">
                        {social.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
