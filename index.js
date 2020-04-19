$(window).on('load', function() {
    var animation = bodymovin.loadAnimation({
      container: document.getElementById("fight"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://assets7.lottiefiles.com/packages/lf20_qfwtS6.json"
    });
  
    setTimeout(function () {
      animation.play();
    }, 2000);
  
    AOS.init({
      offset: -120,
      delay: 1000,
      duration: 1200
    });
  });
  
  (function ($) {
    "use strict";
  
    //Page cursors
  
    document
      .getElementsByTagName("body")[0]
      .addEventListener("mousemove", function (n) {
        (t.style.left = n.clientX + "px"),
          (t.style.top = n.clientY + "px"),
          (e.style.left = n.clientX + "px"),
          (e.style.top = n.clientY + "px"),
          (i.style.left = n.clientX + "px"),
          (i.style.top = n.clientY + "px");
      });
    var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
    function n(t) {
      e.classList.add("hover"), i.classList.add("hover");
    }
    function s(t) {
      e.classList.remove("hover"), i.classList.remove("hover");
    }
    s();
    for (
      var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
      a >= 0;
      a--
    ) {
      o(r[a]);
    }
    function o(t) {
      t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
    }
  })(jQuery);
  