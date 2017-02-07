var GoWhere = require("./gowhere.js");
new GoWhere($(".nav-list>li").eq(0), $(".basic"));
new GoWhere($(".nav-list>li").eq(1), $(".expr"));
new GoWhere($(".nav-list>li").eq(2), $(".skill"));
new GoWhere($(".nav-list>li").eq(3), $(".contact"));
var GoTop =require("./gotop.js");
new GoTop();