import { CheckCircle2, FileText, MessageCircle, Users, Send } from 'lucide-react';

export const LINKS = {
  FORM: "https://forms.gle/GXq8tmjDXNzZfjyr6",
};

export const STEPS = [
  {
    id: 1,
    title: "確認フォームの送信",
    description: "まずはこちらのフォームから基本情報の確認をお願いします。",
    duration: "1分",
    icon: FileText,
    actionLabel: "確認フォームを開く",
    isPrimary: true,
  },
  {
    id: 2,
    title: "公式LINEの登録",
    description: "フォーム送信完了画面、または自動返信メールの案内に沿ってご登録ください。",
    duration: "30秒",
    icon: MessageCircle,
    actionLabel: null,
    isPrimary: false,
  },
  {
    id: 3,
    title: "案内に沿って進行",
    description: "LINE上でマニュアルや具体的な作業手順のご案内が届きます。",
    duration: "随時",
    icon: Send,
    actionLabel: null,
    isPrimary: false,
  },
  {
    id: 4,
    title: "面談への参加",
    description: "オンラインでのフィードバック会に参加していただきます。",
    duration: "必須",
    icon: Users,
    actionLabel: null,
    isPrimary: false,
  },
];

export const FAQ_ITEMS = [
  {
    q: "どこまでが必須ですか？",
    a: "「オンライン面談（フィードバック会）」への参加までが契約に含まれる必須範囲となります。これらが完了しない場合、納品とみなされないことがございます。"
  },
  {
    q: "フォーム送信後はどうすればいいですか？",
    a: "フォーム送信完了画面に公式LINEの登録ボタンが表示されます。そちらから登録を行い、LINEに届くメッセージをお待ちください。"
  },
  {
    q: "不明点がある場合は？",
    a: "クラウドワークスまたはランサーズのメッセージ機能より、お気軽にご連絡ください。"
  }
];