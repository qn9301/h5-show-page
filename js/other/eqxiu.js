var config = {

};
/*
	容器类，用于处理分页
	@param pages 一个页码的数组
	@param g     全局触发的实践，与其他类无关
*/
function container(pages, g){
	var _this  = this;
	var _index = 0;
	this.len   = 0;
	this.index = 0;
	this.pages = pages;
	this.g     = g;
	this.load  = $("#loading");
	this.w_height;// 窗口高度
	this.w_width;// 窗口宽度
	this.box   = $("#page");
	this.distance = 50; // px
	this.init = function(){
		this.w_width = $(window).width();
		this.w_height = $(window).height();
		this.len = pages.length;
		this.loading([this.g, this]);
	}
	this.loading = function (e){
		this.load.show();
		this.beforeLoad(function(){
			for(var i in e){
				e[i].start();
			}
			_this.addTouchEvent();
		})
	}
	this.beforeLoad = function (func){
		setTimeout(function(){
			_this.load.hide();
			func();
		},1000)
	}
	this.start = function(){
		// this.pages[this.index].start();
	}
	this.upSlide = function(){
		alert("向上滑动！")
		this.pages[this.index].out();
		this.pages[++this.index].in();
	}
	this.downSlide = function (){
		alert("向下滑动！")
		this.pages[this.index].out();
		this.pages[--this.index].in();
	}
	this.leftSlide = function (){
		alert("向左滑动！")
	}
	this.rightSlide = function (){
		alert("向右滑动！")
	}
	this.addTouchEvent = function (){
		var x,y;
		this.box[0].addEventListener("touchstart", function (e){
			x = e.touches[0].clientX;
			y = e.touches[0].clientY;
		})
		this.box[0].addEventListener("touchmove", function (e){
			_x = e.touches[0].clientX;
			_y = e.touches[0].clientY;
			if((_x-x)>_this.distance){
				x = _x;
				_this.rightSlide();
				return ;
			}
			if((x-_x)>_this.distance){
				x = _x;
				_this.leftSlide();
				return ;
			}
			if((_y-y)>_this.distance){
				y = _y;
				_this.downSlide();
				return ;
			}
			if((y-_y)>_this.distance){
				y = _y;
				_this.upSlide();
				return ;
			}
		})
	}
	// 拦截器
	this.__defineGetter__("index",function (){
		if(_index>_this.len){
			_index = 0;
		}
		if(_index<0){
			_index = _this.len-1;
		}
		return _index;
	})
	// 拦截器
	this.__defineSetter__("index",function (v){
		_index = v;
	})
	this.init();
}

function media(){
	var _this = this;
	this.model = $("#music");
	this.music = this.model.find("audio");
	this.status = false;
	this.start = function (){
		// this.play();
		this.model.click(function(){
			_this.toggle();
		})
	}
	this.toggle = function(){
		this.status?this.pause():this.play();
	}
	this.play = function(){
		this.status = true;
		this.model.addClass('on')
		this.music[0].play();
	}
	this.pause = function(){
		this.status = false;
		this.model.removeClass('on')
		this.music[0].pause();
	}
}


var box = new container([1,2], new media());