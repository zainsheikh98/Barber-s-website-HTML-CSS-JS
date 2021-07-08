$(document).ready(() => {
  $(".nav-link").on("click", function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
  $(window).scroll(function () {
    var position_top = $(document).scrollTop();
    console.log(position_top);
    if (position_top >= 447 && position_top <= 1500) {
      $("#services").addClass("animated bounceInRight");
    }
    if (position_top >= 1500 && position_top <= 1800) {
      $("#about").addClass("animated zoomInDown");
    }
    if (position_top >= 1800 && position_top <= 3600) {
      $("#barbers").addClass("animated bounceInLeft");
    }
    if (position_top >= 3600 && position_top <= 4000) {
      $("#appointment").addClass("animated bounceInUp");
    }
    if (position_top >= 4000 && position_top <= 4500) {
      $("#footer").addClass("animated bounceInDown");
    }
  });
});
