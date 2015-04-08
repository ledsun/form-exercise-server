# form作成の練習に使うサーバー

HTML formからの入力値をHTMLに整形します。

HTML formのパラメーターを変えたときの動きの変化を確認しやすい環境を用意しました。
パラメーターを変えて動かしてみることで、formへの理解を深める事を期待しています。

[デプロイ先](https://form-exercise.herokuapp.com/)

## Usage

次のようなフォームを用意し、値をsubmitすると送信された値を表示します。

```html
GET
<form class="" action="https://form-exercise.herokuapp.com/">
    <input type="submit" value="submit">
    <input type="text" name="name" value="1">
</form>

POST
<form class="" action="https://form-exercise.herokuapp.com/" method="post">
    <input type="submit" value="submit">
    <input type="text" name="name" value="1">
</form>
```

例えばGETのボタンを押すと
https://form-exercise.herokuapp.com/?name=1
が表示されます。
