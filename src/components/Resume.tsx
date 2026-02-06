import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ripanshu%20Rana%20Mern%20Stack%20Developer.pdf';
    link.download = 'Ripanshu Rana Mern Stack Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-hero rounded-2xl p-12 text-center shadow-large relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-accent-foreground/10 rounded-full blur-3xl"
            />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative z-10"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
                <FileText className="w-10 h-10 text-accent" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Download My Resume
              </h2>

              <p className="text-lg text-foreground/90 mb-8 max-w-2xl mx-auto">
                Get a comprehensive overview of my education, experience, skills, and achievements.
                Available in PDF format for easy viewing and printing.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-large hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-sm text-foreground/70"
              >
                Last updated: {new Date().getFullYear()}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
