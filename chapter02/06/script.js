//sample1
$(function(){
	$("button").click(function(){
		$("div").show("slow");
	});
});

//sample2
$(function(){
	$("button").click(function(){
		$("div").show("slow",function(){
			$(this).css("background","blue");
		});
	});
});

//sample3
$(function(){
	$("button#show").click(function(){
		$("div").show("slow");
	});
	$("button#hide").click(function(){
		$("div").hide("slow");
	});
});

//sample4
$(function(){
	$("button#show").click(function(){
		$("div:not(:animated)").show("slow");
	});
	$("button#hide").click(function(){
		$("div:not(:animated)").hide("slow");
	});
});

//sample5
$(function(){
	$("button").click(function(){
		$("div:not(:animated)").toggle("slow");
	});
});

//sample6
$(function(){
	$("dt").click(function(){
		if($("dd").css("display")=="block"){
			$("dd:not(:animated)").slideUp("slow");
		}else{
			$("dd").slideDown("slow");
		}
	});
});

//sample7
$(function(){
	$("dt").click(function(){
		$("dd:not(:animated)").slideToggle("slow");
	});
});

//sample8
$(function(){
	$("button#fadeIn").click(function(){
		$("img:not(:animated)").fadeIn("slow");
	});
	$("button#fadeOut").click(function(){
		$("img:not(:animated)").fadeOut("slow");
	});
});

//sample9
$(function(){
	$("button#fade100").click(function(){
		$("img:not(:animated)").fadeTo("slow",1);
	});
	$("button#fade50").click(function(){
		$("img:not(:animated)").fadeTo("slow",0.5);
	});
	$("button#fade0").click(function(){
		$("img:not(:animated)").fadeTo("slow",0);
	});
});

//sample10
$(function(){
	$("#flower").click(function(){
		$("p:not(:animated)").animate({
			marginLeft : "-400px" 
		},"slow","swing");
	});
	$("#building").click(function(){
		$("p:not(:animated)").animate({
			marginLeft : "0" 
		},"slow","swing");
	});
});
