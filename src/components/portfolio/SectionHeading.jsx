
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ index, title, subtitle, center = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${center ? 'flex flex-col items-center' : ''}`}
  >
    <div className={`flex items-baseline gap-4 md:gap-6 ${center ? 'justify-center' : ''}`}>
      <span className="text-4xl md:text-6xl font-extrabold font-mono leading-none text-cyan-400" aria-hidden="true">
        {index}
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">{title}</h2>
    </div>
    <div className={`h-1.5 bg-foreground mt-4 md:mt-6 ${center ? 'w-20' : 'w-full max-w-xs'}`} />
    {subtitle && (
      <p className={`text-lg text-muted-foreground mt-4 max-w-2xl ${center ? 'text-center' : ''}`}>{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
