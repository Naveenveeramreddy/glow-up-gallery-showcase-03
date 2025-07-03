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
  Terminal,
  GraduationCap,
  BookOpen
} from "lucide-react";

interface HeroSectionProps {
  openEmail: () => void;
  openResume: () => void;
  openGitHub: () => void;
  openLinkedIn: () => void;
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ openEmail, openResume, openGitHub, openLinkedIn, scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative section-professional overflow-hidden">
      <div className="container-professional">
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-8">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h1 className="heading-xl mb-4">
                  <span className="professional-gradient">Naveen Veeramreddy</span>
                </h1>
                <h2 className="heading-lg text-muted-foreground mb-6">
                  Aspiring Cloud & DevOps Engineer
                </h2>
                <p className="text-professional max-w-lg mx-auto lg:mx-0">
                  Passionate engineering student specializing in AWS cloud architecture, 
                  infrastructure automation, and DevOps practices. Eager to apply my technical 
                  skills and fresh perspective to build scalable, secure cloud solutions.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Remote • Available</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full self-center" />
                
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="lg" className="btn-professional group" onClick={openEmail}>
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
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-professional-outline group"
                onClick={openResume}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
                <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="subtle-glow" onClick={openGitHub}>
                      <Github className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="subtle-glow" onClick={openLinkedIn}>
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="subtle-glow" onClick={openEmail}>
                      <Mail className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-slide-in-right lg:mt-8">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 glass-professional animate-gentle-float" />
              <div className="absolute inset-4 rounded-xl bg-card professional-card flex items-center justify-center">
                <Avatar className="w-40 h-40 animate-subtle-pulse">
                  <AvatarImage 
                    src="https://i.postimg.cc/0Q7c2xW5/IMG-20250702-WA0013-1.jpg" 
                    alt="Naveen Veeramreddy"
                    className="object-cover object-center"
                  />
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
  );
};

const SkillsSection = ({ skills }) => (
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
);

const ProjectsSection = ({ projects }) => (
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
);

const ExperienceSection = ({ experience }) => (
  <section className="section-professional bg-card/30">
    <div className="container-professional">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Learning Journey & Development</h2>
        <p className="text-professional max-w-2xl mx-auto">
          My path to becoming a cloud engineer through continuous learning, hands-on projects, and skill development
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, index) => (
          <Card key={index} className="professional-card border-0 bg-card/50">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="heading-md text-xl mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
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
);

const ContactSection = ({ openEmail, openCalendly }) => (
  <section className="section-professional">
    <div className="container-professional">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading-lg mb-6">Ready to Start My Career</h2>
        <p className="text-professional mb-8">
          I'm actively seeking entry-level opportunities in cloud engineering and DevOps. 
          Let's discuss how my fresh perspective and technical skills can contribute to your team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="btn-professional group" onClick={openEmail}>
            <Mail className="w-4 h-4 mr-2" />
            Start a Conversation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="btn-professional-outline" onClick={openCalendly}>
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a Call
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ openGitHub, openLinkedIn, openEmail }) => (
  <footer className="border-t border-border/50 py-8">
    <div className="container-professional">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Cloud Engineer Portfolio. Built with modern web technologies.
        </p>
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8 subtle-glow" onClick={openGitHub}>
                  <Github className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8 subtle-glow" onClick={openLinkedIn}>
                  <Linkedin className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8 subtle-glow" onClick={openEmail}>
                  <Mail className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1d5xs7mtzIqpD9PLOR4ujN0hrdmfI0pVS/view?usp=sharing', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/Naveenveeramreddy', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/naveen-veeramreddy', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:naveenveeramreddy181668@gmail.com', '_blank');
  };

  const openCalendly = () => {
    window.open('https://calendly.com/naveenveeramreddy181668', '_blank');
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
      title: "Route 53 - AWS Web Application Architecture",
      description: "Secure, scalable, and highly available web application architecture with custom domain navhaaseen.xyz. Uses Route 53 for DNS management, CloudFront CDN, AWS WAF for security, and multi-AZ deployment with Auto Scaling.",
      tech: ["AWS Route 53", "CloudFront", "WAF", "EC2", "RDS", "ALB", "Auto Scaling"],
      status: "Production",
      impact: "Highly Available"
    },
    {
      title: "3-Tier Architecture on AWS",
      description: "Designed and deployed a 3-tier architecture with EC2 instances, Application Load Balancer, Auto Scaling Groups, and RDS. Implemented across multiple Availability Zones with custom VPC for network isolation.",
      tech: ["AWS", "EC2", "RDS", "ALB", "VPC", "Auto Scaling", "Linux"],
      status: "Deployed",
      impact: "99.9% uptime"
    },
    {
      title: "Car Showroom Explorer",
      description: "Backend Python application simulating a virtual car showroom with brand selection, cost calculations including taxes and insurance. Features modular functions and OOP design patterns.",
      tech: ["Python", "OOP", "Data Structures", "Console UI"],
      status: "Completed",
      impact: "Clean Architecture"
    }
  ];

  const experience = [
    {
      role: "Cloud & DevOps Learning Journey",
      company: "Self-Directed & Online Platforms",
      period: "2022 - Present",
      icon: <Code className="w-4 h-4" />,
      achievements: [
        "Completed comprehensive AWS cloud fundamentals and practical implementations",
        "Built and deployed multiple real-world projects including Route 53 architecture",
        "Mastered infrastructure automation using Terraform, Docker, and Kubernetes",
        "Developed proficiency in Python programming and backend development"
      ]
    },
    {
      role: "B.Tech Electronics and Communication",
      company: "Pragati Engineering College",
      period: "2021 - 2025",
      icon: <GraduationCap className="w-4 h-4" />,
      achievements: [
        "Current CGPA: 7.8/10.0 - Maintaining strong academic performance",
        "Specialized in Electronics and Communication Engineering fundamentals",
        "Developed strong foundation in engineering principles and problem-solving",
        "Self-directed learning in cloud computing and DevOps alongside core curriculum"
      ]
    },
    {
      role: "Intermediate Education",
      company: "FIITJEE",
      period: "2019 - 2021",
      icon: <BookOpen className="w-4 h-4" />,
      achievements: [
        "Achieved 888/1000 marks (88.8%) in intermediate examination",
        "Strong foundation in Mathematics, Physics, and Chemistry",
        "Developed analytical thinking and problem-solving skills",
        "Prepared for competitive engineering entrance examinations"
      ]
    },
    {
      role: "Secondary Education (10th Class)",
      company: "Sasi Educational Institution",
      period: "2018 - 2019",
      icon: <Award className="w-4 h-4" />,
      achievements: [
        "Achieved outstanding CGPA of 9.8/10.0 in 10th standard",
        "Demonstrated excellence across all subjects with consistent performance",
        "Developed strong academic foundation and study discipline",
        "Active participation in school activities and leadership roles"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        openEmail={openEmail} 
        openResume={openResume} 
        openGitHub={openGitHub} 
        openLinkedIn={openLinkedIn} 
        scrollToSection={scrollToSection}
      />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      <ContactSection openEmail={openEmail} openCalendly={openCalendly} />
      <Footer openGitHub={openGitHub} openLinkedIn={openLinkedIn} openEmail={openEmail} />
    </div>
  );
};

export default Index;
