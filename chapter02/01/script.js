//sample1 リストが赤色になる
// $(function(){


// 	$("li").css("color","red");
// });

//sample2　リストのid firstが赤色になる
// $(function(){
// 	$("li#first").css("color","red");
// });

//sample3　リストのclass secondが赤色になる
// $(function(){
// 	$("li.second").css("color","red");
// });

//sample4　リストのclass firstのstrongが赤色になる
// $(function(){
// 	$(".first strong").css("color","red");
// });

//sample5　liの子要素が赤色になる
// $(function(){
// 	$("li *").css("color","red");
// });

//sample6　id　firstと thirdが赤色になる
// $(function(){
// 	$("#first,#third").css("color","red");
// });

//sample7　liの子要素のstrongが赤色
// $(function(){
// 	$("li > strong").css("color","red");
// });


//sample8　secondの要素の次にあるli要素が赤色
// $(function(){
// 	$("#second + li").css("color","red");
// });

//sample9　2つのul要素の最初のli要素が赤色
// $(function(){
// 	$("li:first-child").css("color","red");
// });

//sample10 secondの後ろ(3番目以降のli要素が赤色)
// $(function(){
// 	$("#second ~ li").css("color","red");
// });

//sample11 2番目以降のli要素が赤色
// $(function(){
// 	$("li:not(:first-child)").css("color","red");
// });

//sample12 空のli要素　赤
// $(function(){
// 	$("li:empty").css("color","red");
// });

//sample13 奇数が青、偶数が赤、３の倍数がオレンジ
// $(function(){
// 	$("li:nth-child(even)").css("color","red");
// 	$("li:nth-child(odd)").css("color","blue");
// 	$("li:nth-child(3n)").css("color","orange");
// });

//sample14 空のli要素　赤
$(function(){
	$("li:last-child").css("color","red");
});

//sample15 1 span
$(function(){
	$("li span:only-child").css("color","red");
});

//sample16 id
$(function(){
	$("[id]").css("color","red");
});

//sample17 title second
$(function(){
	$("[title ='second']").css("color","red");
});

//sample18 first 以外
$(function(){
	$("li[title !='first']").css("color","red");
});

//sample19 fで始まる 1 4
$(function(){
	$("[title^ ='f']").css("color","red");
});

//sample20 dで終わる 2 3
$(function(){
	$("[title$ ='d']").css("color","red");
});

//sample21 irを含む 1 3
$(function(){
	$("[title$ ='ir']").css("color","red");
});

//sample22 fから始まりthが含まれる
$(function(){
	$("[title^ ='f'][title ='th']").css("color","red");
});

//sample23 1番目と最後要素が赤
$(function(){
	$("li:first").css("color","red");
	$("li:last").css("color","red");
});

//sample24 奇数が赤　偶数が青
$(function(){
	$("li:odd").css("color","red");
	$("li:even").css("color","blue");
});

//sample25 2に1を足した順番が青　それよ英前は赤、後は緑
$(function(){
	$("li:it(2)").css("color","red");
	$("li:eq(2)").css("color","blue");
	$("li:gt(2)").css("color","green");
});

//sample26 h1,h6　赤
$(function(){
	$(":header").css("color","red");
});

//sample27 サンプルが含まれる4,strongを含む1
$(function(){
	$("li:contains('サンプル')").css("color","red");
	$("li:has(strong)").css("color","red");
});

//sample28 空のli要素以外のli要素
$(function(){
	$("li:contains('サンプル')").css("color","red");
	$("li:has(strong)").css("color","red");
});