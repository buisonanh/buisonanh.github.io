import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/portfolio/SectionHeading';
import BrutalCard from '@/components/portfolio/BrutalCard';

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
      type: 'Full-time · AI Research',
      startDate: '2025-06-01', // June 2025
      endDate: null, // Present
      highlights: [
        "Lead engineer on PIXTA's production RAG chatbot — Milvus + LLM, MVP through v0.7.",
        'Raised bot coverage 29% → 51% via multi-query retrieval (RRF) and a Claude Sonnet migration.',
        'Cut latency 12s → 5–6s by re-architecting into an on-demand retrieval agent.',
        'Built a Langfuse + LLM-as-judge evaluation stack as an automated release gate.',
        'Shipped a photographer-matching PoC for fotowa in under 4 weeks.',
      ],
      tags: ['RAG', 'Agents', 'Milvus', 'Langfuse', 'Claude API'],
    },
    {
      title: 'AI Engineer',
      type: 'Internship',
      startDate: '2024-10-01', // October 2024
      endDate: '2025-06-01', // Full-time start date
      highlights: [
        'Optimized Vision-Language Models and vector search for retrieval accuracy.',
        'Ran benchmarking and indexing optimization; improved system docs.',
      ],
      tags: ['VLMs', 'Vector Search', 'PyTorch'],
    },
  ],
};

const WorkExperience = () => {
  // Calculate total duration from the earliest start date
  const earliestStartDate = Math.min(...experience.roles.map(role => new Date(role.startDate)));
  const totalDuration = calculateDuration(earliestStartDate);

  return (
    <section id="experience" className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading index="02" title="Experience" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <BrutalCard className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
          <img src={experience.logo} alt="PIXTA Vietnam Co. Ltd. logo" className="w-16 h-16 object-cover border-2 border-foreground/60 bg-white" />
          <div className="flex-1 min-w-0">
            <div className="text-xl font-bold text-white mb-1">{experience.company}</div>
            <div className="text-sm font-mono text-gray-400 mb-6">{totalDuration}</div>
            <div className="border-l-2 border-white/20 pl-6 space-y-10 relative">
              {experience.roles.map((role, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[1.65rem] top-1.5 w-3 h-3 bg-foreground border-2 border-black"></div>
                  <div className="text-lg font-bold text-white">{role.title}</div>
                  <div className="text-sm font-mono uppercase tracking-wide text-gray-400 mb-1">{role.type}</div>
                  <div className="text-xs font-mono text-gray-500 mb-3">{formatDateRange(role.startDate, role.endDate)}</div>
                  <ul className="space-y-2.5 mb-4">
                    {role.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-foreground mt-1.5 flex-shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono uppercase tracking-wide text-gray-300 border border-white/30 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BrutalCard>
      </motion.div>
    </section>
  );
};


export default WorkExperience; 
