
import React from 'react';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import WorkExperience from '@/components/portfolio/WorkExperience';
import News from '@/components/portfolio/News';
import { Toaster } from '@/components/ui/toaster';

const DESCRIPTION = 'Bui Son Anh is an AI Engineer specializing in production LLM systems — RAG pipelines, agentic workflows, and LLM evaluation. Lead AI engineer on a customer-support RAG chatbot in production at PIXTA Vietnam.';

function App() {
  return (
    <>
      <Helmet>
        <title>Bui Son Anh - AI Engineer</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bui Son Anh - AI Engineer" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="/imgs/logo.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <WorkExperience />
          <Projects />
          <Education />
          <News />
          <Contact />
        </main>
        <Footer />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}

export default App;
