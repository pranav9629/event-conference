
// conetnt of menu - functionality

	$(".home-content").hide();
	$(".conf-content").hide();
	$(".reg-content").hide();
	$(".acc-content").hide();
	$(".contact-content").hide();

$(".home").click(function(){
	$(".home-content").fadeIn();
	$(".conf-content").hide();
	$(".reg-content").hide();
	$(".acc-content").hide();
	$(".contact-content").hide();
});

$(".conf").click(function(){
	$(".home-content").hide();
	$(".conf-content").fadeIn();
	$(".reg-content").hide();
	$(".acc-content").hide();
	$(".contact-content").hide();
});

$(".reg").click(function(){
	$(".home-content").hide();
	$(".conf-content").hide();
	$(".reg-content").fadeIn();
	$(".acc-content").hide();
	$(".contact-content").hide();
});

$(".acc").click(function(){
	$(".home-content").hide();
	$(".conf-content").hide();
	$(".reg-content").hide();
	$(".acc-content").fadeIn();
	$(".contact-content").hide();
});

$(".contact").click(function(){
	$(".home-content").hide();
	$(".conf-content").hide();
	$(".reg-content").hide();
	$(".acc-content").hide();
	$(".contact-content").fadeIn();
});

// functionality over List of published articles-2018 section

$(".article").mouseover(function(){
  $(this).addClass("active");
});

$(".article").mouseout(function(){
  $(this).removeClass("active");
});