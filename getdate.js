window.onload = function (event) {
  document.getElementById("scroll-to-top").style.display= "none";

  //togger btn color effect
  document.getElementById("togglerbtn").addEventListener("mouseover", function () {
    document.getElementById("togglersvg").setAttribute("fill", "#1fb5da");
  });
  document.getElementById("togglerbtn").addEventListener("mouseout", function () {
    document.getElementById("togglersvg").setAttribute("fill", "white");
  });
  // scroll bottom to appear click to scroll button

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if ( currentScrollPos <= 300) {
      document.getElementById("scroll-to-top").style.display= "none";
      
    } else {
      document.getElementById("scroll-to-top").style.display= "block";
    }
    prevScrollpos = currentScrollPos;
  }
// load date
  getDate();

};