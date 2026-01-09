import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ImportantNotice: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-2xl mx-auto">
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <AlertCircle className="w-6 h-6 text-slate-700" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2">
              必須範囲について
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              今回のご契約では、<strong className="text-slate-800 font-bold decoration-indigo-300 underline underline-offset-4">フィードバック会（オンライン面談）への参加までが必須範囲</strong>となります。
              <br /><br />
              完了が確認できない場合、クラウドワークス・ランサーズ上の評価に影響する場合がございますので、必ず最後までご対応をお願いいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};