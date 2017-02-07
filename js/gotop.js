var GoWhere = require("./gowhere.js");
function GoTop($parent){
	this.ct = $parent || $("body");
	this.target = $('<div class="go-top">回到顶部</div>');
	this.createNode();
	this.bindEvent();
}
GoTop.prototype.bindEvent = function(){
	var $cur = this.target;
	var _this = this;
	var clockForTimeout;
	$(window).on("scroll", function(){
		if (clockForTimeout) {
			clearTimeout(clockForTimeout)
		}
		clockForTimeout = setTimeout(function(){
			if($(window).scrollTop()>600){
				$cur.fadeIn("normal", function(){})
			}
			if($(window).scrollTop()<600){
				$cur.fadeOut("normal", function(){})
			}
		}, 200)

	})
	new GoWhere($cur, $("body"));
}
GoTop.prototype.createNode = function(){
	this.ct.append(this.target);
}
module.exports = GoTop;