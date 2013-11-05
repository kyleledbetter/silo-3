$(function(){
	// Scroll to bottom
	$(window).load(function() {
		$(".panel > .list-group").animate({ scrollTop: $('.list-group')[0].scrollHeight}, 1000);
	});
	// sidebar Toggle
	$(".sidebar-toggle").click(function(){
		$(".sidebar").toggleClass("active");
		$(".content").toggleClass("content-sidebar");
		$("body").toggleClass("body-sidebar");
		$(".header").toggleClass("header-sidebar");
		return false;
	});
	$('.sidebar').bind('clickoutside', function (event) {
		$(".sidebar").removeClass("active");
	});
	// aside Toggle
	$(".aside-toggle").click(function(){
		$(".aside").toggleClass("active");
		$(".content").toggleClass("content-aside");
		$("body").toggleClass("body-aside");
		$(".header").toggleClass("header-aside");
		return false;
	});
	$('.aside').bind('clickoutside', function (event) {
		$(".aside").removeClass("active");
	});
	// header Toggle
	$(".header-toggle").click(function(){
		$(".header, .content").toggleClass("active");
		return false;
	});
	// users Toggle
	$(".list-users a").click(function(){
		$(this).toggleClass("active");
		return false;
	});
	// New Column
	$("[data-toggle='slide']").click(function(){
		$(".slide-column").toggleClass("active");
		return false;
	});
	$(".toggle-textarea").click(function(){
		$(".form-1").focus();
		return false;
	});
	// Activate tooltip
    $("[data-toggle='tooltip'], .has-tooltip").tooltip({container: "body"});
    // Display sequential chat items
	var lis = $('.reveal-item').hide();
	$('.items-reveal').click(function() {
		var i = 0;
		(function displayItems() {
			var number = 3000 + Math.floor(Math.random() * 3);
			lis.eq(i++).fadeIn(number, displayItems);
		})();
	});

});