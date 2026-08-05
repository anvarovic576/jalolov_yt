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
