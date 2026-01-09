import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from './ui/Button';
import { LINKS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 px-6 sm:px-8 max-w-2xl mx-auto text-center sm:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-indigo-700 bg-indigo-50 rounded-full uppercase">
          Onboarding
        </span>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          ご契約ありがとうございます。<br />
          <span className="text-slate-500 text-2xl sm:text-3xl block mt-2 font-medium">これからの進め方について</span>
        </h1>

        <p className="text-slate-600 leading-relaxed mb-8 text-base sm:text-lg">
          仮払いが完了し、正式に契約成立となりました。<br className="hidden sm:block" />
          まずはこちらのページで、今回のお仕事の流れをご確認ください。
        </p>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-10 text-left">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-bold text-slate-500">最初のタスク：約1分</span>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-slate-900">
              確認フォームの送信
            </h3>
            <Button href={LINKS.FORM} fullWidth icon={<ArrowRight className="w-5 h-5" />}>
              確認フォームを開く
            </Button>
            <p className="text-xs text-slate-400 text-center">
              ※ 送信後、案内に沿ってLINE登録へお進みください
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};