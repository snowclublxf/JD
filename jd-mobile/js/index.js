var elScroll = document.getElementsByClassName("scroll")[0];
var elScroll2 = document.getElementsByClassName("scroll2")[0];
var content_gg = document.getElementsByClassName("content_gg")[0];
var contentPic = document.getElementsByClassName("content_pic")[0];
var content_ms_ul = document.getElementsByClassName("content_ms_ul")[0];
var content_gg_ul = document.getElementsByClassName("content_gg_ul")[0];

var Html = document.querySelector("html");
var now = 0;
var timer = 0;
contentPic.innerHTML += contentPic.innerHTML;
content_gg_ul.innerHTML += content_gg_ul.innerHTML;
var contentPiclis = document.querySelectorAll(".content_pic li");
var content_ms_lis = document.querySelectorAll(".content_ms_ul li");
var content_gg_lis = document.querySelectorAll(".content_gg_ul li");
var width1 = contentPiclis[0].getBoundingClientRect().width;
var width2 = Html.getBoundingClientRect().width;
var width3 = content_gg.getBoundingClientRect().width;
contentPic.style.width = contentPic.offsetWidth*2 + "px";
content_gg_ul.style.width = content_gg_ul.offsetWidth*2 + "px";
function drag(a,b,c,d){
	var Scroll = new MScroll(
			{
				element: a,
				dir: "x"
			}
		); 
	Scroll.onscrollstart = function(){
		clearInterval(timer);
		if(now == 0){
			now = -b.length/2;
			Scroll.iScroll = now*c;
			this.setTranslate();
		}
		if(-now == b.length-1 ){
			now = -(b.length/2-1);
			Scroll.iScroll = now*c;
			this.setTranslate();
		}
	};
	Scroll.onscrollend = function(){
		if (a == elScroll) {
			auto();
		}
		var iScroll = this.iScroll;
		now = Math.round(iScroll/c);
		this.move(now*c - this.iScroll,"easeOutStrong",500);
	}
	
	if (a == elScroll) {
		auto();
	}
	
	
	function auto(){
		timer = setInterval(
			function(){
				now--;
				Scroll.move(now*width1 - Scroll.iScroll,"easeOutStrong",500,
					function(){
						if(-now == b.length-1 ){
							now = 1;
							Scroll.iScroll = now*c;
							Scroll.setTranslate();
						}
					}
				);
			},
			3000
		);
	}
}
drag(elScroll,contentPiclis,width1)
drag(content_gg,content_gg_lis,width3)
var Scroll = new MScroll(
		{
			element: elScroll2,
			dir: "x"
		}
	);
Scroll.onscrollend = function(){
	var iScroll = this.iScroll;
	now = Math.round(iScroll/width2);
	this.move(now*width2 - this.iScroll,"easeOutStrong",500);
}