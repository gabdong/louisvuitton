$('article').mouseenter(function(){
		$(this).stop().animate({'width':'50%'},500);
		$(this).find('video').get(0).play();
	});
	$('article').mouseleave(function(){
		$(this).stop().animate({'width':'12%'},100);
		$(this).find('video').get(0).load();
	});