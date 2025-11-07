# Illustrator ExtendScript サンプルコード集

Adobe Illustrator用のExtendScriptで作成された、フラクタルや幾何学的パターンを生成するサンプルコード集です。

## 必要な環境

- Adobe Illustrator（ExtendScript対応バージョン）
- ExtendScript Toolkit（デバッグ用、オプション）

## 使い方

1. Adobe Illustratorを起動します
2. メニューから `ファイル` → `スクリプト` → `その他のスクリプト...` を選択します
3. 実行したいサンプルの `main.jsx` ファイルを選択します
4. スクリプトが実行され、新しいドキュメントにパターンが生成されます

## プロジェクト構造

各サンプルディレクトリには以下の構造があります：

```
サンプル名/
├── main.jsx          # メインスクリプト（実行ファイル）
├── Sketch.ai        # 生成されたIllustratorファイル
├── Sketch.jpg       # 生成結果の画像
└── tn/              # ユーティリティライブラリ
    ├── color/       # カラー関連ユーティリティ
    ├── document/    # ドキュメント操作ユーティリティ
    ├── geom/        # 幾何学計算ユーティリティ
    ├── io/          # 入出力関連ユーティリティ
    ├── path/        # パス操作ユーティリティ
    ├── system/      # システム関連ユーティリティ
    └── util/        # 汎用ユーティリティ
```

