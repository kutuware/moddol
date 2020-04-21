$(window).on("load", function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("json"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "designinsider.json",
  });
});
