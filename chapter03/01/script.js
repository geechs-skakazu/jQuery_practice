//sample3 jqueryを使ってストライプテーブルを書き直す
// $(function(){
// 	$("th:nth-child(odd)").addClass("odd");
// 	$("tr:nth-child(even)").addClass("even");
// });

//sample4 よくない書き方だけど、上記と同じ実行結果になる
// $(function(){
// 	$("th:nth-child(odd)").css("background","#444444");
// 	$("tr:nth-child(even)").css("background","#F2F2F2");
// });

//sample5
// $(function(){
// 	$("th:nth-child(odd)").addClass("odd");
// 	$("tr:nth-child(even)").addClass("even");
// });

//sample6
// $(function(){
// 	$("th:nth-child(odd)").addClass("odd");
// 	$("tr:nth-child(even)").addClass("even");
// 	$("tr:not(first-child)").mouseover(function(){
// 		$(this).addClass("hover");
// 	}).mouseout(function(){
// 		$(this).removeClass("hover");
// 	});
// });

//sample7 
$(function(){
	$("th:nth-child(odd)").addClass("odd");
	$("tr:nth-child(even)").addClass("even");

	$("tr:not(:first-child").mouseover(function(){
		$(this).addClass("hover");
	}).mouseout(function(){
		$(this).removeClass("hover");
	});

	$("td").mouseover(function(){
		$("td:nth-child("+($("td").index(this)%$("th").size()+1)+")")
								.addClass("hover");
	}).mouseout(function(){
		$("td:nth-child("+($("td").index(this)%$("th").size()+1)+")")
								  .removeClass("hover");
	});
});

