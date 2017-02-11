var GoWhere = require("./gowhere.js");
var GoTop = require("./gotop.js");
var Stick = require("./stick.js");
var fadeInAndOut = require("./fadeInAndOut")

new GoWhere($(".btn-basic"), $(".basic"));
new GoWhere($(".btn-expr"), $(".expr"));
new GoWhere($(".btn-skill"), $(".skill"));
new GoWhere($(".btn-contact"), $(".contact"));
new GoTop();
new Stick($(".page-nav"));
fadeInAndOut($("#aside"), 600);

$(".contact-way>span").each(function(){
	$(this).on("mouseenter", function(){
	$(this).find(".QR").show();
})
	$(this).on("mouseleave", function(){
	$(this).find(".QR").hide();
})
})
