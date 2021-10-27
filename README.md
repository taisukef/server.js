# server.js

- [Deno](https:/deno.land)をインストールする。本リポジトリをクローンする。ブランチを bbs_with_login に変更する。
- 参考ハンズオンスライド、[JavaScript (Deno) でつくる超かんたんwebアプリ入門](https://taisukef.github.io/server.js/JavaScript(Deno)%E3%81%A7web%E3%82%A2%E3%83%97%E3%83%AA%E5%85%A5%E9%96%80.pdf)

## 動かし方

```bash
deno run -A server.js
```

[http://localhost:8001](http://localhost:8001) をブラウザで開く。

## データ

- user.json : ユーザー管理データ（名前、パスワード、セッションキー）
- bbs.json : 書き込みデータ

## 参考

- [バックエンドにデータベース、PostgreSQLを使う方法](https://github.com/code4fukui/DB_PostgreSQL)

