
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import WorkExperience from '@/components/portfolio/WorkExperience';
import News from '@/components/portfolio/News';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Bui Son Anh - AI Engineer</title>
        <meta name="description" content="Portfolio of Bui Son Anh, a passionate AI Engineer." />
      </Helmet>
      <div className="bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <WorkExperience />
          <Projects />
          <News />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
