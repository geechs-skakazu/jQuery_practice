//sample1
// $(function(){
// 	$("img.rollover").mouseover(function(){
// 		$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
// 	}).mouseout(function(){
// 		$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
// 	}).each(function(){
// 		$("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
// 	});
// });

//sample4
$(function(){
	$("img.rollover").each(function(){
		$("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
	});
	
	if($.browser.msie && $.browser.version<7){
		$("img.rollover").each(function(){
			
			$(this)
				.data("src",$(this).attr("src"))
				.attr("src","images/transparent.gif")
				.css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+$(this).data("src")+"',sizingMethod='scale')");
			
		}).mouseover(function(){
			$(this).css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+$(this).data("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2")+"',sizingMethod='scale')");
		}).mouseout(function(){
			$(this).css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+$(this).data("src")+"',sizingMethod='scale')");
		});
		
	}else{
		$("img.rollover").mouseover(function(){
			$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
		}).mouseout(function(){
			$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
		});
	}
});