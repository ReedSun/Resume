function Stick($node){
	this.$cur = $node;
	this.$curH = $node.height();
	this.$curW = $node.width();
	this.offsetTop = $node.offset().top,
	this.offsetLeft = $node.offset().left,
	this.isFixed = false;
	this.clone();
	this.bind();
}
Stick.prototype.clone = function(){
	this.$curClone = this.$cur.clone()
						      .css({visibility: "hidden",display: "none"})
							  .insertBefore(this.$cur);
}
Stick.prototype.bind = function(){
	var _this = this
	$(window).on("scroll", function(){
		var winScroll = $(window).scrollTop();
		if(_this.offsetTop < winScroll){
			if(!_this.isFixed){
				_this.setFixed();
			}
		}else{
			if(_this.isFixed){
				_this.unsetFixed();
			}
		}
		_this.checkActive();
	});
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
	}),
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
	$(".btn-nav").removeClass("active")
	if (top>=660 && top<971) {
		$(".btn-basic").addClass("active");
	}
	if (top>971 && top<1839) {
		$(".btn-expr").addClass("active");
	}
	if (top>1839 && top<2566) {
		$(".btn-skill").addClass("active");
	}
	if (top>2566) {
		$(".btn-contact").addClass("active");
	}
}
module.exports = Stick;