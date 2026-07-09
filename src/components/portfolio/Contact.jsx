
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/portfolio/SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionHeading index="06" title="Get In Touch" center />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always looking for new opportunities to collaborate and grow. If you have something in mind, I'd love to hear from you.
        </p>
        <Button asChild size="lg" className="bg-primary text-background border-2 border-black hover:bg-primary/90 text-lg px-8 py-6 btn-hard font-mono">
          <a href="mailto:buisonanh.work@gmail.com">buisonanh.work@gmail.com</a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Contact;
