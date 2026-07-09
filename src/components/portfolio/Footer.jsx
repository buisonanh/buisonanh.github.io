
import React from 'react';

const Footer = () => {
  const links = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/son-anh-bui/' },
    { name: 'GitHub', href: 'https://github.com/buisonanh' },
  ];

  return (
    <footer className="border-t-2 border-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm font-mono mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Bui Son Anh. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-wide text-muted-foreground hover:text-cyan-400 transition-colors"
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
