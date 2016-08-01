//sample1
// $(function(){
// 	$("img[src='images/jquery.jpg']").mouseover(function(){
// 		$(this).attr("src","images/jquery_on.jpg");
// 	}).mouseout(function(){
// 		$(this).attr("src","images/jquery.jpg");
// 	});

// 	$("img[src='images/javascript.jpg']").mouseover(function(){
// 		$(this).attr("src","images/javascript_on.jpg");
// 	}).mouseout(function(){
// 		$(this).attr("src","images/javascript.jpg");
// 	});

// 	$("img[src='images/css.jpg']").mouseover(function(){
// 		$(this).attr("src","images/css_on.jpg");
// 	}).mouseout(function(){
// 		$(this).attr("src","images/css.jpg");
// 	});

// 	$("img[src='images/html.jpg']").mouseover(function(){
// 		$(this).attr("src","images/html_on.jpg");
// 	}).mouseout(function(){
// 		$(this).attr("src","images/html.jpg");
// 	});
// });


//sample2
// $(function(){
// 	$("img.rollover").mouseover(function(){
// 		$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
// 	}).mouseout(function(){
// 		$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
// 	});
// });


//sample3
$(function(){
	$("img.rollover").mouseover(function(){
		$(this).attr("src",$(this).attr("src")
				.replace(/^(.+)(¥.[a-z]+)$/,"$1_on$2"));
	}).mouseout(function(){
		$(this).attr("src",$(this).attr("src")
				.replace(/^(.+)_on(\.[a-z]+)$/,"$1$2"));
	}).each(function(){
		$("<img>").attr("src",$(this).attr("src")
				.replace(/^(.+)(\.[a-z]+)$/,"$1_on$2"));
	});
});
