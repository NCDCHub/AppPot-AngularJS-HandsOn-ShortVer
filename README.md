# AppPot-AngularJS-HandsOn-ShortVer

AppPotとAngularJS v1を使ってバックエンドのDBにアクセスするアプリを作成するハンズオン用のコードセットです。

## ハンズオン用テキスト


## ディレクトリ構成
```
AppPot-AngularJS-HandsOn-ShortVer
├── exercise01                            ... エクササイズ1の解答コード
├── exercise02                            ... エクササイズ2の解答コード
├── exercise03                            ... エクササイズ3の解答コード
└── work                                  ... 今回のハンズオンで作業してもらうディレクトリ
　　└── www                               ... Webサーバーのドキュメントルート           
        ├── components                    ... 実装モジュールを配置するルート
        │   ├── app.js                    ... AngularJSのエントリポイント
        │   ├── auth                      ... 認証機能のモジュールを配置
        │   │   ├── login.css             ... ログイン画面用のCSS
        │   │   ├── login.html            ... ログイン画面
        │   │   └── LoginController.js    ... ログイン関連処理を実装したController
        │   ├── config.js                 ... AppPot接続とSDK利用のための設定
        │   ├── helper.js                 ... 軽微な処理用のヘルパー関数郡
        │   └── customer                  ... Customerテーブルにアクセスする機能のモジュールを配置
        │       ├── customerDetail.html   ... 登録・編集画面
        │       └── customerList.html     ... 一覧表示画面
        ├── index.html                    ... アクセスするルートページ
        └── lib                           ... 外部ライブラリを配置
            ├── angular                   ... AngularJSに関するライブラリを配置
            ├── apppot                    ... AppPotに関するライブラリを配置
            ├── bootstrap                 ... Bootstrapに関するライブラリを配置
            └── ui-bootstrap              ... AngularJSにBootstrapを組み込むためのライブラリを配置
```
