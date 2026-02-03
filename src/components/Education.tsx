import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Himachal Pradesh University (HPU)",
      year: "2021 - 2024",
      description: "Graduated with CGPA: 7.25. Specialized in frontend development with focus on modern web technologies including React.js, JavaScript, and responsive design principles.",
    },
    {
      degree: "MERN Stack Training",
      institution: "Meander Software Pvt Ltd",
      year: "February 2025 - June 2025",
      description: "Intensive training in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Built real-world projects and learned best practices for backend and frontend integration.",
    },
    {
      degree: "MERN Stack Developer",
      institution: "Meander Software Pvt Ltd",
      year: "July 2025 - Present",
      description: "Working as a Full Stack Developer specializing in the MERN stack. Developing and maintaining web applications, collaborating with cross-functional teams, and ensuring high performance and responsiveness of applications.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-soft">
                <GraduationCap className="w-4 h-4 text-primary-foreground" />
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{item.year}</span>
                </div>
                <p className="text-primary font-medium mb-2">{item.institution}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
