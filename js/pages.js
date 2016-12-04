function pageClass(){
	this.index;
	this.w_height;
	this.w_width;
	this.top;
	this.left;
	this.box;
	this.in = function (direct, obj){
		// alert("page"+index+" in");
		var _this = this;
		this.box.css({top:["0px",-this.w_height+"px",this.w_height+"px","0px","0px"][direct],"left":["0px","0px","0px",-this.w_width+"px",this.w_width+"px"][direct]}).animate({top:0,left:0},function (){
			_this.start(obj);
			if(obj)obj.status = false;
		});
	}
	this.out = function (direct){
		direct = direct?direct:0;
		var _this = this;
		// // alert("page"+index+" out")
		this.box.stop().animate({top:["0px",-this.w_height+"px",this.w_height+"px","0px","0px"][direct],"left":["0px","0px","0px",-this.w_width+"px",this.w_width+"px"][direct]},function(){
			_this.allLeave();
		});
		// this.allLeave();
	}
	this.viewInit = function (){}
	this.start = function (){}
	this.allLeave = function (){
		this.viewInit();
	}
	this.setParam = function (conf){
		this.index    = conf.index;
		this.w_height = conf.w_height;
		this.w_width  = conf.w_width;
		this.box.css({top:this.w_height*this.index+"px"});
		this.viewInit();
	}
	this.init = function (nodeName){
		this.box = $(nodeName);
	}
	// this.init(nodeName);
}
function pageOne(){
	pageClass.call(this);
	this.viewInit = function (){
		this.box.find(".top").hide().css({top:-this.w_height+"px"})
		this.box.find(".middle .bottomS").hide().css({top:-this.w_height+"px"})
		this.box.find(".middle .topS").hide().css({top:this.w_height+"px"})
	}
	this.start = function (){
		this.viewInit();
		this.box.find(".top").show().stop().animate({top:"0px"})
		this.box.find(".middle .bottomS").show().stop().delay("500").animate({top:"1.5rem"})
		this.box.find(".middle .topS").show().stop().delay("500").animate({top:"1.5rem"})
	}
}
function pageTwo(){
	pageClass.call(this);
	this.viewInit = function (){
		this.box.find(".top").hide().css({top:-this.w_height+"px"})
		this.box.find(".middle .bottomS").hide().css({left:this.w_width+"px",top:"1.5rem"})
		this.box.find(".middle .topS").hide().css({left:-this.w_width+"px",top:"1.5rem"})
	}
	this.start = function (){
		this.viewInit();
		this.box.find(".top").show().stop().animate({top:"0px"})
		this.box.find(".middle .bottomS").show().stop().delay("500").animate({left:"0.61rem"})
		this.box.find(".middle .topS").show().stop().delay("500").animate({left:"0.61rem"})
	}
}