"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import {
  Mail,
  MapPin,
  GraduationCap,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Phone,
  Calendar,
  BookOpen,
  Code,
  Database,
  Globe,
  Cpu,
  Briefcase,
  X,
  Palette,
  Monitor,
  Menu,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMobileMenuOpen(false) // Close mobile menu when clicking a link
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "experience", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const certificates = [
    {
      title: "Internet of Things: Multimedia Technologies",
      institution: "UC San Diego",
      date: "Feb 10, 2025",
      image: "/certificates/uc-san-diego.jpeg",
      description: "Comprehensive course on IoT multimedia technologies and applications",
    },
    {
      title: "Copyright for Multimedia",
      institution: "Duke University, Emory University, UNC",
      date: "Feb 9, 2025",
      image: "/certificates/duke-emory-unc.jpeg",
      description: "Understanding copyright laws in multimedia content creation",
    },
    {
      title: "Technology Strategy: Creative Destruction",
      institution: "University of Illinois",
      date: "Feb 10, 2025",
      image: "/certificates/university-illinois.jpeg",
      description: "Strategic approaches to technology innovation and disruption",
    },
    {
      title: "Internet History, Technology, and Security",
      institution: "University of Michigan",
      date: "Feb 11, 2025",
      image: "/certificates/university-michigan.jpeg",
      description: "Comprehensive overview of internet development and security",
    },
    {
      title: "Digital Systems: From Logic Gates to Processors",
      institution: "Universitat Autònoma de Barcelona",
      date: "Jan 22, 2025",
      image: "/certificates/uab-barcelona.jpeg",
      description: "Fundamental concepts in digital system design and architecture",
    },
  ]

  const skills = [
    { name: "Computer Engineering", level: 90, icon: Cpu },
    { name: "Digital Systems", level: 85, icon: Code },
    { name: "Internet Technologies", level: 88, icon: Globe },
    { name: "Database Systems", level: 82, icon: Database },
    { name: "Multimedia Technology", level: 80, icon: BookOpen },
    { name: "Web Development", level: 92, icon: Monitor },
    { name: "UI/UX Design", level: 87, icon: Palette },
  ]

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/placeholder.svg"; // Fallback image
  }

  return (
    <div className="min-h-screen bg-background">
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl max-h-[70vh] w-full flex flex-col">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white hover:text-gray-200 transition-all duration-200 backdrop-blur-sm border border-white/20 z-10"
              aria-label="Close certificate view"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCertificate || "/placeholder.svg"}
                alt="Certificate"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-card/95 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col h-full pt-20 px-6">
            <div className="flex flex-col gap-6 py-8">
              {["about", "education", "experience", "certificates", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === section 
                      ? "bg-primary text-primary-foreground" 
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
            <div className="mt-auto pb-8 flex justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-xs"
              >
                Close Menu
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-heading text-xl font-bold text-primary">Ikhsal Gegana Nusantara</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {["about", "education", "experience", "certificates", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${
                    activeSection === section ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                  aria-label={`Go to ${section} section`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit animate-pulse">
                  <GraduationCap className="w-3 h-3 mr-1" />
                  Computer Engineering Graduate
                </Badge>
                <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground">
                  Ikhsal Gegana
                  <span className="text-primary block">Nusantara</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fresh graduate in Computer Engineering from Universitas Andalas with a strong passion for technology, web development, and system management. During my internship at PT Telkom Indonesia Regional 1 (Persero) Tbk, I successfully developed a web-based attendance system specifically designed for interns. I handled the project end-to-end—from front-end and back-end development to database design—building everything from scratch.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This project significantly improved the attendance process during the company's hybrid work policy, allowing interns to check in remotely without needing to visit the office first. The system achieved a 99.9% success rate and was well-received within the organization.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a highly motivated individual with strong teamwork, communication, and analytical skills. I'm always eager to learn new technologies and take on new challenges, especially in the areas of web systems, IT infrastructure, and digital transformation.
                </p>
                <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg border-l-4 border-primary">
                  📋 <strong>For Recruiters:</strong> Complete project documentation and portfolio details are available
                  on my LinkedIn profile.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                  onClick={() => (window.location.href = "mailto:ikhsalg@gmail.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-all duration-200 bg-transparent"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View CV
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  South Jakarta, Indonesia
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Universitas Andalas
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl animate-pulse"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/graduation-3.jpeg"
                  alt="Ikhsal Gegana Nusantara"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] hover:scale-105 transition-transform duration-300"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="education" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Education & Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated graduate in computer technology with a focus on digital systems development and multimedia
              technology.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Computer Engineering</h4>
                      <p className="text-muted-foreground">Universitas Andalas</p>
                      <p className="text-sm text-muted-foreground">Aug 2019 - Jan 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Web Developer & Designer Intern</h4>
                      <p className="text-muted-foreground">PT Telkom Indonesia Regional 1 (Persero) Tbk</p>
                      <p className="text-sm text-muted-foreground">Jan 2022 - Jan 2022</p>
                      <p className="text-sm text-muted-foreground mt-2">Business Planning & Performance Division</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <skill.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 hover:bg-primary/80"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/graduation-1.jpeg"
                alt="Graduation Photo 1"
                width={300}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                onError={handleImageError}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/graduation-2.jpeg"
                alt="Graduation Photo 2"
                width={300}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-64 mt-8 hover:scale-105 transition-transform duration-300"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience in the telecommunications industry with focus on web development, design, and business
              planning.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/certificates/telkom-internship.jpeg"
                    alt="Telkom Indonesia Internship Certificate"
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary animate-pulse">
                    <Briefcase className="w-3 h-3 mr-1" />
                    Internship
                  </Badge>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    PT Telkom Indonesia Regional 1 (Persero) Tbk
                  </h3>
                  <p className="text-primary font-semibold mb-2">Web Developer & Designer</p>
                  <p className="text-sm text-muted-foreground mb-4">January 2022 - January 2022</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Successfully developed a web-based attendance system specifically designed for interns. Handled the project end-to-end—from front-end and back-end development to database design—building everything from scratch. This project significantly improved the attendance process during the company's hybrid work policy, allowing interns to check in remotely without needing to visit the office first. The system achieved a 99.9% success rate and was well-received within the organization.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Certificates & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collection of certificates from world-renowned universities demonstrating commitment to continuous
              learning and academic excellence. Click on any certificate to view it in full size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer hover:scale-105"
                onClick={() => setSelectedCertificate(cert.image)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedCertificate(cert.image)
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-primary">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </Badge>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="bg-white/90 rounded-full p-3 animate-bounce">
                      <ExternalLink className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">{cert.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussions about technology, collaborative projects, or career opportunities. Feel free to reach out!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">ikhsalg@gmail.com</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary hover:text-primary/80"
                      onClick={() => (window.location.href = "mailto:ikhsalg@gmail.com")}
                    >
                      Send a message
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+62 857-8265-2925</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary hover:text-primary/80"
                      onClick={() => (window.location.href = "tel:+6285782652925")}
                    >
                      Call me
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">South Jakarta, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:scale-105 transition-all duration-200 bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/ikhsaln", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:scale-105 transition-all duration-200 bg-transparent"
                    onClick={() => window.open("https://github.com/Ikhsaln", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Ikhsal Gegana Nusantara. Copyright protected by{" "}
            <span className="font-medium text-primary">Abing</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
