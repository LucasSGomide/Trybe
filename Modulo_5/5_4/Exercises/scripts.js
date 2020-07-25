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

  let buttonMoreHeight = document.querySelector("#add-lineHeight")
  let buttonLessHeight = document.querySelector("#subtract-lineHeight")
  article.style.lineHeight = "14px"

  buttonMoreHeight.addEventListener("click", function(event) {
    article.style.lineHeight = parseInt(article.style.lineHeight) + 2 + "px"
  })

  buttonLessHeight.addEventListener("click", function(event) {
    article.style.lineHeight = parseInt(article.style.lineHeight) - 2 + "px"
  })

  colorInput = document.querySelector("#color-input")

  colorInput.addEventListener("change", function(event) {
    document.body.style.backgroundColor = colorInput.value 
  })

  textColor = document.querySelector("#text-color")

  textColor.addEventListener("change", function(event) {
    document.body.style.color = textColor.value 
  })

}