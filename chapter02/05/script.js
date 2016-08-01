//sample1
$(function(){
	$("button").click(function(){
		$("p").load("./sample1.txt");
	});
});

//sample2
$(function(){
	$("button").click(function(){
		$("div").load("./sample2_load.html p");
	});
});

//sample3
$(function(){
	$.ajax({
		url: 'sample3.xml',
		dataType: 'xml',
		success : function(data){
			$("item",data).each(function(){
				$("dl").append("<dt><a href='"+$("link",this).text()+"'>"+$("title",this).text()+"</a></dt><dd>"+$("description",this).text()+"</dd>");
			});
		}
	});
});

//sample4
$(function(){
	$("table tr").each(function(){
		$(this).html("<td>"+$("th",this).text()+"は"+$("td",this).text()+"</td>");
	});
});