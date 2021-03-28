# Louis Vuitton - Event Page

## [ViewSite](http://gabdong.dothome.co.kr/louisvuitton)

***
루이비통의 이벤트 페이지를 제작하였습니다.

jQuery를 이용하여 메뉴 호버시 div넓이 변화, 배경동영상 재생효과를 주었습니다.

***

## index.js

```javascript
$('article').mouseenter(function(){
		$(this).stop().animate({'width':'50%'},500);
		$(this).find('video').get(0).play();
	});
	$('article').mouseleave(function(){
		$(this).stop().animate({'width':'12%'},100);
		$(this).find('video').get(0).load();
	});
```
