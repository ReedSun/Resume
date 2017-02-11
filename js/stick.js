function Stick($node){
	this.$cur = $node;
	this.isFixed = false;
	this.init();
	this.clone();
	this.bind();
	this.resize();
}
Stick.prototype.init = function(){
	this.$curH = this.$cur.height();
	this.$curW = this.$cur.width();
	this.offsetTop = this.$cur.offset().top;
	this.offsetLeft = this.$cur.offset().left;
}
Stick.prototype.clone = function(){
	this.$curClone = this.$cur.clone()
						      .css({visibility: "hidden",display: "none"})
							  .insertBefore(this.$cur);
}
Stick.prototype.bind = function(){
	var _this = this
	this.check();
	$(window).on("scroll", function(){
		_this.check();
		_this.checkActive();
	});
}
Stick.prototype.check = function(){
	var winScroll = $(window).scrollTop();
	if(this.offsetTop < winScroll){
		if(!this.isFixed){
			this.setFixed();
		}
	}else{
		if(this.isFixed){
			this.unsetFixed();
		}
	}	
}
Stick.prototype.setFixed = function(){
	var a = this.$curW;
	this.$cur.css({
		"position" : "fixed",
		"top" : 0,
		"left" : this.offsetLeft,
		"width" : a,
		"z-index" : 100,
		"margin" : 0
	});
	this.$curClone.show();
	this.isFixed = true;
}
Stick.prototype.unsetFixed = function unsetFixed(){
	this.$cur.removeAttr("style");
	this.$curClone.hide();
	this.isFixed = false;
}
Stick.prototype.checkActive = function(){
	var top = $(window).scrollTop()
	var basicStart = $(".basic").offset().top-200;
	var exprStart = $(".expr").offset().top-200;
	var skillStart = $(".skill").offset().top-200;
	var contactStart = $(".contact").offset().top-200;
	$(".btn-nav").removeClass("active")
	if (top>=basicStart && top<exprStart) {
		$(".btn-basic").addClass("active");
	}
	if (top>exprStart && top<skillStart) {
		$(".btn-expr").addClass("active");
	}
	if (top>skillStart && top<contactStart) {
		$(".btn-skill").addClass("active");
	}
	if (top>contactStart) {
		$(".btn-contact").addClass("active");
	}
}
Stick.prototype.resize = function(){
	var _this = this;
	$(window).on("resize", function(){
		_this.$curClone.remove()
		_this.$cur.removeAttr("style");
		_this.isFixed = false;
		_this.init();
		_this.clone();
		_this.bind();
	})

}
module.exports = Stick;