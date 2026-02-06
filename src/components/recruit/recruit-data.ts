/**
 * 採用ページ専用データ（Figma 320:6005 / 320:7964 準拠）
 * 他ファイルの config は使用しない
 */

export const recruitNavLinks = [
  { href: "/company", label: "会社概要" },
  { href: "/service", label: "事業内容" },
  { href: "/recruit", label: "採用情報" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

/** ヘッダーナビ（Figma 320:6111 準拠） */
export const recruitHeaderNavLinks = [
  { href: "#job", label: "仕事を知る" },
  { href: "#workplace", label: "職場環境を知る" },
  { href: "#voice", label: "人を知る" },
] as const;

/** ヘッダーCTA（Figma 320:6111 準拠） */
export const recruitHeaderCta = {
  requirements: { label: "募集要項", href: "#requirements" },
  entry: { label: "エントリー", href: "#entry" },
} as const;

/** ヒーロー（Figma 320:6124 準拠） */
export const recruitHero = {
  /** 1行目・2行目（中央グラデーション見出し） */
  titleLine1: "技術の伝承、",
  titleLine2: "継承者を求む。",
  en: "Skills to the Next Generation",
  /** ヒーロー背景（public/images/recruit/） */
  backgroundImage: "/images/recruit/hero-bg.png",
  /** ヒーロー周囲の顔写真 5 枚（左上・右上・下左・下中央・下右） */
  faceImages: [
    "/images/recruit/hero1.png",
    "/images/recruit/hero2.png",
    "/images/recruit/hero3.png",
    "/images/recruit/hero4.png",
    "/images/recruit/hero5.png",
  ] as const,
} as const;

/** 導入「誰でも成長できる環境が、ここにある。」 */
export const recruitIntro = {
  line1: "誰でも成長できる環境が、",
  line2: "ここにある。",
  description:
    "進晃では、未経験からでも安心してキャリアを積める環境を整えています。研修制度や先輩のサポート体制が充実しており、一人ひとりの成長を大切にしています。",
} as const;

/** 仕事を知るセクション（Figma 320:6141 準拠） */
export const recruitJobTypeSection = {
  enLabel: "Job Type",
  heading: "仕事を知る",
  headlineLine1: "誰でも成長できる環境が、",
  headlineLine2: "ここにある。",
  description:
    "入社後の約1年間は、現場で先輩のサポートをしながら基礎から学べる期間！\n資格取得支援もあり、一生モノの技術が手に入ります！",
  contentLabel: "仕事内容",
  mainHeading: "進晃のお仕事は2職種あります",
  tabs: [
    { id: "sekoukanri", label: "施工管理職" },
    { id: "genbashinou", label: "現場技能職" },
  ] as const,
  sekoukanri: {
    subheading: "工事の進行を管理するお仕事",
    title: "施工管理職",
    lead: "主に現場での指揮監督をし、工事が安全かつスムーズに進行するようにする仕事です。",
    images: [
      "/images/service-slider-1.jpg",
      "/images/recruit/sekokanri.png",
    ] as const,
    cards: [
      {
        title: "工程管理",
        desc: "工事の工程表を作成し、工事が遅れないよう職人や材料を手配し、日々の進捗を管理します。",
        icon: "/images/recruit/Vector-13.png",
      },
      {
        title: "品質管理",
        desc: "設計書や仕様書通りに作業が行われるよう、使用する材料の規格や施工方法が適正かをチェックします。",
        icon: "/images/recruit/Vector-1.png",
      },
      {
        title: "安全管理",
        desc: "危険な場所での作業がないか、安全な作業環境が整っているかを管理します。",
        icon: "/images/recruit/Vector-2.png",
      },
      {
        title: "原価管理",
        desc: "工事にかかる費用の管理をします。",
        icon: "/images/recruit/Vector-3.png",
      },
    ],
  },
  genbashinou: {
    subheading: "建物の防水工事を行うお仕事",
    title: "現場技能職",
    lead: "職長（リーダー）の指導のもとで作業を進めます。\nチームで協力しながら、建物の仕上げを完成させていくやりがいのある仕事です。",
    images: [
      "/images/service-waterproof.jpg",
      "/images/service-header.jpg",
    ] as const,
    cards: [
      {
        title: "現場準備",
        desc: "材料の運搬や作業場の養生（きれいに整える作業）を行います。",
        icon: "/images/recruit/Vector-13.png",
      },
      {
        title: "施工作業",
        desc: "建築材料を混ぜる・塗る・切る・注入するなどの実作業を行います。",
        icon: "/images/recruit/Vector-1.png",
      },
    ],
  },
} as const;

/** 採用フロー：2タブ（新卒採用・中途採用） */
export const recruitFlowTabItems = [
  { id: "shinsotsu", label: "新卒採用" },
  { id: "chuto", label: "中途採用" },
] as const;

export const recruitFlowSection = {
  stepLabel: "STEP1",
  heading: "新晃の採用フローについて",
  shinsotsu: {
    label: "新卒採用",
    lead: "未経験でも安心！成長をサポートする万全の教育体制",
    images: [
      "/images/recruit/flow-shinsotsu-1.png",
      "/images/recruit/flow-shinsotsu-2.png",
    ] as const,
    cards: [
      {
        title: "安心の研修制度",
        desc: "入社後、体系的な研修で基礎から丁寧にサポートします。",
      },
      {
        title: "充実のサポート体制",
        desc: "先輩社員がマンツーマンで仕事のやり方を伝承します。",
      },
      {
        title: "個別のキャリアパス",
        desc: "一人ひとりの希望に合わせたキャリア設計をサポートします。",
      },
      {
        title: "評価制度",
        desc: "公正な評価制度で、成長に応じた待遇を実現します。",
      },
    ],
  },
  chuto: {
    label: "中途採用",
    lead: "あなたの経験を活かして即戦力に",
    images: [
      "/images/recruit/flow-chuto-1.png",
      "/images/recruit/flow-chuto-2.png",
    ] as const,
    cards: [
      {
        title: "経験者優遇",
        desc: "これまでのキャリアを活かした配置と待遇をご用意します。",
      },
      {
        title: "スキルアップ支援",
        desc: "資格取得支援など、さらにスキルを高める制度が充実しています。",
      },
    ],
  },
} as const;

/** WLB・福利厚生（Figma 320:6214 準拠） */
export const recruitWLB = {
  enLabel: "Employee Benefits",
  sectionHeading: "職場環境を知る",
  headline1: "残業ほぼゼロ。",
  wlbDesc:
    "私たちは「残業ほぼなし」を実現。\nプライベートの時間も大切にして、リフレッシュして現場に臨める環境を整えています。",
  headline2: "充実の福利厚生。",
  benefitsDesc:
    "昇給・賞与に加え、楽しく働くための様々な社内制度を準備。\n他社にはない、プライベートも満喫するための福利厚生が揃っています。",
  contentLabel: "福利厚生",
  mainHeading: "充実した福利厚生・社内制度が整っています",
  sideLabel: "Employee Benefits",
  benefits: [
    {
      title: "長期休暇あり",
      desc: "年末年始・夏季休暇を確保し、仕事だけでなくリフレッシュもできる時間を確保しています。オン/オフの切り替えがしっかりできる職場です。",
      icon: "/images/recruit/Vector-4.png",
    },
    {
      title: "入社祝い金5万円支給",
      desc: "入社後6か月間の勤務継続を条件に、祝い金5万円を支給。あなたの「新しい第一歩」を応援します。",
      icon: "/images/recruit/Vector-5.png",
    },
    {
      title: "昇給年1回/賞与年2回",
      desc: "日々の努力・成果を正当に評価します。昇給は能力に応じて39%以上を目安に、賞与も年2回支給あり。モチベーション高く働ける制度です。",
      icon: "/images/recruit/Vector-6.png",
    },
    {
      title: "社会保険完備",
      desc: "雇用保険、労災保険、健康保険、厚生年金保険を整備し、社員の安心を支えます。",
      icon: "/images/recruit/Vector-7.png",
    },
    {
      title: "交通費全額支給",
      desc: "毎日の通勤費用も会社が全額負担。移動のストレスを軽減し、安心して働ける環境を提供します。",
      icon: "/images/recruit/Vector-8.png",
    },
    {
      title: "福利厚生施設",
      desc: "提携リゾート施設「Not a Hotel, リゾートトラスト」等を活用し、休日の過ごし方も豊かに。仕事の合間に非日常を楽しめる制度です。",
      icon: "/images/recruit/Vector-9.png",
    },
    {
      title: "住宅手当",
      desc: "遠方からの入社でも安心して生活をスタートできるよう、家賃の3割を会社が負担(上限あり・光熱費は対象外)。",
      icon: "/images/recruit/Vector-10.png",
    },
    {
      title: "資格取得手当",
      desc: "建設・防水のプロとして長く活躍できるよう、国家資格や専門資格の取得費用を全額会社が負担します。",
      icon: "/images/recruit/Vector-11.png",
    },
    {
      title: "作業着・備品貸与",
      desc: "入社後すぐに必要な作業着や備品は、会社が用意します。自前の道具を揃える必要なく、安心して現場に臨めます。",
      icon: "/images/recruit/Vector-12.png",
    },
  ],
} as const;

/** 会社文化「楽しく、わいわいやってます。」 */
/** 会社文化・クラブ活動（Figma 320:6281 準拠） */
export const recruitCulture = {
  title: "楽しく、わいわいやってます。",
  /** 見出し3行（各白枠＋グラデーション文字用・行ごとにフォントサイズ指定可） */
  titleLines: [
    { text: "たのしく", size: "text-5xl md:text-[8vw]" },
    { text: "わいわい", size: "text-4xl md:text-[6vw]" },
    { text: "やってます。", size: "text-3xl md:text-[4vw]" },
  ] as const,
  description:
    "進晃ではクラブ活動があります。\nクラブ活動を通じて、趣味や興味を共有することで、情報交換が活発になり、『相談しやすい雰囲気』が自然と醸成され、職場全体のチームワークや活力にも好影響を与えています。",
  /** クラブラベル（左から） */
  clubs: ["ゴルフ部", "筋トレ部", "走部", "バイク部"] as const,
  /** 6 枚の写真（2列×3行） */
  images: [
    "/images/recruit/culture-1.png",
    "/images/recruit/culture-2.png",
    "/images/recruit/culture-3.png",
    "/images/recruit/culture-4.png",
    "/images/recruit/culture-5.png",
    "/images/recruit/culture-6.png",
  ] as const,
} as const;

/** 社員の声・社員インタビュー（Figma 320:6312 準拠） */
export const recruitVoiceSection = {
  enLabel: "Interview",
  sectionHeading: "人を知る",
  headlineLines: ["先輩が優しく丁寧に", "とことん教えます。"] as const,
  contentLabel: "社員インタビュー",
  sideLabel: "Staff Interview",
  /** ラベル: 入社理由 / 仕事のやりがい / 会社の良いところ */
  blockLabels: {
    reason: "入社理由",
    satisfaction: "仕事のやりがい",
    companyGood: "会社の良いところ",
  } as const,
  voices: [
    {
      nameEn: "Tahara Hiro",
      nameJa: "田原 優",
      joinYearDept: "2019年入社 工事部",
      image: "/images/recruit/hero-face-2.png",
      imageLeft: true,
      reason:
        "前職は食品工場で働いていました。未経験でも挑戦できると知り、建設の仕事に興味を持ち入社を決めました。",
      satisfaction:
        "お客様に「ありがとう」と言っていただけることが何よりのやりがいです。未経験でしたが、先輩方に教わりながら日々成長を実感しています。",
      companyGood:
        "先輩方が優しく、相談しやすい雰囲気です。クラブ活動や提携リゾート施設、ランドクルーザーの社用車シェアなど、福利厚生も充実しています。",
    },
    {
      nameEn: "Taguchi Atsuko",
      nameJa: "田口 温子",
      joinYearDept: "2025年入社 工事管理部",
      image: "/images/recruit/hero-face-3.png",
      imageLeft: false,
      reason:
        "国家資格を活かした仕事がしたくて転職を考えていました。会社のウェブサイトや面接の雰囲気が良く、ここでなら成長できると感じ入社しました。",
      satisfaction:
        "新しいことに挑戦できる環境で、スキルが身につく実感があります。社長に褒めていただいたり、これまでの経験を活かせたりして、やりがいを感じています。",
      companyGood:
        "仲が良く、何でも相談しやすい職場です。社長に直接会社の方向性を聞ける機会もあり、風通しの良さが魅力です。",
    },
  ],
} as const;

/** 募集要項：2タブ（Figma 320:6374 準拠） */
export const recruitReqTabItems = [
  { id: "shinsotsu", label: "新卒採用" },
  { id: "chuto", label: "中途採用" },
] as const;

/** 応募案内バナー（Figma 320:6409）— フッターとは別セクション */
export const recruitEntryBanner = {
  heading: "技術の継承者、募集中。",
  backgroundImage: "/images/recruit/Entry.png",
  cards: [
    {
      label: "高卒採用",
      subtext: "進路ご担当の先生を通じてお問い合わせください",
      href: "/contact",
      isLink: false,
    },
    {
      label: "中途採用",
      subtext: "こちらから応募を受け付けております",
      href: "#recruit-requirements",
      isLink: true,
    },
  ],
} as const;

/** フッター（Figma 320:6418）— オレンジ背景・コーポレートサイトボタン・SNS・著作権 */
export const recruitFooter = {
  corporateSite: { label: "コーポレートサイト", href: "/" },
  social: [
    { name: "Instagram", href: "#", ariaLabel: "Instagram" },
    { name: "TikTok", href: "#", ariaLabel: "TikTok" },
    { name: "YouTube", href: "#", ariaLabel: "YouTube" },
  ],
  copyright: "Shinko.inc",
} as const;

/** フッター CTA（Figma 320:6005） */
export const recruitFooterCTA = {
  heading: "技術の継承者、募集中。",
  primaryButton: { label: "募集要項を見る", href: "#recruit-requirements" },
  secondaryButton: { label: "お問い合わせ", href: "/contact" },
  backToTop: "トップへ戻る",
} as const;
