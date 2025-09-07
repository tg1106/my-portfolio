"use client"

import { BlackHoleBackground } from "@/components/black-hole-background"
import { ScrollAnimation } from "@/components/scroll-animation"
import { PortfolioCard } from "@/components/portfolio-card"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Briefcase, Award, FolderOpen, Mail, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function Portfolio() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllExperiences, setShowAllExperiences] = useState(false)
  const [showAllCertifications, setShowAllCertifications] = useState(false)

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my journey, projects, and skills in data science and deep learning.",
      image: "/ai-task-manager-dashboard.jpg",
      skills: ["TypeScript","CSS","JavaScript"],
      githubLink: "https://github.com/username/ai-task-manager",
      link: "https://ai-task-manager.demo.com",
    },
    {
      title: "Real-time Chat Application",
      description: "Multi-room chat application with real-time messaging, file sharing, and video calls.",
      image: "/chat-application-interface.png",
      skills: ["Socket.io", "Express", "React", "WebRTC"],
      githubLink: "https://github.com/username/realtime-chat",
      link: "https://realtime-chat.demo.com",
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Comprehensive analytics dashboard for e-commerce businesses with real-time insights.",
      image: "/analytics-dashboard-charts.png",
      skills: ["Python", "Django", "D3.js", "PostgreSQL"],
      githubLink: "https://github.com/username/ecommerce-analytics",
      link: "https://ecommerce-analytics.demo.com",
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with social features and challenges.",
      image: "/fitness-tracker-mobile-app.jpg",
      skills: ["React Native", "Firebase", "Redux", "Node.js"],
      githubLink: "https://github.com/username/fitness-tracker",
      link: "https://fitness-tracker.demo.com",
    },
    // Moved to end as requested
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on Ethereum blockchain with smart contracts.",
      image: "/blockchain-voting-interface.png",
      skills: ["Solidity", "Web3.js", "React", "Ethereum"],
      githubLink: "https://github.com/username/blockchain-voting",
      link: "https://blockchain-voting.demo.com",
    },
  ]

  const experiences = [
    {
      title: "Software Developer",
      company: "StartupXYZ",
      role: "Frontend Specialist",
      period: "2020 - 2022",
      description:
        "Built responsive web applications using React and TypeScript. Improved application performance by 40% through optimization.",
      image: "/startup-office-workspace.jpg",
      link: "https://startupxyz.com/team",
    },
    {
      title: "Junior Developer",
      company: "Digital Agency Pro",
      role: "Web Developer",
      period: "2019 - 2020",
      description:
        "Developed custom WordPress themes and plugins for client websites. Collaborated with design team on UI/UX improvements.",
      image: "/digital-agency-workspace.jpg",
      link: "https://digitalagencypro.com/portfolio",
    },
    {
      title: "Intern Developer",
      company: "Innovation Labs",
      role: "Software Engineering Intern",
      period: "2018 - 2019",
      description:
        "Contributed to open-source projects and learned modern development practices. Built internal tools for team productivity.",
      image: "/innovation-lab-office.jpg",
      link: "https://innovationlabs.com/internships",
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      role: "Full Stack Developer",
      period: "2017 - 2018",
      description:
        "Delivered custom web solutions for small businesses. Managed complete project lifecycle from requirements to deployment.",
      image: "/freelance-developer-workspace.jpg",
      link: "https://portfolio.example.com/freelance",
    },
    // Moved to end as requested
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      role: "Full Stack Developer",
      period: "2022 - Present",
      description:
        "Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines and mentored junior developers.",
      image: "/tech-company-office.png",
      link: "https://techcorp.com/about",
    },
  ]

  const certifications = [
    {
      title: "AWS Solutions Architect",
      company: "Amazon Web Services",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
      period: "2023",
      certificateLink: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
    },
    {
      title: "Certified Kubernetes Administrator",
      company: "Cloud Native Computing Foundation",
      description: "Expertise in Kubernetes cluster administration and container orchestration.",
      period: "2022",
      certificateLink: "https://www.cncf.io/certification/cka/",
    },
    {
      title: "MongoDB Developer Certification",
      company: "MongoDB University",
      description: "Proficiency in MongoDB database design, development, and administration.",
      period: "2021",
      certificateLink: "https://university.mongodb.com/certification",
    },
    {
      title: "React Developer Certification",
      company: "Meta (Facebook)",
      description: "Advanced React development skills including hooks, context, and performance optimization.",
      period: "2021",
      certificateLink: "https://www.coursera.org/professional-certificates/meta-react-native",
    },
    // Moved to end as requested
    {
      title: "Google Cloud Professional",
      company: "Google Cloud Platform",
      description: "Advanced certification in cloud architecture and Google Cloud services implementation.",
      period: "2022",
      certificateLink: "https://cloud.google.com/certification/cloud-architect",
    },
  ]

  return (
    <div className="min-h-screen relative">
      <BlackHoleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#profile" className="text-foreground hover:text-primary transition-colors">
                Profile
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#certifications" className="text-foreground hover:text-primary transition-colors">
                Certifications
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Profile */}
      <section id="profile" className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <ScrollAnimation className="text-center max-w-4xl">
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="/professional-headshot.png"
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto border-4 border-white/20"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-white to-secondary bg-clip-text [&]:text-white [&]:bg-none">
              {"Tharun Gopinath"}
            </span>
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-xl text-muted-foreground">
              <strong className="text-foreground">Bachelors in Computer Science</strong> | Vellore Institute of
              Technology, Chennai
            </p>
            <p className="text-lg text-secondary">President, Zero Bucks Club<br />
            Sponsorship member, Arignar Anna Tamizh Mandram<br />
            Event Manager, CSED</p>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Aspiring Data Scientist eager to explore Big Data, machine learning, and deep learning. Passionate about building 
            AI solutions and gaining hands-on experience in data-driven projects.
          </p>

          <div className="mt-12 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Connect with me</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-8 bg-card/10 rounded-2xl border border-border/20 backdrop-blur-sm">
              <div className="flex flex-col items-center group">
                <a
                  href="https://github.com/tg1106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/25 mb-2"
                >
                  <Github className="w-8 h-8" />
                </a>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">GitHub</span>
              </div>

              <div className="flex flex-col items-center group">
                <a
                  href="https://www.linkedin.com/in/tharun-gopinath-86b010321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-secondary/25 mb-2"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <span className="text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                  LinkedIn
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center w-16 h-16 bg-white hover:bg-white/90 text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-white/25 mb-2"
                >
                  <Download className="w-8 h-8" />
                </a>
                <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">Resume</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Section 2: Projects */}
      <section id="projects" className="relative z-10 py-4 pt-20 px-6">
        <div className="container mx-auto">
          <div className="mb-24">
            <ScrollAnimation className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                <FolderOpen className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Innovative solutions that showcase my technical expertise and creative problem-solving
              </p>
            </ScrollAnimation>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => (
                <div key={index} className={index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"}>
                  <PortfolioCard
                    type="project"
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    skills={project.skills}
                    githubLink={project.githubLink}
                    link={project.link}
                  />
                </div>
              ))}
            </div>

            {projects.length > 3 && (
              <div className="mt-8">
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    showAllProjects ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                    {projects.slice(3).map((project, index) => (
                      <div
                        key={index + 3}
                        className={`${(index + 3) % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"} transform transition-all duration-500`}
                        style={{
                          animationDelay: showAllProjects ? `${index * 100}ms` : "0ms",
                          transform: showAllProjects ? "translateY(0)" : "translateY(-20px)",
                        }}
                      >
                        <PortfolioCard
                          type="project"
                          title={project.title}
                          description={project.description}
                          image={project.image}
                          skills={project.skills}
                          githubLink={project.githubLink}
                          link={project.link}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="border-primary/20 text-primary hover:bg-primary/10 hover:text-primary bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 pointer-events-auto"
                  >
                    {showAllProjects ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show More Projects
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Professional Experience */}
      <section id="experience" className="relative z-10 py-4 px-6 bg-card/5">
        <div className="container mx-auto">
          <div className="mb-24">
            <ScrollAnimation className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
                <Briefcase className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Professional <span className="text-secondary">Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                A journey through impactful roles and meaningful contributions
              </p>
            </ScrollAnimation>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.slice(0, 3).map((experience, index) => (
                <div key={index} className={index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"}>
                  <PortfolioCard
                    type="experience"
                    title={experience.title}
                    description={experience.description}
                    image={experience.image}
                    company={experience.company}
                    role={experience.role}
                    period={experience.period}
                    link={experience.link}
                  />
                </div>
              ))}
            </div>

            {experiences.length > 3 && (
              <div className="mt-8">
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    showAllExperiences ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                    {experiences.slice(3).map((experience, index) => (
                      <div
                        key={index + 3}
                        className={`${(index + 3) % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"} transform transition-all duration-500`}
                        style={{
                          animationDelay: showAllExperiences ? `${index * 100}ms` : "0ms",
                          transform: showAllExperiences ? "translateY(0)" : "translateY(-20px)",
                        }}
                      >
                        <PortfolioCard
                          type="experience"
                          title={experience.title}
                          description={experience.description}
                          image={experience.image}
                          company={experience.company}
                          role={experience.role}
                          period={experience.period}
                          link={experience.link}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    className="border-secondary/20 text-secondary hover:bg-secondary/10 hover:text-secondary bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 pointer-events-auto"
                  >
                    {showAllExperiences ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show More Experience
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: Certifications */}
      <section id="certifications" className="relative z-10 py-4 px-6">
        <div className="container mx-auto">
          <div className="mb-24">
            <ScrollAnimation className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 border-2 border-white/30">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                <span className="text-white">Certific</span>
                <span className="text-primary">ations</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Continuous learning and professional development achievements
              </p>
            </ScrollAnimation>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.slice(0, 3).map((cert, index) => (
                <div key={index} className={index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"}>
                  <PortfolioCard
                    type="certification"
                    title={cert.title}
                    description={cert.description}
                    company={cert.company}
                    period={cert.period}
                    certificateLink={cert.certificateLink}
                  />
                </div>
              ))}
            </div>

            {certifications.length > 3 && (
              <div className="mt-8">
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    showAllCertifications ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                    {certifications.slice(3).map((cert, index) => (
                      <div
                        key={index + 3}
                        className={`${(index + 3) % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"} transform transition-all duration-500`}
                        style={{
                          animationDelay: showAllCertifications ? `${index * 100}ms` : "0ms",
                          transform: showAllCertifications ? "translateY(0)" : "translateY(-20px)",
                        }}
                      >
                        <PortfolioCard
                          type="certification"
                          title={cert.title}
                          description={cert.description}
                          company={cert.company}
                          period={cert.period}
                          certificateLink={cert.certificateLink}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllCertifications(!showAllCertifications)}
                    className="border-primary/20 text-primary hover:bg-primary/10 hover:text-primary bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 pointer-events-auto"
                  >
                    {showAllCertifications ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show More Certifications
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Contact */}
      <section id="contact" className="relative z-10 py-6 px-6 bg-card/5">
        <div className="container mx-auto max-w-2xl">
          <ScrollAnimation className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Ready to collaborate on your next project or discuss opportunities
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-border/50 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Tharun Gopinath. Crafted with passion and cosmic inspiration. K&#10084;</p>
        </div>
      </footer>
    </div>
  )
}
