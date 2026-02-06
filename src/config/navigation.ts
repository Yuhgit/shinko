// Navigation configuration - 全ページへのリンクを定義
export interface NavLink {
  href: string;
  label: string;
}

/** 子リンク（ドロップダウン用） */
export interface NavLinkChild {
  href: string;
  label: string;
}

/** ドロップダウン付きナビ項目（技術紹介など） */
export interface NavLinkWithChildren {
  label: string;
  children: NavLinkChild[];
}

/** ヘッダー・モバイルメニュー用：通常リンク or ドロップダウン */
export type NavItem = NavLink | NavLinkWithChildren;

export function isNavLinkWithChildren(
  item: NavItem
): item is NavLinkWithChildren {
  return (
    "children" in item && Array.isArray((item as NavLinkWithChildren).children)
  );
}

export interface NavButton {
  href: string;
  label: string;
  variant: "outline" | "primary";
}

/** ヘッダー・モバイルメニューのナビゲーション（技術紹介はホバーで子表示） */
export const navLinks: NavItem[] = [
  { href: "/company", label: "会社概要" },
  { href: "/service", label: "事業内容" },
  {
    label: "技術紹介",
    children: [
      { href: "/pingrout", label: "ピングラウト工法" },
      { href: "/tapgrout", label: "TAPグラウト工法" },
    ],
  },
  { href: "/projects", label: "施工事例" },
];

/** ヘッダー・モバイルメニューのボタン（採用は会社概要へ、お問い合わせは専用ページへ） */
export const navButtons: NavButton[] = [
  { href: "/recruit", label: "採用情報", variant: "outline" },
  { href: "/contact", label: "お問い合わせ", variant: "primary" },
];

/** フッターのナビゲーションリンク */
export const footerNavLinks = {
  left: [
    { href: "/company", label: "会社概要" },
    { href: "/pingrout", label: "ピングラウト工法" },
    { href: "/tapgrout", label: "TAPグラウト工法" },
    { href: "/projects", label: "施工事例" },
  ],
  right: [
    { href: "/recruit", label: "採用情報" },
    { href: "/contact", label: "お問い合わせ" },
    { href: "/privacy", label: "プライバシーポリシー" },
  ],
};
