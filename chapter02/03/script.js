//sample1 ボタンをクリックすると画像が変更される
// $(function(){
// 	$("button").click(function(){
// 		$("img").attr("src","sea.jpg").attr("alt","海");
// 	});
// });

//sample2 
//a要素をクリックするとclickイベントが発生しmjqueryの命令が実行されます。
//ところがhref属性に設定されたリンク先を開いてしまいます。
// $(function(){
// 	$("a").click(function(){
// 		$("img").attr("src","sea.jpg").attr("alt","海");
// 	});
// });

//上記の問題を回避する方法
//①a要素のhref属性にjavascript:void(0)と設定し、a要素の機能を無効化する
//②clickイベントの最後にreturn false;と記述する
//sample4
// $(function(){
// 	$("a").click(function(){
// 		$("img").attr("src","sea.jpg").attr("alt","海");
// 		return false;
// 	});
// });

//sample5 リンク文字をクリックすると画像が変更される
// $(function(){
// 	$("a:eq(0)").click(function(){
// 		$("img").attr("src","flower.jpg").attr("alt","花");
// 		return false;
// 	});
// 	$("a:eq(1)").click(function(){
// 		$("img").attr("src","sea.jpg").attr("alt","海");
// 		return false;
// 	});
// 	$("a:eq(2)").click(function(){
// 		$("img").attr("src","jellyfish.jpg").attr("alt","くらげ");
// 		return false;
// 	});
// 	$("a:eq(3)").click(function(){
// 		$("img").attr("src","building.jpg").attr("alt","建物");
// 		return false;
// 	});
// });

//sample6 $(this)を使えば以下のように短く記述できる
// $(function(){
// 	$("a").click(function(){
// 		$("img").attr("src",$(this).attr("href"))
// 				.attr("alt",$(this).text());
// 		return false;
// 	});
// });

//sample7 ダブルクリックするとhtmlが変わる
// $(function(){
// 	$("button").dblclick(function(){
// 		$("img").attr("src","sea.jpg").attr("alt","海");
// 	});
// });

//sample8 
// $(function(){
// 	$("a").dblclick(function(){
// 		$("img").attr("src",$(this).attr("href"))
// 				.attr("alt",$(this).text());
// 		}).click(function(){
// 		return false;
// 	});
// });

// sample9 a要素の上にマウスカーソルがある状態でマウスのボタンが押されたらimg要素のsrc属性とalt属性を書き換えます
// $(function(){
// 	$("a").mousedown(function(){
// 		$("img").attr("src",$(this).attr("href"))
// 				.attr("alt",$(this).text());
// 	}).click(function(){
// 		return false;
// 	});
// });

//sample10 a要素の上にカーソルがある状態でマウスのボタンが離されたら、img要素のsrc属性とalt属性を書き換える
// $(function(){
// 	$("a").mouseup(function(){
// 		$("img").attr("src",$(this).attr("href"))
// 				.attr("alt",$(this).text());
// 	}).click(function(){
// 		return false;
// 	});
// });

//sample11 ボタンがクリックされるたびに表示する画像を切り替える
// $(function(){
// 	$("button").toggle(function(){
// 		$("img").attr("src","sea.jpg").attr("alt","海");
// 	},function(){
// 		$("img").attr("src","jellyfish.jpg").attr("alt","くらげ");
// 	},function(){
// 		$("img").attr("src","building.jpg").attr("alt","建物");
// 	},function(){
// 		$("img").attr("src","flower.jpg").attr("alt","花");
// 	});
// });

//sample12 画像にカーソルを重ねると画像が切り替わる
// $(function(){
// 	$("img").mouseover(function(){
// 		$(this).attr("src","sea.jpg").attr("alt","海");
// 	}).mouseout(function(){
// 		$(this).attr("src","flower.jpg").attr("alt","花");
// 	});
// });

//sample13 画面上でカーソルを動かすと現在の座標位置が表示される
// $(function(){
// 	$("img").mousemove(function(e){
// 		$("p").html("現在のX座標:"+e.clientX+"<br />"+
// 					"現在のY座標:"+e.clientY);
// 	});
// });

//sample14 リンク文字をクリックすると最初は画像が切り替わる。もう一度クリックするとリンク先のURLに移動する
// $(function(){
// 	$("a").one("click",function(){
// 		$("img").attr("src",$(this).attr("href"))
// 				.attr("alt",$(this).text());
// 			return false;
// 	});
// });

//sample15 取り消しボタンをクリックすると設定されているイベント処理が削除され本来のリンクが有効になる
// $(function(){
// 	$("a").click(function(){
// 		$("img").attr("src",$(this).attr("href"))
// 				.attr("alt",$(this).text());
// 		return false;
// 	});
// 	$("button").click(function(){
// 		$("a").unbind("click");
// 	});
// });

//sample16 1,2ボタンをクリックすると建物が追加されるが、画像切り替えの処理は実行されない
// $(function(){
// 	$("a").click(function(){
// 		$("img").attr("src",$(this).attr("href"))
// 				.attr("alt",$(this).text());
// 		return false;
// 	});
// 	$("button").click(function(){
// 		$("ul").append("<li><a href='building.jpg'>建物</a></li>");
// 	});
// });

//sample17 16の内容を次のように記述すれば、建物にもイベント処理を適用できる
$(function(){
	$("a").live("click",function(){
		$("img").attr("src",$(this).attr("href"))
				.attr("alt",$(this).text());
		return false;
	});
	$("button").click(function(){
		$("ul").append("<li><a href='building.jpg'>建物</a></li>");
	});
});

















