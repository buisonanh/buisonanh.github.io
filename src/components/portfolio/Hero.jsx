
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
          AI Engineer
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12">
          Hi, I'm Son Anh, an AI Engineer with a passion for building scalable and efficient AI solutions.
        </p>
      </motion.div>
      <motion.a
        href="#work"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ y: -5 }}
      >
        <ArrowDown className="w-8 h-8 animate-bounce text-muted-foreground hover:text-foreground" />
      </motion.a>
    </section>
  );
};

export default Hero;
