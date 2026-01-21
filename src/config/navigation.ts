// Navigation configuration
export interface NavLink {
  href: string;
  label: string;
}

export interface NavButton {
  href: string;
  label: string;
  variant: 'outline' | 'primary';
}

export const navLinks: NavLink[] = [
  { href: '#about', label: '会社概要' },
  { href: '#business', label: '事業内容' },
  { href: '#tech', label: '技術紹介' },
  { href: '#projects', label: '施工事例' },
];

export const navButtons: NavButton[] = [
  { href: '#recruit', label: '採用情報', variant: 'outline' },
  { href: '#contact', label: 'お問い合わせ', variant: 'primary' },
];

export const footerNavLinks = {
  left: [
    { href: '#about', label: '会社概要' },
    { href: '#pingrout', label: 'ピングラウト工法' },
    { href: '#tapgrout', label: 'ＴＡＰグラウト工法' },
    { href: '#projects', label: '施工事例' },
  ],
  right: [
    { href: '#recruit', label: '採用情報' },
    { href: '#contact', label: 'お問い合わせ' },
    { href: '#privacy', label: 'プライバシーポリシー' },
  ],
};

