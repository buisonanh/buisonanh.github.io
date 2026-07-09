
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
    { name: 'Education', href: '#education' },
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

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-background border-b-2 border-foreground' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-2 text-lg font-bold tracking-tighter">
            <img src="/imgs/logo.png" alt="Logo" className="h-7 w-auto object-contain" />
            <span>Bui Son Anh</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-mono text-sm uppercase tracking-wide text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild variant="outline" className="border-2 border-foreground hover:bg-foreground hover:text-background btn-hard">
              <a href="mailto:buisonanh.work@gmail.com">Let's Talk</a>
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
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
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full space-y-6 overflow-y-auto py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-mono text-2xl uppercase tracking-wide text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col w-full gap-3 pt-4">
              <Button asChild variant="outline" size="lg" className="border-2 border-foreground hover:bg-foreground hover:text-background text-xl w-full btn-hard">
                <a href="mailto:buisonanh.work@gmail.com" onClick={() => setMobileMenuOpen(false)}>
                  Let's Talk
                </a>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
