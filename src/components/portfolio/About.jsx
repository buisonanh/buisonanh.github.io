
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/portfolio/SectionHeading';

const skillGroups = [
  {
    category: 'LLM & Agents',
    skills: ['RAG', 'LLM Evaluation', 'Agno', 'LangGraph', 'LangChain', 'AutoGen', 'MCP', 'mem0', 'Prompt Engineering', 'Claude API', 'Gemini'],
  },
  {
    category: 'Retrieval & Data',
    skills: ['Milvus', 'FAISS', 'Vector Search', 'Learning-to-Rank', 'Redis', 'SQL', 'BigQuery'],
  },
  {
    category: 'Vision & ML',
    skills: ['PyTorch', 'Hugging Face Transformers', 'VLMs', 'CLIP', 'YOLO', 'PaddleOCR'],
  },
  {
    category: 'MLOps & Infra',
    skills: ['Docker', 'FastAPI', 'Vertex AI', 'AWS', 'Langfuse', 'CI/CD'],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="01" title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground">
            AI Engineer specializing in production LLM systems — RAG, agentic workflows, and evaluation. Lead engineer on PIXTA's customer-support RAG chatbot, with a research background in computer vision and deep learning.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Outside of work: new AI tooling, research papers, and cooking.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold mb-2">My Skillset</h3>
          {skillGroups.map((group, groupIndex) => (
            <div key={group.category}>
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground/80 mb-3">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-background px-3 py-1 text-xs font-mono uppercase tracking-wide text-muted-foreground border border-foreground/40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: groupIndex * 0.1 + index * 0.03 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
