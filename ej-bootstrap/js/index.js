$(function(){
	// 为栏目绑定事件
	$("ul.left_nav").on("click","li",function(){
		// this = event.currentTarget]
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
		var url = $(this).attr("url");
		// 拼接时间戳的目的是为了消除缓存
		$("#worp").load(url+"?time="+Math.random())
	})

	// 默认选中第一个li
	$("ul.left_nav > li:first-child").trigger("click");


});