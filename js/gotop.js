var GoWhere = require("./gowhere.js");
var fadeInAndOut = require("./fadeInAndOut.js")
function GoTop($parent){
	this.ct = $parent || $("body");
	this.target = $('<div class="go-top">回到顶部</div>');
	this.createNode();
	this.bindEvent();
}
GoTop.prototype.bindEvent = function(){
	var $cur = this.target;
	var _this = this;
	fadeInAndOut($cur, 300)
	new GoWhere($cur, $("body"));
}
GoTop.prototype.createNode = function(){
	this.ct.append(this.target);
}
module.exports = GoTop;