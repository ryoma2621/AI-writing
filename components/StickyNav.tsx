import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STEPS } from '../constants';

export const StickyNav: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset
      
      // Simple logic to detect which section we are in
      // Assuming sections have IDs like "step-1", "step-2"
      for (let i = STEPS.length; i >= 1; i--) {
        const element = document.getElementById(`step-${i}`);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveStep(i);
          break;
        }
      }

      // Show nav only after scrolling past hero
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-4 px-6"
        >
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-400 tracking-wider">PROGRESS</span>
              <span className="text-xs font-medium text-indigo-700">STEP {activeStep} / 4</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-indigo-600"
                initial={{ width: "25%" }}
                animate={{ width: `${(activeStep / 4) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-2 text-center">
                <span className="text-sm font-medium text-slate-800">
                    {STEPS[activeStep - 1].title}
                </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};