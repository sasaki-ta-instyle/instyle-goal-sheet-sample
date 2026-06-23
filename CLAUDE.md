@AGENTS.md

# ig-goal-sheet-sample

INSTYLE GROUP が実運用している目標設定シート（`instyle-goal-sheet-2026-04` / `-2026-10`）の **採用候補者向け見本版**。採用サイトからのリンク先として「うちはこういうシートで社員を評価しています」を伝えるためのフォーク。

実運用版との差分:

1. 保存系（JSON 書き出し / 部署目標書き出し / JSON 読み込み / URL シェア発行 / localStorage 自動保存）を全削除
2. 架空社員「〇〇 〇〇（G3 / INSTYLE GROUP / 2026.4〜9）」の記入例を初期表示
3. ヘッダーコピーと metadata を採用見本仕様に差し替え

## デプロイ設定（Claude Code 用）

ConoHa VPS 上で本番運用する。本番反映は **「本番にあげて」** の指示で起動する（ワークスペース CLAUDE.md の「ConoHa 本番デプロイ」節を参照）。

| キー | 値 |
|---|---|
| CATEGORY | `crhr` |
| APP_NAME | `ig-goal-sheet-sample` |
| PORT | `3201` |
| 公開URL | `https://crhr.instyle.group/ig-goal-sheet-sample/` |
| HEALTHCHECK_PATH | `/ig-goal-sheet-sample/`（ルート判定。`/api/health` は未実装） |
| USE_DB | `false` |
| PM2名 | `crhr-ig-goal-sheet-sample` |
| サーバ側パス | `/var/www/crhr/ig-goal-sheet-sample/` |
| アプリ固有 env | `/var/www/_shared/apps/crhr-ig-goal-sheet-sample.env` |
| プレビュー (Vercel) | `<repo>.vercel.app`（basePath は Vercel 上では無効化） |

## ローカル開発

```bash
npm install
npm run dev
# http://localhost:3000/ig-goal-sheet-sample/ でアクセス（basePath 込み）
```

## 本番デプロイ

「本番にあげて」と Claude Code に指示すると、`gh workflow run deploy-prod.yml --ref main` で GitHub Actions が走り、ConoHa VPS にデプロイされる。

手動で起動する場合:
```bash
gh workflow run deploy-prod.yml --ref main
gh run watch
```

## ロールバック

GitHub Actions 側のヘルスチェック失敗時は自動で前 release に戻る。手動で戻す場合:

```bash
ssh conoha-deploy
cd /var/www/crhr/ig-goal-sheet-sample/releases
ls -lt
ln -sfn <previous-sha> ../current.new && mv -T ../current.new ../current
pm2 reload crhr-ig-goal-sheet-sample --update-env
```

## デプロイ前提（初回のみ必要）

- ConoHa VPS 初期セットアップ（`~/Workspace/docs/conoha-setup.md`）
- DNS: `crhr.instyle.group` → `160.251.201.115`
- GitHub 組織 Secrets: `CONOHA_HOST` / `CONOHA_PORT` / `CONOHA_USER` / `CONOHA_SSH_KEY`
- リポジトリ Variables: `CATEGORY=crhr` / `APP_NAME=ig-goal-sheet-sample` / `HEALTHCHECK_PATH=/ig-goal-sheet-sample/` / `USE_DB=false`
- ConoHa 側:
  - `/var/www/crhr/ig-goal-sheet-sample/{releases,shared}` 作成（オーナー deploy）
  - `/var/www/_shared/apps/crhr-ig-goal-sheet-sample.env` 配置（必要なら）
  - `/etc/nginx/conf.d/proxy-apps/crhr/ig-goal-sheet-sample.conf` に以下を作成（exact + `^~` prefix の 2 段で trailing-slash ループ回避）:
    ```nginx
    location = /ig-goal-sheet-sample {
      include snippets/proxy-next.conf;
      proxy_pass http://127.0.0.1:3201;
    }
    location ^~ /ig-goal-sheet-sample/ {
      include snippets/proxy-next.conf;
      proxy_pass http://127.0.0.1:3201;
    }
    ```
  - `nginx -t && systemctl reload nginx`
- ConoHa ポート台帳（`~/Workspace/docs/conoha-port-registry.md`）に下記 active 行を追加:
  ```
  | active | crhr | ig-goal-sheet-sample | 3201 | crhr-ig-goal-sheet-sample | sasaki-ta-instyle/ig-goal-sheet-sample | https://crhr.instyle.group/ig-goal-sheet-sample/ | /ig-goal-sheet-sample/ | false | 2026-06-19 | 採用サイトリンク用見本版。実運用版 instyle-goal-sheet-2026-04 / -2026-10 のフォーク |
  ```
