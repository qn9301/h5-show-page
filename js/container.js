/*
	容器类，用于处理分页
	@param pages 一个页码的数组
	@param g     全局触发的实践，与其他类无关
*/
function container(pages, g){
	// 1上2下3左4右
	var _this  = this;
	var _index = 0;
	this.status = false;
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
		this.setPagesConf();
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
		this.pages[this.index].start();
	}
	this.upSlide = function(){
		// alert("向上滑动！")
		this.pages[this.index].out(1);
		this.index = this.index+1;
		this.pages[this.index].in(2, this);
	}
	this.downSlide = function (){
		// alert("向下滑动！")
		this.pages[this.index].out(2);
		this.index = this.index-1;
		this.pages[this.index].in(1, this);
	}
	this.leftSlide = function (){
		// alert("向左滑动！")
		this.pages[this.index].out(3);
		this.index = this.index+1;
		this.pages[this.index].in(4, this);
	}
	this.rightSlide = function (){
		// alert("向右滑动！")
		this.pages[this.index].out(4);
		this.index = this.index-1;
		this.pages[this.index].in(3, this);
	}
	this.setPagesConf = function (){
		var conf = {};
		conf.w_width  = this.w_width;
		conf.w_height = this.w_height;
		for(var i in this.pages){
			conf.index = i;
			console.dir(this.pages[i]);
			this.pages[i].setParam(conf);
		}
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
			if(_this.status){return}
			if((_x-x)>_this.distance){
				_this.status = true;
				x = _x;
				_this.rightSlide();
			}
			if((x-_x)>_this.distance){
				_this.status = true;
				x = _x;
				_this.leftSlide();
			}
			if((_y-y)>_this.distance){
				_this.status = true;
				y = _y;
				_this.downSlide();
			}
			if((y-_y)>_this.distance){
				_this.status = true;
				y = _y;
				_this.upSlide();
			}
		})
		this.afterAnimate = function (){
			status = false;
		}
	}
	// 拦截器
	this.__defineGetter__("index",function (){
		if(_index>=_this.len){
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