$(document).ready(function() {
    var btn = $(".button");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
});

function audioInviz() {
    var audio = document.getElementById("audio");
    audio.style.opacity = "0";
  
}

