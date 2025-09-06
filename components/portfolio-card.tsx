import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

interface PortfolioCardProps {
  title: string
  description: string
  image?: string
  skills?: string[]
  link?: string
  githubLink?: string
  company?: string
  role?: string
  period?: string
  certificateLink?: string
  type: "project" | "experience" | "certification"
}

export function PortfolioCard({
  title,
  description,
  image,
  skills,
  link,
  githubLink,
  company,
  role,
  period,
  certificateLink,
  type,
}: PortfolioCardProps) {
  return (
    <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <CardHeader className="relative z-10">
        <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        {company && <CardDescription className="text-muted-foreground">{company}</CardDescription>}
        {role && <CardDescription className="text-secondary font-medium">{role}</CardDescription>}
        {period && <CardDescription className="text-muted-foreground text-sm">{period}</CardDescription>}
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-muted-foreground mb-4 text-balance">{description}</p>

        {skills && (
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-secondary/20 text-secondary-foreground border-secondary/30"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          {githubLink && (
            <Button
              size="sm"
              variant="outline"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          )}

          {link && (
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {type === "project" ? "View Project" : "More Details"}
              </a>
            </Button>
          )}

          {certificateLink && (
            <Button size="sm" className="bg-secondary hover:bg-secondary/90" asChild>
              <a href={certificateLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Download Certificate
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
