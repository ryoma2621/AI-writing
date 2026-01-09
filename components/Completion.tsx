import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Completion: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("完了");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const checklist = [
    "フォームを送信した",
    "公式LINEに登録した",
    "LINEの案内に目を通した",
    "面談の日程を確保した"
  ];

  return (
    <section className="px-6 pb-24 max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-indigo-900 rounded-3xl p-8 text-center text-white shadow-2xl shadow-indigo-900/30 overflow-hidden relative"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-50%] w-[100%] h-[100%] rounded-full bg-indigo-500 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-8">最終チェック</h3>
          
          <ul className="text-left space-y-4 mb-10 inline-block mx-auto">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-indigo-100">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <p className="text-sm text-indigo-200 mb-4">
              すべて完了したら、メッセージで<br/>
              <span className="font-bold text-white">「完了」</span>とご連絡ください
            </p>
            
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 bg-white text-indigo-900 font-bold py-4 rounded-xl hover:bg-indigo-50 transition-colors active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>コピーしました</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>『完了』をコピー</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};