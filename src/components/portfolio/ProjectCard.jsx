
import React from 'react';
import { motion } from 'framer-motion';
import BrutalCard from '@/components/portfolio/BrutalCard';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group mb-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <BrutalCard className="p-7 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
          {project.badge && (
            <span className="flex-shrink-0 text-xs font-mono uppercase tracking-wide text-cyan-400 border border-cyan-400/50 px-3 py-1 whitespace-nowrap">
              {project.badge}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono uppercase tracking-wide text-gray-400 mb-2">
          {project.venue && <span>{project.venue}</span>}
          {project.venue && project.role && <span className="text-gray-600">·</span>}
          {project.role && <span>{project.role}</span>}
        </div>
        {project.description && (
          <p className="text-sm text-gray-400 mb-2">{project.description}</p>
        )}
        <div className="flex-grow" />
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-cyan-400 hover:underline text-base font-medium mt-4"
          >
            {project.linkText || 'Read Paper'} →
          </a>
        )}
      </BrutalCard>
    </motion.div>
  );
};

export default ProjectCard;
