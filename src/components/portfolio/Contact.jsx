
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const showToast = () => {
    toast({
      title: "🚧 Get In Touch",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always looking for new opportunities to collaborate and grow. If you have something in mind, I'd love to hear from you.
        </p>
        <Button as="a" href="mailto:buisonanh.work@gmail.com" size="lg" className="bg-primary text-background hover:bg-primary/90 text-lg px-8 py-6 rounded-full">
          buisonanh.work@gmail.com
        </Button>
      </motion.div>
    </section>
  );
};

export default Contact;
