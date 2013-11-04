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
    // Animate progress bars
    $(function(){
			$('.progress .progress-bar').each(function() {
				var bar = $(this);
				var perc = bar.attr("aria-valuenow");
				var current_perc = 0;
	            var progress = setInterval(function() {
					if (current_perc>=perc) {
						clearInterval(progress);
					} else {
						current_perc +=1;
						bar.css('width', (current_perc)+'%');
					}
				}, 0);
			});
		});
});