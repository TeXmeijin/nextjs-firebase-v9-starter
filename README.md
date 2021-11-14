## Next.js Firebase(v9) Chakra UI Starter

Next.jsをベースに、Firebase JS SDKとChakra UIをセットアップしたリポジトリです。

### set up

- firebaseプロジェクトを新規作成してください
- `/firebase`ディレクトリにてFirebaseの設定ファイルを設置しています
- `.env.local.example`を`.env.local`にコピーしてFirebaseの環境変数を記入してください。
- `yarn dev`で立ち上がります

#### firebaseの新規PJでやること

- メールアドレス認証をONにする
- Firestoreを正しいリージョンで立ち上げる
- プロジェクトの表示名をサービス名にする

### how to use

`/login`ページでメールアドレスを入力するとメールリンク認証のメールが届くのでクリックするとログインが完了します
ヘッダーにログアウトボタンが出るので、ログアウトも可能になります