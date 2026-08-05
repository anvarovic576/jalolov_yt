function xabar() {
  alert("Jalolov News saytiga xush kelibsiz!");
}const search = document.getElementById("search");

search.addEventListener("keyup", function() {
  let value = search.value.toLowerCase();
  let news = document.querySelectorAll(".news");

  news.forEach(item => {
    let text = item.innerText.toLowerCase();

    if (text.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
function likeNews() {
  alert("Yangilik yoqdi 👍");
}
// Sana va vaqtni chiqarish
function showTime() {
  const now = new Date();

  const vaqt =
    now.toLocaleDateString("uz-UZ") + " " +
    now.toLocaleTimeString("uz-UZ");

  document.getElementById("time").innerHTML = vaqt;
}

setInterval(showTime, 1000);
showTime();
function darkMode() {
  document.body.classList.toggle("dark");
}
