
import React from 'react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/son-anh-bui/' },
    { name: 'GitHub', href: 'https://github.com/buisonanh' },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Bui Son Anh. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
