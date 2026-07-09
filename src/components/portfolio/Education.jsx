
import React from 'react';
import { GraduationCap, Trophy, Users } from 'lucide-react';
import SectionHeading from '@/components/portfolio/SectionHeading';
import BrutalCard from '@/components/portfolio/BrutalCard';

const education = {
  degree: 'B.Sc. in Computing — First Class Honours',
  school: 'FPT Greenwich University',
  dateRange: 'Aug 2022 – Mar 2026',
  courses: [
    'AIO2024 (AI Viet Nam)',
    'Machine Learning Specialization (Coursera)',
    'Grounding LLMs for Reliable Apps (GDG 2025)',
  ],
};

const awards = [
  'Champion, IT Division — FPT Research Festival 2024',
  'Semi-finalist — FPT Edu Hackathon 2024',
  '30% Scholarship & Top 3 Students, Spring 2023 — Greenwich Vietnam',
  '2nd Place, Junior Group — Greenwich Coding Challenge 2023',
];

const activities = [
  'Judge, SVNCKH 2025–2026 Student Scientific Research Conference (HUST)',
  "Host of the AI Research team's internal seminar series (PIXTA)",
];

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading index="04" title="Education & Recognition" />
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <BrutalCard className="p-7 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="border-2 border-cyan-400/50 p-1.5 flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-cyan-400" aria-hidden="true" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Education</h3>
          </div>
          <div className="text-lg font-semibold text-white mb-1">{education.degree}</div>
          <div className="text-sm text-gray-400 mb-1">{education.school}</div>
          <div className="text-xs font-mono text-gray-500 mb-4">{education.dateRange}</div>
          <div className="text-sm font-mono font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Additional Courses
          </div>
          <ul className="space-y-1.5">
            {education.courses.map((course) => (
              <li key={course} className="text-sm text-gray-300">
                {course}
              </li>
            ))}
          </ul>
        </BrutalCard>

        <BrutalCard className="p-7 h-full flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="border-2 border-cyan-400/50 p-1.5 flex-shrink-0">
                <Trophy className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Awards</h3>
            </div>
            <ul className="space-y-2">
              {awards.map((award) => (
                <li key={award} className="text-sm text-gray-300">
                  {award}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="border-2 border-cyan-400/50 p-1.5 flex-shrink-0">
                <Users className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Activities &amp; Service</h3>
            </div>
            <ul className="space-y-2">
              {activities.map((activity) => (
                <li key={activity} className="text-sm text-gray-300">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </BrutalCard>
      </div>
    </section>
  );
};

export default Education;
