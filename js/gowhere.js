function GoWhere($from, $to, speed){
	this.$from = $from;
	this.$to = $to;
	this.speed = speed || 50;
	this.bind();
}
GoWhere.prototype.bind = function(){
	var _this = this;
	var end = this.$to.offset().top;
	
	this.$from.on("click", function(){
		var clock = setInterval(function(){
			var start = $(window).scrollTop();
			if((start-end)>0){
				if(start<=0){
					clearInterval(clock);
				}
				if((start-_this.speed)>end){
					start = start-_this.speed
					$(window).scrollTop(start);
				}else{
					$(window).scrollTop(end);
					clearInterval(clock);
				}
			}
			if((start-end)<=0){
				if(start>=($("body").height()-$(window).height())){
					clearInterval(clock);
				}
				if((start+_this.speed)<end){
					start = start+_this.speed
					$(window).scrollTop(start);
				}else{
					$(window).scrollTop(end);
					clearInterval(clock);
				}
			}
		}, 5)
	})
}
module.exports = GoWhere;