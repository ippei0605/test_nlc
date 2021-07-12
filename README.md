# test_nlc

## はじめに
* これは Watson Natural Language Classifier の実験です。
* 複数システムのデータディクショナリーを分類器で効率化できないか検討してます。

## 分類器
* [こちら](./training-data.csv)の教師あり学習データにより分類器を作成しました。
* 次のコマンドで情報を取得できます。

    ```shell
    % node getClassifier 
    ```

## 分類
* 次のコマンドでテキストを分類します。

    ```shell
    % node classify
    ```
  
* 「住所6」を分類した結果、Top10で結果を取得できます。

    ```json
    {
      classifier_id: 'f153e2x282-nlc-857',
      url: 'https://api.jp-tok.natural-language-classifier.watson.cloud.ibm.com/instances/fd9ad2f7-cebe-45cb-a29a-7ba3947e6440/v1/classifiers/f153e2x282-nlc-857',
      text: '住所6',
      top_class: '住所',
      classes: [
        { class_name: '住所', confidence: 0.9791791933573004 },
        { class_name: '電話番号', confidence: 0.004796648430736545 },
        { class_name: '年収', confidence: 0.0032380148074097567 },
        { class_name: '会社', confidence: 0.002215989873250711 },
        { class_name: '年齢', confidence: 0.0021697865525811297 },
        { class_name: '名前', confidence: 0.001999267610168911 },
        { class_name: 'メールアドレス', confidence: 0.0015655795526403988 },
        { class_name: '会員ID', confidence: 0.0013709307485950076 },
        { class_name: '商品名', confidence: 0.0012004826674399994 },
        { class_name: 'ニックネーム', confidence: 0.0011725160881941202 }
      ]
    }
    ```

* [こちらのコード](./classify.js)の text の値を変更することで異なる結果が得られます。
* 1000回までは無料で実行できますので、後900回は実行しても問題ありません。

## まとめ
* Watson に限らず分類器はテキストを意図に分類することができ、教師あり学習データによりモデルを作成します。
* 論理的な列名をマッピングさせることも可能ですが、誤認識する場合もあります。
* IDやリレーションの列、使わない列など事前に処理または除外することで誤認識の機会を減らす工夫が必要かもしれません。
