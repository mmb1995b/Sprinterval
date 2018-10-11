var prev = document.getElementById("prev");
var next = document.getElementById("next");
var image = document.getElementById("image");

// store image paths in an array
var images = ["Shells.jpg", "Radnor.jpg", "Llamas.jpg", "Elefeet.jpg"];

var imageIndex = 0;
// point to previous image when prev button is clicked
prev.onclick = function(){
  // set image to highest index when moving past 0
  if(imageIndex == 0){
    imageIndex = images.length - 1;
  }
  else{
    imageIndex--;
  }
  image.setAttribute("src", images[imageIndex]);
}
// point to next image when next button is clicked
next.onclick = function(){
  // set image index to 0 when moving past max index
  if(imageIndex == images.length - 1){
    imageIndex = 0;
  }
  else{
    imageIndex++;
  }
  image.setAttribute("src", images[imageIndex]);
}