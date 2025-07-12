
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const researchPapers = [
  {
    title: 'An Enhanced Deep Learning Model for Image Classification and Facial Expression Recognition Using Self-Distillation',
    role: 'Co-author',
    link: 'https://ieeexplore.ieee.org/abstract/document/10818346',
    linkText: 'Read Paper'
  },
  {
    title: 'A Unified Framework for Depth-Assisted Monocular Object Pose Estimation',
    role: 'Research Assistant',
    link: 'https://ieeexplore.ieee.org/document/10634508',
    linkText: 'Read Paper'
  },
  {
    title: 'Unsupervised Visual-to-Geometric Feature Reconstruction for Vision-Based Industrial Anomaly Detection',
    role: 'Research Assistant',
    link: 'https://ieeexplore.ieee.org/document/10820339',
    linkText: 'Read Paper'
  },
  {
    title: 'Efficient Multimodal Fusion For Hand Pose Estimation With Hourglass Network',
    role: 'Research Assistant',
    link: 'https://ieeexplore.ieee.org/document/10637398',
    linkText: 'Read Paper'
  }
];

const Projects = () => {
  return (
    <section id="research" className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Research</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">A selection of my research papers and contributions in deep learning, computer vision, and related fields.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {researchPapers.map((paper, index) => (
          <ProjectCard key={index} project={paper} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
