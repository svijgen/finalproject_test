$(document).ready(function() {
	console.log("Ready!");

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




});