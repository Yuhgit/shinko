# 進晃 ホームページ

Figmaデザインに基づいてAstroとTailwind CSSで実装されたホームページです。

## 技術スタック

- **Astro** - 静的サイトジェネレーター
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク
- **TypeScript** - 型安全性のための言語

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは `http://localhost:4321` で起動します。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## プロジェクト構造

```
shinko_data/
├── public/
│   └── images/          # 画像アセット（Figmaからエクスポートした画像を配置）
├── src/
│   ├── components/     # Astroコンポーネント
│   │   ├── Header.astro
│   │   ├── HeaderSp.astro
│   │   ├── Footer.astro
│   │   └── Contact.astro
│   ├── pages/
│   │   └── index.astro # メインページ
│   └── styles/
│       └── globals.css  # グローバルスタイル
├── astro.config.mjs    # Astro設定
└── tailwind.config.mjs # Tailwind CSS設定
```

## 画像アセットの配置

Figmaデザインから画像をエクスポートして、`public/images/` ディレクトリに配置してください。

詳細は `public/images/README.md` を参照してください。

## デザイン仕様

### カラーパレット

- **メインオレンジ**: `#EA5903`
- **テキストブラック**: `#1B1B1B`
- **白**: `#FFFFFF`

### フォント

- **日本語**: Noto Sans JP (Regular, Medium, Bold, Light)
- **英語**: Roboto (Regular, Medium, Bold)

### レスポンシブブレークポイント

- **モバイル**: デフォルト（~1023px）
- **デスクトップ**: `lg:` プレフィックス（1024px以上）

## セクション構成

1. **Header** - ナビゲーションヘッダー
2. **MV** - メインビジュアル
3. **Introduction** - 会社紹介
4. **Our Tech** - 技術紹介
5. **Projects** - 施工事例
6. **Recruitment** - 採用情報
7. **Contact** - お問い合わせ
8. **Footer** - フッター

## 開発時の注意事項

- 画像ファイルは必ず `public/images/` ディレクトリに配置してください
- 画像ファイル名はコード内で指定された名前と完全に一致させる必要があります
- Tailwind CSSのクラスを使用してスタイリングを行っています
- レスポンシブデザインは `lg:` プレフィックスを使用して実装されています

## ライセンス

このプロジェクトは進晃株式会社の所有物です。
