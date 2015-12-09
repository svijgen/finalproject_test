$(document).ready(function() {
	console.log("Ready!");

/*For History Page*/
$(".readmore").click(function(){
    event.preventDefault();


});

$(".readmore").click(readMore);
	function readMore() {
	$(".readmore").slideUp(400);
	$("#show-this-on-click").slideDown(400);
	$(".readless").slideDown(400);
}

$(".readless").click(function(){
    event.preventDefault();
});
$(".readless").click(readLess);
	function readLess() {
	$("#show-this-on-click").slideUp(400);
	$(".readless").slideUp(400);
	$(".readmore").show();
}

/*For Family Support Page*/
$(".readmore2").click(function(){
    event.preventDefault();


});
$(".readmore2").click(readMore2);
	function readMore2() {
	$(".readmore2").slideUp(400);
	$("#show-this-on-click2").slideDown(400);
	$(".readless2").slideDown(400);
}

$(".readless2").click(function(){
    event.preventDefault();
});
$(".readless2").click(readLess2);
	function readLess2() {
	$("#show-this-on-click2").slideUp(400);
	$(".readless2").slideUp(400);
	$(".readmore2").show();
}
/*For Commitments*/

$(".readmore3").click(function(){
    event.preventDefault();


});
$(".readmore3").click(readMore3);
	function readMore3() {
	$(".readmore3").slideUp(400);
	$("#show-this-on-click3").slideDown(400);
	$(".readless3").slideDown(400);
}

$(".readless3").click(function(){
    event.preventDefault();
});
$(".readless3").click(readLess3);
	function readLess3() {
	$("#show-this-on-click3").slideUp(400);
	$(".readless3").slideUp(400);
	$(".readmore3").show();
}


/* for the volunteer opps */
/*$('li:not(".q")').hide();

$('li.q').click(
	function(){
		$('li:not(".q")').slideUp();
		$(this).toggleClass('open');
	});
*/






/*For Nav Bar*/
$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);

var win      = $(window),
    fxel     = $('aside'),
    eloffset = fxel.offset().top;

win.scroll(function() {
    if (eloffset < win.scrollTop()) {
        fxel.addClass("fixed");
    } else {
        fxel.removeClass("fixed");
    }
});




/*For Hamburger*/
$("#pancake-menu").click(function() {
		$("nav ul").toggleClass("switch");

	});
});