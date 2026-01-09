import React from 'react';
import { FAQ_ITEMS } from '../constants';

export const FAQ: React.FC = () => {
  return (
    <section className="px-6 pb-20 max-w-2xl mx-auto">
      <h3 className="text-lg font-bold text-slate-900 mb-8 text-center">よくある質問</h3>
      <div className="space-y-6">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="border-b border-slate-100 pb-6 last:border-0">
            <h4 className="text-sm font-bold text-slate-800 mb-2">Q. {item.q}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};