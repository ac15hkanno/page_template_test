fetch('./content.md')
  .then(response => response.text())  // レスポンスボディをテキストとして読み込む
  .then((text) => {
    const html = marked.parse(text);  // テキストをHTMLに変換
    document.getElementById('content-area').innerHTML = html;  // 変換したHTMLをDOMに挿入
  })
  .catch((error) => {
    console.error('Error:', error);
  });
