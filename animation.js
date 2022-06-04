let header = document.getElementById('header');
let degree = 0; // 角度を入れる変数を宣言
function rotateHeader() { // 左記関数を呼び出す毎にその角度を6ずつ足し、それをCSSのスタイルとして設定している
  degree = degree + 6;
  degree = degree % 360;
  if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
    header.setAttribute('class', 'face');
  } else {
    header.setAttribute('class', 'back');
  }
  header.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateHeader, 20); // setInterval関数を使い、rotateHeader関数を20ミリ秒ごとに繰り返し実行している