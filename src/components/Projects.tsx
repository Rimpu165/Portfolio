import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website (React.js)",
      description: "Responsive, mobile-first e-commerce site with dynamic product display. Integrated product API with reusable components for product grid, shopping cart, filters, and login page.",
      image: project1,
      tags: ["React.js", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/rimpu165",
      demo: "https://hellstorm.vercel.app/",
    },
    {
      title: "Restaurant Website (React.js)",
      description: "Modern restaurant website with interactive menu, dynamic product listings, and real-time filtering. Optimized for mobile and desktop views with smooth navigation.",
      image: project2,
      tags: ["React.js", "Bootstrap", "JavaScript"],
      github: "https://github.com/rimpu165",
      demo: "https://drive.google.com/file/d/1ylZN1JPV19orWtWnYeHfJ1pOGcGEHrWG/view?usp=sharing",
    },
    {
      title: "E-Commerce Website (Vanilla JS)",
      description: "Static e-commerce website with user-friendly interface and interactive product selection. Fully responsive using media queries, optimized for all devices.",
      image: project3,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/rimpu165",
      demo: "https://rimpu165.github.io/ecommerce.github.io/index.html",
    },
    {
      title: "Frontend Development Training",
      description: "Completed comprehensive training at Meander Software Pvt Ltd, working on responsive web pages and converting UI/UX designs into functional interfaces.",
      image: project4,
      tags: ["React.js", "Tailwind", "HTML/CSS"],
      github: "https://github.com/rimpu165",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/50 rounded-xl overflow-hidden shadow-soft hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="shadow-soft"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="shadow-soft"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
