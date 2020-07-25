window.onload = function() {
  let buttonPlus = document.querySelector("#add-fontsize");
  let buttonLess = document.querySelector("#subtract-fontsize");
  let article = document.querySelector(".article")
  article.style.fontSize = "12px"

  buttonPlus.addEventListener("click",function(event) {
    article.style.fontSize = parseInt(article.style.fontSize) + 2 + "px"
  })

  buttonLess.addEventListener("click", function(event) {
    article.style.fontSize = parseInt(article.style.fontSize) - 2 + "px"
  })
}