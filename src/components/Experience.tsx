"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const experiences = [
  {
    company: "Google",
    role: "Trainee - Upskilling Launchpad",
    location: "Remote",
    fromDate: "June 2025",
    toDate: "August 2025",
    color: "#fbbc04", // Google yellow
    points: [
      "Mastered Data Structures & Algorithms (DSA) with emphasis on real-world problem-solving under time constraints.",
      "Explored advanced Dynamic Programming and Competitive Programming techniques.",
      "Gained knowledge of scalable System Design concepts including LLM (Large Language Model) architectures."
    ]
  },
  {
    company: "MedTourEasy",
    role: "Data Analyst Intern",
    location: "Remote, Pune",
    fromDate: "April 2025",
    toDate: "July 2025",
    color: "#10b981", // Tailwind Emerald
    points: [
      "Built seamless, user-centric data solutions that enhanced user engagement.",
      "Delivered actionable insights to optimize data-driven decision-making processes."
    ]
  },
  {
    company: "Uptoskills",
    role: "MERN Stack Intern",
    location: "Remote, Pune",
    fromDate: "March 2025",
    toDate: "June 2025",
    color: "#6366f1", // Tailwind Indigo
    points: [
      "Developed an Online Assessment Portal using the MERN Stack.",
      "Optimized backend performance and scalability.",
      "Collaborated on AI/ML feature integration within the platform."
    ]
  },
];


const Experience = () => {
  return (
    <section className="py-20 lg:py-28" id="experience">
      <div className="container">
       <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-emerald-400 font-semibold">Career Path</p>
       <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
       <p className="text-white/70 mt-4">My journey through the tech industry, building amazing products and growing as a developer.</p>
       </div>

        <div className="mt-20">
          <div className="relative px-0">
            <VerticalTimeline layout="1-column" className="vertical-timeline-custom">
              {experiences.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#18181b",
                    color: "#fff",
                    border: `2px solid ${exp.color}40`,
                    borderRadius: "1.25rem",
                    padding: "1.5rem",
                    boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
                    // display: "block",
                  }}
                  contentArrowStyle={{
                    borderRight: `7px solid ${exp.color}40`,
                  }}
                  iconStyle={{
                    background: `linear-gradient(135deg, ${exp.color} 0%, ${exp.color}dd 100%)`,
                    color: "#fff",
                    boxShadow: `0 0 0 4px ${exp.color}20, 0 8px 17px rgba(0,0,0,.2)`,
                  }}
                  icon={<Briefcase />}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">{exp.company}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-lg font-semibold text-emerald-300">{exp.role}</h4>
                      <div className="flex items-center text-white/40 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                      Key Achievements
                    </h5>
                    {exp.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        ></div>
                        <p className="text-white/80 m-[0px]">{point}</p>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-white/60 font-semibold mt-6 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.fromDate} - {exp.toDate}</span>
                    </div>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
            <style jsx global>{`
              .vertical-timeline-custom .vertical-timeline::before {
                background: linear-gradient(to bottom, #4facfe, #667eea, #f093fb) !important;
                width: 4px !important;
                left: 28px !important;
                top: 0 !important;
                z-index: 10 !important;
                opacity: 1 !important;
                box-shadow: 0 0 8px 2px #4facfe99;
              }
              .vertical-timeline-custom .vertical-timeline {
                overflow: visible !important;
              }
              .vertical-timeline-element-date {
                color: #fff !important;
                font-weight: 600 !important;
              }
              .vertical-timeline-element-content {
                background: #18181b !important;
                color: #fff !important;
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
              }
              .vertical-timeline-element-content.is-hidden {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
              }
              .vertical-timeline-element-content p {
                margin: 0 !important;
              }
              .vertical-timeline-element--work .vertical-timeline-element-icon {
                box-shadow: 0 0 0 4px #4facfe20, 0 8px 17px rgba(0, 0, 0, 0.2) !important;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;