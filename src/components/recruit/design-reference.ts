/**
 * 採用ページのデザインデータ参照
 *
 * 出典: Figma HP-Design
 * - デスクトップ: node-id=320-6005 (320:6005)
 * - モバイル:     node-id=320-7964 (320:7964)
 *
 * 文言・レイアウト・色は上記ノードに合わせて更新すること。
 * カラー・タイポは get_variable_defs(nodeId: 320:6005) の値を使用。
 */

export const FIGMA_RECRUIT_NODES = {
  desktop: "320:6005",
  mobile: "320:7964",
} as const;

/** Figma variable defs (node 320:6005) 準拠のデザイントークン */
export const designTokens = {
  color: {
    mainOrange: "#EA5903",
    white: "#FFFFFF",
    textBlack: "#1B1B1B",
    commonDark: "#000000",
    gray500: "#6B7280",
    gray100: "#F3F4F6",
  },
  typography: {
    fontSans: "Noto Sans JP",
    fontEn: "Roboto",
    /** text-base/medium: 16px, weight 500, line-height 1.5 */
    baseMedium: { size: 16, weight: 500, lineHeight: 1.5 },
    /** text-base/bold: 16px, weight 700 */
    baseBold: { size: 16, weight: 700, lineHeight: 1.5 },
    /** text-xl/bold: 32px, weight 700, letter-spacing 10 */
    xlBold: { size: 32, weight: 700, letterSpacing: 10 },
    /** text-2xl/bold: 40px, weight 700 */
    "2xlBold": { size: 40, weight: 700, lineHeight: 1.5 },
    /** text-4xl/black: 64px, weight 900, letter-spacing 8 */
    "4xlBlack": { size: 64, weight: 900, letterSpacing: 8 },
    /** en/text-lg: Roboto 24px, weight 500, letter-spacing 10 */
    enLg: { size: 24, weight: 500, letterSpacing: 10 },
  },
} as const;
