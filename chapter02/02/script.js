//sample1 テキストが「変更後」に変わる
// $(function(){
// 	$("p#first").text("変更後");
// 	$("p#first").text();
// });

//sample2 テキストが「取得する文字列」に変わる
// $(function(){
// 	$("p#second").text($("p#first").text());
// });

//sample3 テキストが強調文字の「変更後」に変わる
// $(function(){
	// $("p#first").html("<strong>変更後</strong>");
	// $("p#first").html();
// });

//sample4 テキストが強調文字の「変更後」に変わる
// $(function(){
// 	$("p#first").html("<strong>変更後</strong>");
// 	$("p#second").html($("p#first").html());
// });

//sample5 p要素の先頭に「先頭に挿入」という強調文字が追加される
// $(function(){
// 	$("p#first").prepend("<strong>先頭に挿入</strong>");
// });

//sample6 p要素の最後に「最後に挿入」という強調文字が追加される
// $(function(){
// 	$("p#first").append("<strong>最後に挿入</strong>");
// });

//sample7 p要素の前に「前に挿入」という見出しが追加される
// $(function(){
// 	$("p#first").before("<h1>前に挿入</h1>");
// });

//sample8 p要素の後ろに「後ろに挿入」という見出しが追加される
// $(function(){
// 	$("p#first").after("<h1>後ろに挿入</h1>");
// });

//sample9 p要素内の先頭に「先頭に移動」という強調文字が移動している
// $(function(){
// 	$("strong").prependTo("p");
// });

//sample10 p要素内の最後に「最後に移動」という強調文字が移動している
// $(function(){
// 	$("strong").appendTo("p");
// });

//sample11 p要素の前に「前に移動」という見出しが移動する
// $(function(){
// 	$("h1").insertBefore("p");
// });

//sample12 p要素の後ろに「後ろに移動」という見出しが移動する
// $(function(){
// 	$("h1").insertAfter("p");
// });

//sample13 2つの強調文字がそれぞれ見出しになる
// $(function(){
// 	$("strong").wrap("<h1></h1>");
// });

//sample14 強調文字がまとめてひとつの見出しになる
// $(function(){
// 	$("strong").wrapAll("<h1></h1>");
// });

//sample15 2つのp要素内のテキストがそれぞれ強調文字になる
// $(function(){
// 	$("p").wrapInner("<strong></strong>");
// });

//sample16 「置き換え前」というテキストが「置き換え後」に変わる
// $(function(){
// 	$("p").replaceWith("<h1>置き換え後</h1>");
// });

//sample17 「削除される要素」という強調文字が取り除かれる
// $(function(){
// 	$("p strong").remove();
// });

//sample18 リンク先のURLが変更される
// $(function(){
// 	$("a").attr("href","http://ascii.jp/");
// });

//sample19 href属性のURLを抜き出し、テキストとして書き込んでいる
// $(function(){
// 	$("a").text($("a").attr("href"));
// });

//sample20 a要素のtarget属性が削除される
// $(function(){
// 	$("a").removeAttr("target");
// });

//sample21 p要素に[red]というclass属性が追加される
// $(function(){
// 	$("p").addClass("red");
// });

//sample22 p要素に設定されてているclass属性[red]が取り除かれる
// $(function(){
// 	$("p").removeClass("red");
// });

//sample23 p要素のcolorプロパティの値がredに変更される
// $(function(){
// 	$("p").css("color","red");
// });

//sample24 p要素のbackground-colorにyellowが、font-weightにboldが、colorにredが設定
// $(function(){
// 	$("p").css({
// 		backgroundColor: "yellow",
// 		fontWeight: "bold",
// 		color: "red"
// 	});
// });

//sample25 colorプロパティの値がテキストとして表示される
// $(function(){
// 	$("p").text($("p").css("color"));
// });

//sample26 複数の命令をまとめて記述
$(function(){
	$("p").prepend("<strong>先頭に挿入</strong>")
		  .append("<strong>最後に挿入</strong>");
})