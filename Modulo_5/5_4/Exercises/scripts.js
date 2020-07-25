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

  fontSelector = document.querySelector("#font-selector")

  fontSelector.addEventListener("change", function(event) {
    document.body.style.fontFamily = fontSelector.value
  })

  let saveSettings = document.querySelector("#save-settings")

  saveSettings.addEventListener("click", function(event) {
    localStorage.setItem("font-size",article.style.fontSize)
    localStorage.setItem("line-height",article.style.lineHeight)
    localStorage.setItem("background-color",document.body.style.backgroundColor )
    localStorage.setItem("text-color", document.body.style.color)
    localStorage.setItem("font-family",document.body.style.fontFamily)
  })

  function loadSettings() {
    if (localStorage.length > 0) {
      article.style.fontSize = localStorage.getItem("font-size")
      
      article.style.lineHeight = localStorage.getItem("line-height")

      document.body.style.backgroundColor = localStorage.getItem("background-color")

      document.body.style.color = localStorage.getItem("text-color")

      document.body.style.fontFamily = localStorage.getItem("font-family")
    }
  }
  loadSettings()  
}