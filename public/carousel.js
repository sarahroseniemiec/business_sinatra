// home page image carousel

  // img variables saved
  var hcarImg = document.getElementById("hcarImg");

  // setting first image
  hcarImg.setAttribute("src", "/images/carouselImg1.jpg")

  setInterval(function() {

    if (hcarImg.getAttribute("src") == "/images/carouselImg1.jpg") {
      hcarImg.setAttribute("src", "/images/carouselImg2.jpg")
    }
    else if (hcarImg.getAttribute("src") == "/images/carouselImg2.jpg") {
      hcarImg.setAttribute("src", "/images/carouselImg3.jpg")
    }
    else if (hcarImg.getAttribute("src") == "/images/carouselImg3.jpg") {
      hcarImg.setAttribute("src", "/images/carouselImg1.jpg")
    }
    else {
      hcarImg.setAttribute("src", "/images/carouselImg1.jpg")
    }
  }, 4000);
