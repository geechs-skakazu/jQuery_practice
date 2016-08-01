//sample1

$(function(){	
	$("#content").load($("ul.pager li a:first").attr("href")+" #content");
	$("ul.pager li a:first").addClass("selected");
	
	$("ul.pager li a").click(function(){
		
		$("#content").html('<p class="loading"><img src="images/loading.gif" alt="" /></p>');
		
		$("#content").data("file",$(this).attr("href"));
		
		$('html,body').animate({ scrollTop: $("h1").offset().top-20 }, 'slow','swing',function(){
			$("#content").load($("#content").data("file")+" #content");
		})
		
		$("ul.pager li a").removeClass("selected");
		$(this).addClass("selected");
		return false;
	});
});
