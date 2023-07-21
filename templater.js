fetch('./content.md')
  .then(response => response.text())  // レスポンスボディをテキストとして読み込む
  .then((text) => {
    const html = marked.parse(text);  // テキストをHTMLに変換
    const content = document.createElement('div')
    const contentArea = document.getElementById('content-area').prepend(content)
    content.innerHTML = html;  // 変換したHTMLをDOMに挿入
  })
  .catch((error) => {
    console.error('Error:', error);
  });
