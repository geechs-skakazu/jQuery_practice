//sample1
// $(function(){
// 	$("span.tooltip").css({
// 		opacity:"0.9",
// 		position:"absolute",
// 		display:"none"
// 	});
// 	$("a").mouseover(function(){
// 		$("span.tooltip").fadeIn();
// 	}).mouseout(function(){
// 		$("span.tooltip").fadeOut();
// 	}).mousemove(function(e){
// 		$("span.tooltip").css({
// 			"top":e.pageY+10+"px",
// 			"left":e.pageX+10+"px"
// 		});
// 	});
// });

//sample2
// $(function(){
// 	$("div.tooltip").css("opacity","0.9").hide();
// 	$("a").mouseover(function(){
// 		$("div.tooltip").fadeIn().css({
// 			"top":$(this).offset().top-20+"px",
// 			"left":$(this).offset().left+$(this).width()+"px"
// 		});
// 	}).mouseout(function(){
// 		$("div.tooltip").fadeOut();
// 	});
// });

//sample3
$(function(){
	$("p.tooltip").hide();
	$("a").mouseover(function(){
		$("p.tooltip").show().css({
			"top":$(this).offset().top-20+"px",
			"left":$(this).offset().left+$(this).width()+10+"px"
		});
	}).mouseout(function(){
		setTimeout(function(){
			$("p.tooltip").hide();
		},3000);
	});
});