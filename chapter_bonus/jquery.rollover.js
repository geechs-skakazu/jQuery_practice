//3-6で作成したロールオーバー処理のスクリプトをプラグイン化
$.fn.rollover = function(){
	$(this).mouseover(function(){
		$(this).attr("src",$(this).attr("src")
				.replace(/^(.+)_on(¥.[a-z]+)$/,"$1_on$2"));
	}).mouseout(function(){
		$(this).attr("src",$(this).attr("src")
				.replace(/^(.+)_on(¥.[a-z]+)$/,"$12$"));
	}).each(function(){
		$("<img>").attr("src",$(this).attr("src")
					.replace(/^(.+)(¥.[a-z]+)$/,"$1_on$2"))
	});
	return this;
}