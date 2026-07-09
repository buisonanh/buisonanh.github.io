
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 border-2 border-foreground px-4 py-1.5 text-sm font-mono uppercase tracking-wide text-muted-foreground mb-6"
        >
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Ha Noi · AI Research @ PIXTA</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight mb-4">
            Bui Son Anh
          </h1>
          <p className="font-mono text-lg md:text-2xl uppercase tracking-widest text-muted-foreground mb-8">
            AI Engineer
            <span
              className="inline-block w-[3px] md:w-[4px] h-[0.8em] bg-foreground ml-2 align-middle animate-blink motion-reduce:hidden"
              aria-hidden="true"
            />
          </p>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            I build production LLM systems — RAG, agentic workflows, and the evals that keep them honest.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
        >
          <Button asChild size="lg" className="bg-primary text-background border-2 border-black hover:bg-primary/90 px-8 btn-hard">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
              Get in touch
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-foreground hover:bg-foreground hover:text-background px-8 btn-hard"
          >
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See my work
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ y: -5 }}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-8 h-8 animate-bounce text-muted-foreground hover:text-foreground" />
      </motion.a>
    </section>
  );
};

export default Hero;
