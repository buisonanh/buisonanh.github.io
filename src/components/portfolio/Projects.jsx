
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SectionHeading from '@/components/portfolio/SectionHeading';

const researchPapers = [
  {
    title: 'LJPA: Landmark-Guided Jigsaw Puzzle Autoencoders for Facial Expression Recognition',
    role: 'First Author',
    venue: 'CSoNet 2025',
    badge: 'Accepted',
    description: '+5.4–6.0% accuracy over ResNet18 on AffectNet, RAF-DB, and FER-Plus.',
  },
  {
    title: 'An Enhanced Deep Learning Model for Image Classification and Facial Expression Recognition Using Self-Distillation',
    role: 'Co-author',
    venue: 'ACOMPA 2024',
    badge: 'Highest Prize',
    description: 'SOTA on FER2013, FERPlus, and CIFAR100.',
    link: 'https://ieeexplore.ieee.org/abstract/document/10818346',
    linkText: 'Read Paper'
  },
  {
    title: 'A Unified Framework for Depth-Assisted Monocular Object Pose Estimation',
    role: 'Research Assistant',
    venue: 'IEEE Access',
    link: 'https://ieeexplore.ieee.org/document/10634508',
    linkText: 'Read Paper'
  },
  {
    title: 'Unsupervised Visual-to-Geometric Feature Reconstruction for Vision-Based Industrial Anomaly Detection',
    role: 'Research Assistant',
    venue: 'IEEE Access',
    link: 'https://ieeexplore.ieee.org/document/10820339',
    linkText: 'Read Paper'
  },
  {
    title: 'Efficient Multimodal Fusion For Hand Pose Estimation With Hourglass Network',
    role: 'Research Assistant',
    venue: 'IEEE Access',
    link: 'https://ieeexplore.ieee.org/document/10637398',
    linkText: 'Read Paper'
  }
];

const Projects = () => {
  return (
    <section id="research" className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading index="03" title="Research" />
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {researchPapers.map((paper, index) => (
          <div key={index} className={index === 0 ? 'md:col-span-2' : ''}>
            <ProjectCard project={paper} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
