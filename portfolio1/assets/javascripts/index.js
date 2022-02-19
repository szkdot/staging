//要素を取得
//ボタン類
const enterBtn = document.getElementById('enterBtn');
const homeBtn = document.getElementById('homeBtn');
const profileBtn = document.getElementById('profileBtn');
//コンテナ類
const enter = document.getElementById('enter');
const shortcut = document.getElementById('shortcut');
const home = document.getElementById('home');
const profile = document.getElementById('profile');
//コンテンツ類
const heading = document.getElementById('heading');
const name = document.getElementById('name');
const homeMessage = document.getElementById('homeMessage');
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const message3 = document.getElementById('message3');
const message4 = document.getElementById('message4');

//フォーカスを固定
const enterFocus = function() {
  enterBtn.focus();
};

//表示切替
const pressEnter = function() {
  enter.style.display = 'none';
  profile.style.display = 'none';
  shortcut.style.display = 'flex';
};

const showHome = function() {
  home.style.display = 'flex';
  profile.style.display = 'none';
};

const showProfile = function() {
  home.style.display = 'none';
  profile.style.display = 'flex';
};

//イベントハンドラ
enterBtn.addEventListener('blur', enterFocus);
enterBtn.addEventListener('click', pressEnter);
homeBtn.addEventListener('click', showHome);
profileBtn.addEventListener('click', showProfile);