import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface StepCardProps {
  step: {
    id: number;
    title: string;
    description: string;
    duration: string;
    icon: LucideIcon;
    actionLabel: string | null;
    isPrimary: boolean;
  };
  link?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ step, link }) => {
  const isCompleted = false; // Could be dynamic if we had state
  const Icon = step.icon;

  return (
    <motion.div 
      id={`step-${step.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
        step.isPrimary 
          ? "bg-white border-indigo-100 shadow-xl shadow-indigo-100/50 z-10" 
          : "bg-white border-slate-100 shadow-sm"
      }`}
    >
      {/* Step Number Badge */}
      <div className="absolute top-6 right-6">
        <span className={`text-4xl font-bold tracking-tighter ${step.isPrimary ? "text-indigo-100" : "text-slate-100"}`}>
          0{step.id}
        </span>
      </div>

      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 ${
          step.isPrimary ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
        }`}>
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                STEP {step.id}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold">
                {step.duration}
            </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {step.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {step.description}
        </p>

        {step.actionLabel && link && (
          <Button 
            href={link} 
            variant={step.isPrimary ? 'primary' : 'outline'}
            fullWidth
            icon={step.isPrimary ? <ArrowRight className="w-4 h-4"/> : undefined}
            className={step.isPrimary ? "" : "text-sm py-3"}
          >
            {step.actionLabel}
          </Button>
        )}
      </div>
    </motion.div>
  );
};