
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const showToast = () => {
    toast({
      title: "🚧 View Project",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl mb-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="rounded-2xl border border-gray-700 bg-gradient-to-br from-black via-zinc-900 to-gray-900 backdrop-blur-md p-7 shadow-xl shadow-black/30 transition-all duration-300 group-hover:shadow-2xl group-hover:border-gray-400 group-hover:ring-2 group-hover:ring-gray-400/40 group-hover:scale-[1.025] flex flex-col h-full"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-1 text-white drop-shadow-lg">{project.title}</h3>
        {project.role && (
          <div className="italic text-sm text-gray-300 mb-2">Role: {project.role}</div>
        )}
        <div className="flex-grow" />
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:underline text-base font-medium mt-4"
          >
            {project.linkText || 'Read Paper'}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
