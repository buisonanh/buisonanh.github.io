
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Prompt Engineering',
    'Retrieval-Augmented Generation (RAG)',
    'Deep Learning',
    'Computer Vision',
    'PyTorch',
    'Vector Databases',
    'Large Language Models (LLM)',
    'HuggingFace',
    'Python (Programming Language)',
    'Teamwork',
    'FastAPI'
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">
            With expertise in Deep Learning, Computer Vision and Natural Language Processing, I leverage advanced technologies to tackle complex challenges and deliver transformative innovation across various industries.
          </p>
          <p className="text-lg text-muted-foreground">
            When I'm not coding, you can find me exploring new technologies, or enjoy cooking.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">My Skillset</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="bg-background px-4 py-2 rounded-full text-muted-foreground border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
