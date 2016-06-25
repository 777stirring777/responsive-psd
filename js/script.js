$(function(){
  resizeSquare();
  $(window).on('resize', resizeSquare);

});

function resizeSquare(){
  console.log(22);
  var elm = $('.promo .row div:nth-child(1)');
  var height = elm.next().innerHeight();
  elm.css({
    height: height,
    'line-height': height + 'px'
  });
}