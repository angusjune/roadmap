document.addEventListener("touchstart", function() {}, true);

var $dot = $('.event .dot'),
  $event = $('.event'),
  $content = $('.content-inner'),
  $month = $('.event--month');


$dot.each(function(index) {
  var t = $(this);
  t.attr('data-scroll-reveal', 'wait 0.2s, then enter from the bottom over 0.2s');
});

$content.each(function(inedex) {
  var t = $(this);
  t.attr('data-scroll-reveal', 'wait 0.3s, then enter from the bottom over 0.3s');
});

window.scrollReveal = new scrollReveal();
