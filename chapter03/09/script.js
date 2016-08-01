//sample2
// $(function(){
// 	$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
	
// 	$("#glayLayer").click(function(){
// 		$(this).hide()
// 		$("#overLayer").hide();
// 	});
	
// 	$("a.modal").click(function(){
// 		$("#glayLayer").show();
// 		$("#overLayer").show().html("<img src='"+$(this).attr("href")+"' />");
// 		return false;
// 	});
	
// 	if($.browser.msie && $.browser.version<7){
// 		$(window).scroll(function(){
// 			$("#glayLayer").css('top',$(document).scrollTop());
// 			$("#overLayer").css('top',($(document).scrollTop()+$(window).height()/2) +"px");
// 		});
// 	}
	
// });


//sample3
// $(function(){
// 	$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
	
// 	$("#glayLayer").click(function(){
// 		$(this).hide();
// 		$("#overLayer").hide();
// 	});
	
// 	$("a.modal").click(function(){
// 		$("#glayLayer").show();
// 		$("#overLayer").show().html("<img src='"+$(this).attr("href")+"' />");
// 		return false;
// 	});
	
// 	if($.browser.msie && $.browser.version<7){
// 		$(window).scroll(function(){
// 			$("#glayLayer").get(0).style.setExpression("top","$(document).scrollTop()+'px'");
// 			$("#overLayer").get(0).style.setExpression("top","($(document).scrollTop()+$(window).height()/2)+'px'");
// 		});
// 	}
// });

//sample4
// $(function(){
// 	$("dd").hide()
// 	$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
	
// 	$("#glayLayer").click(function(){
// 		$(this).hide();
// 		$("#overLayer").hide();
// 	});
	
// 	$("dt").click(function(){
// 		$("#glayLayer").show()
// 		$("#overLayer").show().html($("+dd",this).html()).css({
// 			marginTop:"-"+$("#overLayer").height()/2+"px" , 
// 			marginLeft:"-"+$("#overLayer").width()/2+"px" 
// 		});
// 		return false;
// 	});
	
// 	if($.browser.msie && $.browser.version<7){
// 		$(window).scroll(function(){
// 			$("#glayLayer").get(0).style.setExpression("top","$(document).scrollTop()+'px'");
// 			$("#overLayer").get(0).style.setExpression("top","($(document).scrollTop()+$(window).height()/2)+'px'");
// 		});
// 	}
// });


//sample5
$(function(){
	$("dd").hide()
	$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
	
	$("#glayLayer").click(function(){
		$(this).hide();
		$("#overLayer").hide();
	});
	
	$("dt").click(function(){
		$("#glayLayer").show();
		$("#overLayer").show().html("<img src='images/close.png' class='close' />"+$("+dd",this).html()).css({
			marginTop:"-"+$("#overLayer").height()/2+"px" , 
			marginLeft:"-"+$("#overLayer").width()/2+"px" 
		});
		
		$("#overLayer img.close").click(function(){
			$("#glayLayer").hide();
			$("#overLayer").hide();
		});
		return false;
	});
	
	if($.browser.msie && $.browser.version<7){
		$(window).scroll(function(){
			$("#glayLayer").get(0).style.setExpression("top","$(document).scrollTop()+'px'");
			$("#overLayer").get(0).style.setExpression("top","($(document).scrollTop()+$(window).height()/2)+'px'");
		});
	}
});