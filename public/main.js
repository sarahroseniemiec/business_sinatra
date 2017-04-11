document.addEventListener("DOMContentLoaded", function (event) {
  // shop javascript
  var sModalOverlay = document.querySelector(".smodaloverlay")
  var sCloseButt = document.querySelectorAll(".sclosebutt")
  var sImageOne = document.querySelector("#simageone")
  var sImageTwo = document.querySelector("#simagetwo")
  var sImageThree = document.querySelector("#simagethree")
  var sImageFour = document.querySelector("#simagefour")
  var sImageFive = document.querySelector("#simagefive")
  var sImageSix = document.querySelector("#simagesix")
  var sImageSeven = document.querySelector("#simageseven")
  var sImageEight = document.querySelector("#simageeight")
  var sImageNine = document.querySelector("#simagenine")
  var sModalOne = document.querySelector("#smodalone")
  var sModalTwo = document.querySelector("#smodaltwo")
  var sModalThree = document.querySelector("#smodalthree")
  var sModalFour = document.querySelector("#smodalfour")
  var sModalFive = document.querySelector("#smodalfive")
  var sModalSix = document.querySelector("#smodalsix")
  var sModalSeven = document.querySelector("#smodalseven")
  var sModalEight = document.querySelector("#smodaleight")
  var sModalNine = document.querySelector("#smodalnine")

  sModalOverlay.style.display = "none"
  sModalOne.style.display = "none"
  sModalTwo.style.display = "none"
  sModalThree.style.display = "none"
  sModalFour.style.display = "none"
  sModalFive.style.display = "none"
  sModalSix.style.display = "none"
  sModalSeven.style.display = "none"
  sModalEight.style.display = "none"
  sModalNine.style.display = "none"

  sImageOne.addEventListener("click", function () {
    sModalOne.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  sImageTwo.addEventListener("click", function () {
    sModalTwo.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  sImageThree.addEventListener("click", function () {
    sModalThree.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  sImageFour.addEventListener("click", function () {
    sModalFour.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  sImageFive.addEventListener("click", function () {
    sModalFive.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  sImageSix.addEventListener("click", function () {
    sModalSix.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  sImageSeven.addEventListener("click", function () {
    sModalSeven.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  sImageEight.addEventListener("click", function () {
    sModalEight.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  sImageNine.addEventListener("click", function () {
    sModalNine.style.display = "block"
    sModalOverlay.style.display = "block"

  })

  for(var i = 0; i < sCloseButt.length; i++)
  {
    sCloseButt[i].addEventListener("click", function () {
      sModalOverlay.style.display = "none"
      sModalOne.style.display = "none"
      sModalTwo.style.display = "none"
      sModalThree.style.display = "none"
      sModalFour.style.display = "none"
      sModalFive.style.display = "none"
      sModalSix.style.display = "none"
      sModalSeven.style.display = "none"
      sModalEight.style.display = "none"
      sModalNine.style.display = "none"
    })
  }

















})
