import React from 'react';
import { Hero } from './components/Hero';
import { StepCard } from './components/StepCard';
import { StickyNav } from './components/StickyNav';
import { ImportantNotice } from './components/ImportantNotice';
import { Completion } from './components/Completion';
import { FAQ } from './components/FAQ';
import { STEPS, LINKS } from './constants';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <StickyNav />
      
      <Hero />
      
      <section className="px-6 pb-12 max-w-2xl mx-auto flex flex-col gap-6">
        {STEPS.map((step) => (
          <StepCard 
            key={step.id} 
            step={step} 
            link={step.id === 1 ? LINKS.FORM : undefined} 
          />
        ))}
      </section>

      <ImportantNotice />
      
      <Completion />
      
      <FAQ />

      <footer className="py-12 text-center text-slate-400 text-xs border-t border-slate-200">
        <p className="mb-2">どうぞよろしくお願いいたします。</p>
        <p>&copy; AI x Writing Project</p>
      </footer>
    </main>
  );
};

export default App;