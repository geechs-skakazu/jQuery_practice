//sample1
// $(function(){
// 	$("dd:not(:first)").css("display","none");
// 	$("dl dt").click(function(){
// 		if($("+dd",this).css("display")=="none"){
// 			$("dd").slideUp("slow");
// 			$("+dd",this).slideDown("slow");
// 		}
// 	});
// });

//sample2
// $(function(){
// 	$("dd:not(:first)").css("display","none");
// 	$("dt:first").addClass("selected");
// 	$("dl dt").click(function(){
// 		if($("+dd",this).css("display")=="none"){
// 			$("dd").slideUp("slow");
// 			$("+dd",this).slideDown("slow");
// 			$("dt").removeClass("selected");
// 			$(this).addClass("selected");
// 		}
// 	}).mouseover(function(){
// 		$(this).addClass("over");
// 	}).mouseout(function(){
// 		$(this).removeClass("over");
// 	});
// });

//sample3
$(function(){
	$("dd:not(:first)").css("width","0px");
	$("dt:first span").addClass("selected");
	$("dl dt").click(function(){
		if($("+dd",this).css("width")=="0px"){
			$("dt:has(.selected) +dd").animate({"width":"0px"});
			$("+dd",this).animate({"width":"695px"});
			$("dt span").removeClass("selected");
			$("span",this).addClass("selected");
		}
	}).mouseover(function(){
		$("span",this).addClass("over");
	}).mouseout(function(){
		$("span",this).removeClass("over");
	});
});

