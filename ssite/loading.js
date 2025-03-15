//ローディング画面を取得
const loading = document.querySelector(".loading");

//ページの読み込み完了時に処理を実行
window.addEventListener("load", () => {
  //3秒後にローディング画面を非表示にする
setTimeout(() => {
    loading.classList.add("loaded");
}, 3000);
});