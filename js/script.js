var currentAudio = null;
var oneShotMode = true;

function toggleMode() {
  oneShotMode = !oneShotMode;
  var button = document.querySelector(".mode-button");
  if (oneShotMode) {
    button.textContent = "One shot";
    button.classList.remove("normal-mode");
    button.classList.add("one-shot-mode");
  } else {
    button.textContent = "Normal";
    button.classList.remove("one-shot-mode");
    button.classList.add("normal-mode");
  }
}

// ボリュームスライダーの関数定義
var volumeSlider = document.getElementById("volume-slider");

volumeSlider.addEventListener("input", function() {
  var volume = volumeSlider.value / 100; // 0から1の範囲に変換
  currentAudio.volume = volume; // 音量を設定
});

// playsound 関数の定義
function playSound(soundFile) {
  // 新しい音声を作成
  var audio = new Audio(soundFile);

  // ボリュームバーの値を取得
  var volume = volumeSlider.value / 100;

  // ボリュームを設定
  audio.volume = volume;

  // 通常モードの場合、現在再生中の音声を停止する
  if (!oneShotMode && currentAudio !== null) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  // 現在再生中の音声を更新する
  currentAudio = audio;

  // 音声を再生
  audio.play();

}

// ボタンをクリックしたときにランダムな音源を再生する関数
function playRandomSound(soundFile1, soundFile2) {
// 25%の確率でSoundfile1、それ以外の場合はSoundfile2を再生する
  if (Math.random() < 0.25) {
    playSound(soundFile1);
  } else {
    playSound(soundFile2);
  }
}