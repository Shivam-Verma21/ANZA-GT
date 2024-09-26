const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
  //video-container
  var videoContainer = document.getElementById("video-container");
  videoContainer.style.display = "none";

  //navigation
  var navigation = document.getElementById("navigation");
  // navigation.style.display = "block";
  navigation.classList.toggle("show");

  //   if (navigation.style.display === "block") {
  //     navigation.style.display = "none";
  // } else {
  //     navigation.style.display = "block";
  // }
})


const closeIcon = document.getElementById("close-icon");
closeIcon.addEventListener("click",()=>{
  //video-container
  var videoContainer = document.getElementById("video-container");
  videoContainer.style.display = "block";

  //navigation
  var navigation = document.getElementById("navigation");
  // navigation.style.display = "none";
  navigation.classList.toggle("show");

  // navigation.classList.add("navigationClose");

})
