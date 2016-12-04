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