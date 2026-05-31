# kb-no.github.io

小林直樹のポートフォリオサイト。SES 案件アピール・農業 DX 支援を対象とした日英対応の静的サイトです。

**Tech stack**: Next.js 16 (static export) / TypeScript / Tailwind CSS / Framer Motion  
**Deploy**: GitHub Actions → GitHub Pages

## Local Development

Docker を使った開発環境です。Node.js のローカルインストール不要。

```bash
docker compose up       # http://localhost:3000
docker compose down
```

## Build

```bash
docker compose run --rm dev npm run build   # ./out/ に静的ファイルを生成
```

## Deploy

`main` ブランチへの push で GitHub Actions が自動ビルド・デプロイします。

リポジトリの Settings → Pages → Source を **GitHub Actions** に設定してください。
