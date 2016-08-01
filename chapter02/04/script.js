//sample1 確認ボタンを押すと送信確認おメッセージが表示され、確認ボタンは送信ボタン位変更される
// $(function(){
// 	$("button").click(function(){
// 		$("p").text($("input").val()+"にメールを送信します。");
// 		$("button").text("送信");
// 	});
// });

//sample2 クリアボタンをクリックするとフォームに入力した内容が削除される
// $(function(){
// 	$("button").click(function(){
// 		$("input").val("");
// 	});
// });

//sample3 入力してくださいという文字が灰色で表示。入力すると削除される。
// $(function(){
// 	$("input").val("入力してください").css("color","#CCC")
// 			  .focus(function(){
// 		$(this).val("").css("color","#000");
// 	});
// });

//sample4 上記のイベントをfoucsイベントが発生した初回のみ処理を実行するようにする
// $(function(){
// 	$("input").val("入力してください").css("color","#CCC")
// 			  .one("focus",function(){
// 		$(this).val("").css("color","#000");
// 	});
// });

//sample5 フォームをフォーカスすると「入力してください」という文字が削除される
//フォーカスを外すと内容が入力されていなければフォーカス前と同じ画面に戻る
// $(function(){
// 	$("input").val("入力してください").css("color","#CCC")
// 			  .one("focus",function(){
// 		$(this).val("").css("color","#000");
// 	}).blur(function(){
// 		if($(this).val()==""){
// 			$(this).val("入力してください").css("color","#CCC")
// 				   .one("focus",function(){
// 				$(this).val("").css("color","#000");
// 			});
// 		}
// 	});
// });

//sample6 申込者で個人を選ぶとテキストフォームのラベルがお名前に、法人を選ぶと会社名に変わる
// $(function(){
// 	$("select").change(function(){
// 		$("span").text($(this).val());
// 	});
// });

//sample7 送信ボタンを押すとお名前蘭画からの場合にエラーメッセージが表示される
$(function(){
	$("form").submit(function(){
		if($("input[name='name']").val()==""){
			$("input[name='name']").css("border","1px solid red").after("<span>お名前を入力してください</span>");
			$("span").css("color","red")
			return false;
		}
	});
});

//sample8
$(function(){
	$("form").submit(function(){
		if($("input[name='name']").val()==""){
			if($("span").css("color") != "red"){
				$("input[name='name']").css("border","1px solid red").after("<span>お名前を入力してください</span>");
				$("span").css("color","red");
			}
			return false;
		}
	});
});

//sample9
$(function(){
	$(":input").focus(function(){
		$(this).css("background","#DFEEFF");
	}).blur(function(){
		$(this).css("background","");
	});
});

//sample10
$(function(){
	$(":text").focus(function(){
		$(this).after("<strong>必須項目です</strong>");
	}).blur(function(){
		$("strong").remove();
	});
});

//sample11
$(function(){
	$(":password").focus(function(){
		$(this).after("<p>パスワードは6文字以上で入力してください</p>");
	}).blur(function(){
		$("p").remove();
	});
});

//sample12
$(function(){
	$(":radio").click(function(){
		$("label").css("font-weight","");
		$("label[for='"+$(this).attr("id")+"']").css("font-weight","bold");
	});
	$("label").click(function(){
		$("label").css("font-weight","");
		$(this).css("font-weight","bold");
	});
});

//sample13
$(function(){
	$(":radio").change(function(){
		$("label").css("font-weight","");
		$("label[for='"+$(this).attr("id")+"']").css("font-weight","bold");
	});
});

//sample14
$(function(){
	$("button").click(function(){
		$(":checkbox").attr("checked","checked");
	});
});

//sample15
$(function(){
	$(":submit").mouseover(function(){
		$(this).after("<p>入力した内容をサーバーに送信します</p>");
	}).mouseout(function(){
		$("p").remove();
	});
});

//sample16
$(function(){
	$(":image").mouseover(function(){
		$(this).attr("src","button_on.jpg");
	}).mouseout(function(){
		$(this).attr("src","button.jpg");
	});
});

//sample17
$(function(){
	$(":reset").one("click",function(){
		$(this).after("<p>入力内容を初期化しました</p>");
	});
});

//sample18
$(function(){
	$(":button").click(function(){
		if($("input[name='mail']").val() != $("input[name='check']").val()){
			$("em").text("メールアドレスが異なります。");
			return false;
		}
	});
});

//sample19
$(function(){
	$(":file").mouseover(function(){
		$(this).after("<p>アップロードできるファイルは300kbまでです</p>")
	}).mouseout(function(){
		$("p").remove();
	});
});

//sample20
$(function(){
	$("label,:checkbox").click(function(){
		$("label").css("background","");
		$(":checked").each(function(){
			$("label[for='"+$(this).attr("id")+"']").css("background","#CCC");
		});
	});
});

//sample21
$(function(){
	$("select").change(function(){
	if($(":selected").attr("value")=="10 代"){
		$("input").attr("disabled", "disabled");
	}else{
		$("input").removeAttr("disabled");
	}
	});
});