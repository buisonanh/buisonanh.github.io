
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const showToast = () => {
    toast({
      title: "🚧 Let's Talk!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3 text-2xl font-bold tracking-tighter">
            <img src="/imgs/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
            <span>Bui Son Anh</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="mailto:buisonanh.work@gmail.com">
              <Button as="span" variant="outline" className="border-primary/50 hover:bg-primary hover:text-background">
                Let's Talk
              </Button>
            </a>
          </div>
          <div className="md:hidden">
            <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} variant="ghost" size="icon">
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.header>
      
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-40 bg-background pt-20 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-3xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full justify-center">
              <a href="mailto:buisonanh.work@gmail.com" className="w-full flex justify-center">
                <Button as="span" variant="outline" size="lg" className="border-primary/50 hover:bg-primary hover:text-background text-2xl w-full">
                  Let's Talk
                </Button>
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
