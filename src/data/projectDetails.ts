/**
 * 施工事例詳細ページのマスターデータ。
 * ここに追加した分だけ /projects/[slug] が自動生成されます。
 *
 * 【2種類のレイアウト】
 * - projectDetails … 施工前/施工後のタブレイアウト（例: /projects/shisui-1）
 * - projectPhaseDetails … 施工前/施工中/施工後の3フェーズレイアウト（例: /projects/school-pool）
 *
 * 【URL】 /projects/{slug} で表示。slug は各オブジェクトの slug で指定（例: shisui-1, school-pool）
 *
 * 【新規ページの追加】
 * 1. 該当する配列（projectDetails または projectPhaseDetails）にオブジェクトを追加（slug で URL を指定）
 * 2. 施工事例一覧（projects/index.astro）の該当カードに detailSlug: '同じslug' を設定
 * 3. ビルドで /projects/{slug} が自動生成される
 */

/** 施工事例詳細ページで共通の固定値 */
export const PROJECT_DETAIL_FIXED = {
  categoryTag: "止水工事",
  breadcrumbParent: "施工事例",
  breadcrumbParentHref: "/projects",
  headerImageAlt: "施工事例ヘッダー背景",
} as const;

export interface ProjectDetailImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProjectDetailInfoItem {
  label: string;
  value: string;
}

/** 施工前・施工後 1 組 */
export interface ProjectDetailBeforeAfter {
  before: ProjectDetailImage;
  after: ProjectDetailImage;
}

export interface ProjectDetail {
  /** URL スラッグ。 /projects/{slug} で表示（例: shisui-1, kokyo-2） */
  slug: string;
  /** ページタイトル（メイン見出し） */
  titleJa: string;
  headerImage: string;
  /** 施工前・施工後の組。複数指定でタブブロックが複数並ぶ */
  beforeAfterPairs: ProjectDetailBeforeAfter[];
  overviewItems: ProjectDetailInfoItem[];
  specItems: ProjectDetailInfoItem[];
  /** OGP・description 用。未指定時は titleJa から自動生成 */
  metaDescription?: string;
}

/**
 * 施工前・施工中・施工後の3フェーズ構成で表示する詳細ページ用データ。
 * projectPhaseDetails に追加した分だけ /projects/{slug} が自動生成される。
 * slug で URL を指定（例: /projects/school-pool）。
 */
export interface ProjectPhaseDetail {
  /** URL スラッグ。 /projects/{slug} で表示（例: school-pool） */
  slug: string;
  /** ページタイトル（メイン見出し） */
  titleJa: string;
  headerImage: string;
  /** ヒーロー直上のカテゴリタグ（未指定時は PROJECT_PHASE_FIXED を使用） */
  categoryTag?: string;
  breadcrumbParent?: string;
  breadcrumbParentHref?: string;
  /** 施工前：1枚または複数（1枚の場合は単一表示、複数はグリッド） */
  beforeImages: ProjectDetailImage[];
  /** 施工中：複数枚で2列グリッド表示 */
  duringImages: ProjectDetailImage[];
  /** 施工後：1枚または複数 */
  afterImages: ProjectDetailImage[];
}

/** 3フェーズ詳細ページで共通の固定値 */
export const PROJECT_PHASE_FIXED = {
  categoryTag: "公共工事",
  breadcrumbParent: "施工事例",
  breadcrumbParentHref: "/projects",
  headerImageAlt: "施工事例ヘッダー背景",
} as const;

/** 3フェーズ構成で表示する施工事例。追加した分だけ /projects/{slug} が自動生成される */
export const projectPhaseDetails: ProjectPhaseDetail[] = [
  {
    slug: "public-1",
    titleJa: "学校プール防水改修工事",
    headerImage: "/images/projects/kokyo/kokyo1a.jpg",
    beforeImages: [
      { src: "/images/projects/kokyo/kokyo1b.JPG", alt: "学校プール 施工前" },
    ],
    duringImages: [
      {
        src: "/images/projects/kokyo/kokyo1-1.jpg",
        alt: "学校プール 施工中（下地塗布）",
      },
      {
        src: "/images/projects/kokyo/kokyo1-2.jpg",
        alt: "学校プール 施工中（ライン引き）",
      },
      {
        src: "/images/projects/kokyo/kokyo1-3.jpg",
        alt: "学校プール 施工中（床コーティング）",
      },
      {
        src: "/images/projects/kokyo/kokyo1-4.jpg",
        alt: "学校プール 施工中（壁塗装）",
      },
      {
        src: "/images/projects/kokyo/kokyo1-5.jpg",
        alt: "学校プール 施工中（階段塗装）",
      },
      {
        src: "/images/projects/kokyo/kokyo1-6.jpg",
        alt: "学校プール 施工中（縁仕上げ）",
      },
    ],
    afterImages: [
      { src: "/images/projects/kokyo/kokyo1a.jpg", alt: "学校プール 施工後" },
    ],
  },
  {
    slug: "public-2",
    titleJa: "住宅住戸工事",
    headerImage: "/images/projects/kokyo/kokyo2a.JPG",
    beforeImages: [
      { src: "/images/projects/kokyo/kokyo2b.JPG", alt: "住宅住戸 施工前" },
    ],
    duringImages: [
      {
        src: "/images/projects/kokyo/kokyo2-1.jpg",
        alt: "住宅住戸 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo2-2.JPG",
        alt: "住宅住戸 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo2-3.png",
        alt: "住宅住戸 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo2-4.png",
        alt: "住宅住戸 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo2-5.JPEG",
        alt: "住宅住戸 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo2-6.jpg",
        alt: "住宅住戸 施工中",
      },
    ],
    afterImages: [
      { src: "/images/projects/kokyo/kokyo2a.JPG", alt: "住宅住戸 施工後" },
    ],
  },
  {
    slug: "public-3",
    titleJa: "歩道橋補修工事",
    headerImage: "/images/projects/kokyo/kokyo3a.JPG",
    beforeImages: [
      {
        src: "/images/projects/kokyo/kokyo3b.JPG",
        alt: "歩道橋補修工事 施工前",
      },
    ],
    duringImages: [
      {
        src: "/images/projects/kokyo/kokyo3-1.png",
        alt: "歩道橋補修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo3-2.jpg",
        alt: "歩道橋補修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo3-3.png",
        alt: "歩道橋補修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo3-4.jpg",
        alt: "歩道橋補修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo3-5.png",
        alt: "歩道橋補修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo3-6.png",
        alt: "歩道橋補修工事 施工中",
      },
    ],
    afterImages: [
      {
        src: "/images/projects/kokyo/kokyo3a.JPG",
        alt: "歩道橋補修工事 施工後",
      },
    ],
  },
  {
    slug: "public-4",
    titleJa: "配水所屋上防水改修工事",
    headerImage: "/images/projects/kokyo/kokyo4a.JPG",
    beforeImages: [
      {
        src: "/images/projects/kokyo/kokyo4b.JPG",
        alt: "配水所屋上防水改修工事 施工前",
      },
    ],
    duringImages: [
      {
        src: "/images/projects/kokyo/kokyo4-1.png",
        alt: "配水所屋上防水改修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo4-2.JPG",
        alt: "配水所屋上防水改修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo4-3.png",
        alt: "配水所屋上防水改修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo4-4.JPG",
        alt: "配水所屋上防水改修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo4-5.JPG",
        alt: "配水所屋上防水改修工事 施工中",
      },
      {
        src: "/images/projects/kokyo/kokyo4-6.JPG",
        alt: "配水所屋上防水改修工事 施工中",
      },
    ],
    afterImages: [
      {
        src: "/images/projects/kokyo/kokyo4a.JPG",
        alt: "配水所屋上防水改修工事 施工後",
      },
    ],
  },
];

/** 詳細ページが存在する事例のマスターデータ。追加・編集でページが自動生成される */
export const projectDetails: ProjectDetail[] = [
  {
    slug: "shisui-1",
    titleJa: "〇〇水再生センター 施工",
    headerImage: "/images/projects/shisui/shisui1a.png",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui1b.png",
          alt: "〇〇水再生センター 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui1a.png",
          alt: "〇〇水再生センター 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "〇〇水再生センター" },
      {
        label: "漏水状況",
        value: "沈殿槽外壁エキスパンション部・灯槽部より漏水",
      },
      { label: "水量", value: "毎分30～40ℓ/分程度" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト\nスマート止水工法（弊社オリジナル）",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
    metaDescription:
      "〇〇水再生センターの止水工事施工事例。ピングラウト工法による施工前・施工後の写真とプロジェクト概要・技術仕様をご紹介します。",
  },
  {
    slug: "shisui-2",
    titleJa: "都内某マンション新築計画",
    headerImage: "/images/projects/shisui/shisui2a.png",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui2b.png",
          alt: "都内某マンション新築計画 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui2a.png",
          alt: "都内某マンション新築計画 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "都内某マンション新築計画" },
      {
        label: "漏水状況",
        value: "地下ピット（釜場）打継部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト\nスマート止水工法（一部弊社オリジナル）",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-3",
    titleJa: "○○水再生センター",
    headerImage: "/images/projects/shisui/shisui3a.png",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui3b.png",
          alt: "○○水再生センター 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui3a.png",
          alt: "○○水再生センター 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○水再生センター" },
      {
        label: "漏水状況",
        value: "地下外壁　打継部及びクラックより漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト\nスマート止水工法",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-4",
    titleJa: "○○水再生センター",
    headerImage: "/images/projects/shisui/shisui4a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui4b.jpeg",
          alt: "○○水再生センター 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui4a.jpeg",
          alt: "○○水再生センター 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○水再生センター" },
      {
        label: "漏水状況",
        value: "洞道内　打継部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト\nスマート止水工法",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-5",
    titleJa: "都内某マンション新築計画",
    headerImage: "/images/projects/shisui/shisui5a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui5b.jpeg",
          alt: "都内某マンション新築計画 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui5a.jpeg",
          alt: "都内某マンション新築計画 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "都内某マンション新築計画" },
      {
        label: "漏水状況",
        value: "地下ピット釜場　底板全体より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "弊社オリジナル",
      },
      { label: "使用材料", value: "TA-120X・TA-2001・ＮＬペーストＷ" },
    ],
  },
  {
    slug: "shisui-6",
    titleJa: "都内某マンション新築計画",
    headerImage: "/images/projects/shisui/shisui6a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui6b.jpeg",
          alt: "都内某マンション新築計画 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui6a.jpeg",
          alt: "都内某マンション新築計画 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "都内某マンション新築計画" },
      {
        label: "漏水状況",
        value: "地下免震ピット底板　工区堺（打継部）より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ＴＡＰグラウト工法",
      },
      { label: "使用材料", value: "TA-120X　TA-2001" },
    ],
  },
  {
    slug: "shisui-7",
    titleJa: "都内某マンション新築計画",
    headerImage: "/images/projects/shisui/shisui7a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui7b.jpeg",
          alt: "都内某マンション新築計画 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui7a.jpeg",
          alt: "都内某マンション新築計画 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "都内某マンション新築計画" },
      {
        label: "漏水状況",
        value: "地下棚杭跡より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ＴＡＰグラウト工法",
      },
      { label: "使用材料", value: "TA-120X　TA-2001" },
    ],
  },
  {
    slug: "shisui-8",
    titleJa: "都内某介護施設新築計画",
    headerImage: "/images/projects/shisui/shisui8a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui8b.jpeg",
          alt: "都内某介護施設新築計画 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui8a.jpeg",
          alt: "都内某介護施設新築計画 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "都内某介護施設新築計画" },
      {
        label: "漏水状況",
        value: "地下ピット内　構台杭より漏水",
      },
      { label: "水量", value: "毎分１０～１５ℓ／分　程度" },
    ],
    specItems: [
      {
        label: "工法",
        value: "弊社オリジナル",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-9",
    titleJa: "○○水再生センター",
    headerImage: "/images/projects/shisui/shisui9a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui9b.jpeg",
          alt: "○○水再生センター 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui9a.jpeg",
          alt: "○○水再生センター 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○水再生センター" },
      {
        label: "漏水状況",
        value: "地下エキスパンション部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト工法（スマート止水工法）",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-10",
    titleJa: "○○水再生センター",
    headerImage: "/images/projects/shisui/shisui10a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui10b.jpeg",
          alt: "○○水再生センター 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui10a.jpeg",
          alt: "○○水再生センター 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○水再生センター" },
      {
        label: "漏水状況",
        value: "地下外壁打継部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト\nスマート止水工法",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-11",
    titleJa: "○○水再生センター",
    headerImage: "/images/projects/shisui/shisui11a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui11b.jpeg",
          alt: "○○水再生センター 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui11a.jpeg",
          alt: "○○水再生センター 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○水再生センター" },
      {
        label: "漏水状況",
        value: "地下打継より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト\nスマート止水工法",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-12",
    titleJa: "県内某マンション新築計画",
    headerImage: "/images/projects/shisui/shisui12a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui12b.jpeg",
          alt: "県内某マンション新築計画 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui12a.jpeg",
          alt: "県内某マンション新築計画 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "県内某マンション新築計画" },
      {
        label: "漏水状況",
        value: "地下機械式駐車場外壁より漏水（セパレーター・ひび割れ）",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ＴＡＰグラウト工法",
      },
      { label: "使用材料", value: "TA-120X　TA-2001" },
    ],
  },
  {
    slug: "shisui-13",
    titleJa: "都内某マンション新築計画",
    headerImage: "/images/projects/shisui/shisui13a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui13b.jpeg",
          alt: "都内某マンション新築計画 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui13a.jpeg",
          alt: "都内某マンション新築計画 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "都内某マンション新築計画" },
      {
        label: "漏水状況",
        value: "地下ピット、配管スリーブ廻りより漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト工法",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-14",
    titleJa: "某工場新築工事",
    headerImage: "/images/projects/shisui/shisui14a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui14b.jpeg",
          alt: "某工場新築工事 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui14a.jpeg",
          alt: "某工場新築工事 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "某工場新築工事" },
      {
        label: "漏水状況",
        value: "地下免震底板打継部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ＴＡＰグラウト工法",
      },
      { label: "使用材料", value: "TA-120X　TA-2001" },
    ],
  },
  {
    slug: "shisui-15",
    titleJa: "○○ポンプ場",
    headerImage: "/images/projects/shisui/shisui15a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui15b.jpeg",
          alt: "○○ポンプ場 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui15a.jpeg",
          alt: "○○ポンプ場 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○ポンプ場" },
      {
        label: "漏水状況",
        value: "地下外壁ひび割れより漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト工法（スマート止水工法）",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-16",
    titleJa: "○○ポンプ場",
    headerImage: "/images/projects/shisui/shisui16a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui16b.jpeg",
          alt: "○○ポンプ場 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui16a.jpeg",
          alt: "○○ポンプ場 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○ポンプ場" },
      {
        label: "漏水状況",
        value: "地下外壁ひび割れより漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト工法（スマート止水工法）",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-17",
    titleJa: "○○浄水場",
    headerImage: "/images/projects/shisui/shisui17a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui17b.jpeg",
          alt: "○○浄水場 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui17a.jpeg",
          alt: "○○浄水場 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○浄水場" },
      {
        label: "漏水状況",
        value: "地下外壁エキスパンジョイント部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト工法（スマート止水工法）　一部導水処理",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-18",
    titleJa: "○○浄水場",
    headerImage: "/images/projects/shisui/shisui18a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui18b.jpeg",
          alt: "○○浄水場 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui18a.jpeg",
          alt: "○○浄水場 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○浄水場" },
      {
        label: "漏水状況",
        value: "地下外壁打継部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ピングラウト工法（スマート止水工法）",
      },
      { label: "使用材料", value: "NLペーストW" },
    ],
  },
  {
    slug: "shisui-19",
    titleJa: "都内某オフィスビル新築工事",
    headerImage: "/images/projects/shisui/shisui19a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui19b.jpeg",
          alt: "都内某オフィスビル新築工事 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui19a.jpeg",
          alt: "都内某オフィスビル新築工事 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "都内某オフィスビル新築工事" },
      {
        label: "漏水状況",
        value: "地下外壁コールドジョイント部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "ＴＡＰグラウト工法",
      },
      { label: "使用材料", value: "TA-120X　TA-2001" },
    ],
  },
  {
    slug: "shisui-20",
    titleJa: "○○浄水場",
    headerImage: "/images/projects/shisui/shisui20a.jpeg",
    beforeAfterPairs: [
      {
        before: {
          src: "/images/projects/shisui/shisui20b.jpeg",
          alt: "○○浄水場 施工前",
        },
        after: {
          src: "/images/projects/shisui/shisui20a.jpeg",
          alt: "○○浄水場 施工後",
        },
      },
    ],
    overviewItems: [
      { label: "施工場所", value: "○○浄水場" },
      {
        label: "漏水状況",
        value: "地下外壁エキスパンジョイント部より漏水",
      },
      { label: "水量", value: "滲みだし" },
    ],
    specItems: [
      {
        label: "工法",
        value: "導水処理",
      },
    ],
  },
];

/** slug から詳細データを取得。一覧ページの href 生成などに利用 */
export function getProjectDetailBySlug(
  slug: string,
): ProjectDetail | undefined {
  return projectDetails.find((p) => p.slug === slug);
}

/** 詳細ページが存在する slug の一覧（一覧のリンク先チェック用） */
export function getProjectDetailSlugs(): string[] {
  return projectDetails.map((p) => p.slug);
}

/** 3フェーズ詳細の slug からデータを取得 */
export function getProjectPhaseDetailBySlug(
  slug: string,
): ProjectPhaseDetail | undefined {
  return projectPhaseDetails.find((p) => p.slug === slug);
}

/** 3フェーズ詳細が存在する slug の一覧 */
export function getProjectPhaseDetailSlugs(): string[] {
  return projectPhaseDetails.map((p) => p.slug);
}
