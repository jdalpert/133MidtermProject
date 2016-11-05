var slideCount = 0;
var imageLength = 0;
startSlideShow();

function startSlideShow() {
  var images = document.getElementsByClassName("aboutme-img");
  imageLength = images.length;
  for (var i = 0; i < images.length; i++)
    images[i].style.display = "none";
  images[slideCount].style.display = "block"; 
}

function goBack(){
  if(slideCount !== 0)
  	slideCount--;
  else
  	slideCount = imageLength - 1;
  startSlideShow();
}

function goForward(){
  if(slideCount !== imageLength - 1)
  	slideCount++;
  else
  	slideCount = 0;
  startSlideShow();
}