import React from 'react';
import { motion } from 'framer-motion';

// Utility function to calculate duration between dates
const calculateDuration = (startDate, endDate = null) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  const days = diffDays % 30;
  
  if (years > 0) {
    return `${years}y ${months}mo`;
  } else if (months > 0) {
    return `${months}mo`;
  } else {
    return `${days}d`;
  }
};

// Utility function to format date range
const formatDateRange = (startDate, endDate = null) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  
  const startFormatted = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const endFormatted = end ? end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
  const duration = calculateDuration(startDate, endDate);
  
  return `${startFormatted} - ${endFormatted} · ${duration}`;
};

const experience = {
  company: 'PIXTA Vietnam Co. Ltd.',
  logo: 'https://images.viblo.asia/6da4e017-d0f2-49d4-87fb-355435f557e2.png',
  roles: [
    {
      title: 'AI Engineer',
      type: 'Full-time',
      startDate: '2025-07-01', // July 2025
      endDate: null, // Present
      skills: 'Large Language Models (LLM), Prompt Engineering and +4 skills',
    },
    {
      title: 'AI Engineer',
      type: 'Internship',
      startDate: '2024-10-01', // October 2024
      // CHANGE THIS LINE BELOW
      endDate: '2025-07-01', // Set this to the Full-time start date
      skills: 'Python (Programming Language), PyTorch and +4 skills',
    },
  ],
};

const WorkExperience = () => {
  // Calculate total duration from the earliest start date
  const earliestStartDate = Math.min(...experience.roles.map(role => new Date(role.startDate)));
  const totalDuration = calculateDuration(earliestStartDate);

  return (
    <section id="experience" className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Experience</h2>
        <div className="bg-zinc-900/80 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-start border border-gray-700">
          <img src={experience.logo} alt="PIXTA Vietnam Co. Ltd." className="w-16 h-16 rounded-lg object-cover border border-gray-700 bg-white" />
          <div className="flex-1">
            <div className="text-xl font-semibold text-white mb-1">{experience.company}</div>
            <div className="text-sm text-gray-300 mb-4">{totalDuration}</div>
            <div className="border-l-2 border-gray-600 pl-6 space-y-8 relative">
              {experience.roles.map((role, idx) => (
                <div key={idx} className="relative pb-2">
                  <div className="absolute -left-7 top-1.5 w-3 h-3 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="text-lg font-bold text-white">{role.title}</div>
                  <div className="text-sm text-gray-300 mb-1">{role.type}</div>
                  <div className="text-xs text-gray-400 mb-1">{formatDateRange(role.startDate, role.endDate)}</div>
                  <div className="text-sm text-gray-200 flex items-center gap-2">
                    <span className="inline-block align-middle">💡</span>
                    {role.skills}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};


export default WorkExperience; 
