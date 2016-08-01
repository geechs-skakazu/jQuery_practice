//sample1
// $(function(){
// 	$("ul.panel li:not("+$("ul.tab li a.selected").attr("href")+")").hide()
// 	$("ul.tab li a").click(function(){
// 		$("ul.tab li a").removeClass("selected");
// 		$(this).addClass("selected");
// 		$("ul.panel li").hide();
// 		$($(this).attr("href")).show();
// 		return false;
// 	});
// });

//sample2
// $(function(){
// 	$("ul.panel li:not("+$("ul.tab li a.selected").attr("href")+")").hide();
// 	$("ul.tab li a").click(function(){
// 		$("ul.tab li a").removeClass("selected");
// 		$(this).addClass("selected");
// 		$("ul.panel li").slideUp("fast");
// 		$($(this).attr("href")).slideDown("fast");
// 		return false;
// 	});
// });

//sample3
$(function(){
	$("p.panel").load($("ul.tab li a.selected").attr("href"));
	$("ul.tab li a").click(function(){
		$("ul.tab li a").removeClass("selected");
		$(this).addClass("selected");
		$("p.panel").load($(this).attr("href"));
		return false;
	});
});