const express = require('express');
const request = require('request');  // requestモジュールをインポート
const app = express();

// QRコードを生成するエンドポイント
app.get('/generate-qrcode', (req, res) => {
  // 固定のQRコードURLを使用
  const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ccampus.org';

  // QRコード画像をリクエスト
  request(qrCodeUrl, { encoding: null }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // 成功した場合、画像をレスポンスとして返す
      res.set('Content-Type', 'image/png');
      res.send(body);  // QRコード画像を送信
    } else {
      // エラーが発生した場合、エラーメッセージを返す
      res.status(500).json({ error: 'QRコードの生成に失敗しました。' });
    }
  });
});
