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

## Contact form (Formspree)

`Contact.tsx` は Formspree にブラウザから直接 POST します。通知先は Formspree の管理画面で設定し、サイトにはメールアドレスを表示しません。

1. Formspree で通知先を確認し、実際のフォーム ID を取得します（API キーではありません）。
2. ローカルでは `.env.example` を `.env.local` にコピーし、`NEXT_PUBLIC_FORMSPREE_FORM_ID` にその ID を設定します。
3. GitHub の Settings → Secrets and variables → Actions → Variables に同名の repository variable を設定します。ID は公開情報としてビルドに埋め込まれます。変更後は再ビルドが必要です。
4. フォームのスパム対策・許可ドメイン・通知先を管理画面で確認してください。CAPTCHA を必須にする場合は、この AJAX フォームとの連携も実装・確認してから公開してください。
5. 実際の送信と通知メール到着のテストは、所有者の確認を得てから実施します。

ID が未設定または形式不正の場合、ローカルのフォームは入力・送信できず、GitHub Actions のデプロイ用ビルドは停止します。架空の ID を設定して公開しないでください。入力検証は利用者向けの補助です。スパム対策やサーバー側検証は Formspree 側の設定も確認してください。

通信障害やタイムアウト時は受付結果が不明なことを案内し、再送による重複に注意を促します。エラー時は入力を保持し、成功した場合のみクリアします。フォーム入力を localStorage やログに保存する処理はありません。

設定済みのフォーム ID は `myeevpkj`、送信先は `https://formspree.io/f/myeevpkj` です。ローカルは `.env.example` を `.env.local` にコピーして設定します。公開前に repository variable `NEXT_PUBLIC_FORMSPREE_FORM_ID=myeevpkj` を設定してください。通知先は Formspree 管理画面で管理します。2026-11-05 に承認済みのダミー送信 1 件が HTTP 200 で受け付けられ、指定通知先の受信トレイへの到着を確認しました。
