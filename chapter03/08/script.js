//sample1
// $(function(){
// 	$("ul.sub").hide();
// 	$("ul.menu li").hover(function(){
// 		$("ul:not(:animated)",this).slideDown("fast");
// 	},
// 	function(){
// 		$("ul",this).slideUp("fast");
// 	});
// });

//sample2
$(function(){
	$("ul.menu li").hover(function(){
		$(">ul:not(:animated)",this).slideDown("fast");
	},
	function(){
		$(">ul",this).slideUp("fast");
	});
});

