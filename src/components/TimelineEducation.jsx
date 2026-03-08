"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaShieldAlt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { diplomesData, certificationsData } from "../constants/data";
import { useLanguage } from "../context/LanguageContext";

const TimelineEducation = () => {
  const { language, t } = useLanguage();

  // Combine and alternate data
  const combinedData = [];
  const maxLen = Math.max(diplomesData.length, certificationsData.length);
  
  for (let i = 0; i < maxLen; i++) {
    if (diplomesData[i]) combinedData.push({ ...diplomesData[i], type: "education" });
    if (certificationsData[i]) combinedData.push({ ...certificationsData[i], type: "certification" });
  }

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white dark:bg-[#0a0812] transition-colors duration-500 font-display">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            {t('education.title')}
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {t('education.subtitle')}
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-400 opacity-20 hidden md:block"></div>

          <div className="space-y-12 md:space-y-4">
            {combinedData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEducation = item.type === "education";

              return (
                <div key={`${item.type}-${item.id}`} className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                    
                    {/* Left Side Content */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className={`hidden md:block ${isEven ? "text-right" : "pointer-events-none opacity-0"}`}
                    >
                      {isEven && (
                        <Card item={item} isEven={isEven} language={language} t={t} />
                      )}
                    </motion.div>

                    {/* Timeline Node */}
                    <div className="relative flex justify-center z-20">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className={`size-6 rounded-full border-4 border-white dark:border-[#0a0812] flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] ${isEducation ? "bg-orange-500 shadow-orange-500/50" : "bg-orange-500 shadow-orange-500/50"}`}
                      >
                         <div className={`size-2 rounded-full bg-white animate-pulse`}></div>
                      </motion.div>
                    </div>

                    {/* Right Side Content */}
                    <motion.div 
                      initial={{ opacity: 0, x: !isEven ? 50 : 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className={`${!isEven ? "" : "md:pointer-events-none md:opacity-0"}`}
                    >
                      <div className="md:block block">
                         <div className={`${isEven ? "md:hidden" : ""}`}>
                            <Card item={item} isEven={false} language={language} t={t} />
                         </div>
                         <div className="hidden md:block">
                            {!isEven && <Card item={item} isEven={false} language={language} t={t} />}
                         </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ item, isEven, language, t }) => {
  const isEducation = item.type === "education";
  
  const title = isEducation ? item.title[language] : item.title;
  const grade = isEducation ? item.grade[language] : (item.level || t('education.certifications'));
  const description = isEducation ? item.description[language] : "";
  const projects = isEducation ? (item.projects[language] || []) : [];

  return (
    <div className={`glass-card p-8 rounded-[2rem] border transition-all duration-300 hover:scale-[1.02] bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl group ${
      isEducation 
      ? "border-orange-500/20 hover:border-orange-500/40" 
      : "border-orange-500/20 hover:border-orange-500/40"
    }`}>
      <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
        <div className={`size-10 rounded-xl flex items-center justify-center ${isEducation ? "bg-orange-500/10 text-orange-400" : "bg-orange-500/10 text-orange-400"}`}>
          {isEducation ? <FaGraduationCap className="text-xl" /> : <FaShieldAlt className="text-xl" />}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isEducation ? "text-orange-400" : "text-orange-400"}`}>
          {grade}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
        {title}
      </h3>
      
      <p className={`text-orange-500 dark:text-orange-400 font-semibold mb-4 text-sm ${isEven ? "md:text-right" : ""}`}>
        {isEducation ? item.institution : item.issuer}
      </p>

      <div className={`flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6 ${isEven ? "md:justify-end" : ""}`}>
        <div className="flex items-center gap-1.5">
          <FaCalendarAlt className="opacity-50" />
          {isEducation ? item.period : item.date}
        </div>
        {item.location && (
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="opacity-50" />
            {item.location}
          </div>
        )}
      </div>

      <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
        {(item.skills || []).map((skill, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 rounded-full text-[10px] font-bold border border-slate-200 dark:border-slate-700 uppercase tracking-wider"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimelineEducation;
