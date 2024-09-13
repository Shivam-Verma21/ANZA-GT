const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
  //video-container
  var videoContainer = document.getElementById("video-container");
  videoContainer.style.display = "none";

  //navigation
  var navigation = document.getElementById("navigation");
  navigation.style.display = "block";

  // close-icon
  var closeIcon = document.getElementById("close-icon");
  closeIcon.style.display = "block";

  //content
  var content = document.getElementById("content");
  content.style.display = "none";

  //carousel
  var carousel = document.getElementById("carousel");
  carousel.style.display = "none";

  //contentv2
  var contentv2 = document.getElementById("contentv2");
  contentv2.style.display = "none";

  //footer
  var footer = document.getElementById("footer");
  footer.style.display = "none";

  //copyright
  var copyright = document.getElementById("copyright");
  copyright.style.display = "none";
})


const closeIcon = document.getElementById("close-icon");
closeIcon.addEventListener("click",()=>{
  //video-container
  var videoContainer = document.getElementById("video-container");
  videoContainer.style.display = "block";

  //navigation
  var navigation = document.getElementById("navigation");
  navigation.style.display = "none";

  // close-icon
  var closeIcon = document.getElementById("close-icon");
  closeIcon.style.display = "none";

  //content
  var content = document.getElementById("content");
  content.style.display = "block";

  //carousel
  var carousel = document.getElementById("carousel");
  carousel.style.display = "block";

  //contentv2
  var contentv2 = document.getElementById("contentv2");
  contentv2.style.display = "block";

  //footer
  var footer = document.getElementById("footer");
  footer.style.display = "block";

  //copyright
  var copyright = document.getElementById("copyright");
  copyright.style.display = "block";
})
