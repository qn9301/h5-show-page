function Wyjshow(musicObj){
	var _this = this,
              	       h = $("body>div").height(),
	       y = 0,
	       first = $("#page>div:first-child").clone(),
	       last = $("#page>div:last-child").clone();
	       console.log(last);
	$("#page").append(first);
	$(last).insertBefore("#page>div:first-child");
	this.music=null;
	this.index=1;
	this.is_scroll = false;
	this.init = function(){
		$("#page").css("top",-h);
		this.music = $("#music");
		this.loading(musicObj);
		this.start();
	}
	this.loading = function (musicObj){
		// var len = $(".sceneOne img").size();
		// console.log($("img"));
		// var i = 0;
		// $("img").load(function(){
		// 	console.log(i);
		// 	if(++i==len){
		// 		console.log(1);
				
		// 	}			
		// })
		addEventListener("touchstart",this.touchEvent);
		addEventListener("touchmove",this.moveEvent);
		musicObj && musicObj.play();
}
	this.start = function(){
		new PageOne();
	}
	this.upPage = function(){
		this.is_scroll = true;
		this.index--;
		console.log(this.index);
		$("#page").stop().animate({"top":-(h * this.index)}, function(){
			_this.is_scroll = false;
			if(_this.index==0){
				$("#page").css({"top":-(h * 6)}); 
				_this.index = 6;
			}
		}); 	
	}
	this.downPage = function(){		
		this.is_scroll = true;
		this.index++;
		console.log(this.index);
		$("#page").stop().animate({"top":-(h * this.index)}, function(){
			_this.is_scroll = false;
			if(_this.index>=6){
				$("#page").css({"top":0}); 
				_this.index = 0;
			}
		}); 		
	}
	this.moveEvent = function(e){
		if(_this.is_scroll)return;
		console.log(e.touches[0].clientY - y );
		if(e.touches[0].clientY - y < -30){
			_this.downPage();
		}else if(e.touches[0].clientY - y > 30){
			_this.upPage();
		}
		e.preventDefault();
	}
	this.touchEvent = function(e){
		if(this.is_scroll)return;
		y = e.touches[0].clientY;
	}
	this.init();
}

function Music(audioId,musicId){
	var _this = this;
	this.audio = $(audioId);
	this.music = $(musicId);
	this.init = function(){
		this.music.click(function (){
			_this.music.hasClass("on")?_this.pause() : _this.play();
		});
	}
	this.play = function(){
		this.music.addClass("on");
		this.audio[0].play();
	}
	this.pause = function(){
		_this.music.removeClass("on");
		_this.audio[0].pause();
	};
 	this.init();
}
function BgChange(){

}

function PageOne(){
	this.square = $(".square");
	this.logo = $(".logo");
	this.topS = $(".topS");
	this.bottomS = $(".bottomS");
	var _this = this;



	this.square.animate({"top":"0"},800,function(){
		console.log(_this.bottomS);
		console.log(_this.topS);
		_this.bottomS.animate("top"," 1.5px")
		_this.topS.animate("bottom"," 2px")
		_this.logo.animate({"opacity":"1"},function(){
			_this.logo.css("animation","scale 1s linear 2 alternate forwards")
		});
	});
}

new Wyjshow(new Music("#audio","#music"));