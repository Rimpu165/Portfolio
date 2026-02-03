import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "MERN Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "HTML & CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "VS Code & DevTools",
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/50 group text-center flex items-center justify-center min-h-[100px]"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and expanding my skill set with the latest technologies
            and best practices in software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
