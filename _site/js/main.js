$(document).ready(function() {
	var userID = "13852165";
	var accessToken = "13852165.1677ed0.43566eacef4b419dba014bb9c6af3318";
	var biggestWidth = 213;

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	setDivPosition(windowWidth, windowHeight);

	immixr(8, .4, userID, accessToken, biggestWidth);

	function setDivPosition(windowWidth, windowHeight) {

	  var elementWidth = $("div#info").width();
	  var elementHeight = $("div#info").height();

	  var leftPosition = (windowWidth - elementWidth) / 2;
	  var topPosition = (windowHeight - elementHeight) / 2;

	  $("#info").css({top: topPosition, left: leftPosition});

	}
});