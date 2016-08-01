// sample1
$(function(){
	$("form").submit(function(){
	
		//エラーの初期化
		$("p.error").remove();
		$("dl dd").removeClass("error");
		
		$(":text,textarea").filter(".validate").each(function(){
			
			//必須項目のチェック
			$(this).filter(".required").each(function(){
				if($(this).val()==""){
					$(this).parent().prepend("<p class='error'>必須項目です</p>");
				}
			});
			
			//数値のチェック
			$(this).filter(".number").each(function(){
				if(isNaN($(this).val())){
					$(this).parent().prepend("<p class='error'>数値のみ入力可能です</p>");
				}
			});
			
			//メールアドレスのチェック
			$(this).filter(".mail").each(function(){
				if($(this).val() && !$(this).val().match(/.+@.+\..+/g)){
					$(this).parent().prepend("<p class='error'>メールアドレスの形式が異なります</p>");
				}
			});
			
			//メールアドレス確認のチェック
			$(this).filter(".mail_check").each(function(){
				if($(this).val() && $(this).val()!=$("input[name="+$(this).attr("name").replace(/^(.+)_check$/, "$1")+"]").val()){
					$(this).parent().prepend("<p class='error'>メールアドレスと内容が異なります</p>");
				}
			});
			
		});
		
		//ラジオボタンのチェック
		$(":radio").filter(".validate").each(function(){
			$(this).filter(".required").each(function(){
				if($(":radio[name="+$(this).attr("name")+"]:checked").size() == 0){
					$(this).parent().prepend("<p class='error'>選択してください</p>");
				}
			});
		});
		
		//チェックボックスのチェック
		$(".checkboxRequired").each(function(){
			if($(":checkbox:checked",this).size()==0){
				$(this).prepend("<p class='error'>選択してください</p>");
			}
		});
		
		// その他項目のチェック
		$(".validate.add_text").each(function(){
			if($(this).attr("checked")==true && $("input[name="+$(this).attr("name").replace(/^(.+)$/, "$1_text")+"]").val()==""){
				$(this).parent().prepend("<p class='error'>その他の項目を入力してください。</p>");
			}
		});
		
		//エラーの際の処理
		if($("p.error").size() > 0){
				$('html,body').animate({ scrollTop: $("p.error:first").offset().top-40 }, 'slow');
				
				$("p.error").parent().addClass("error");
				return false;
		}
	});
});