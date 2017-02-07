function fadeInAndOut($cur, lineNum){
	// #node,操作的元素
	// line,超过此高度展示，低于此高度隐藏
	var clockForTimeout;
	$(window).on("scroll", function(){
		if (clockForTimeout) {
			clearTimeout(clockForTimeout)
		}
		clockForTimeout = setTimeout(function(){
			if($(window).scrollTop()>lineNum){
				$cur.fadeIn("normal", function(){})
			}
			if($(window).scrollTop()<lineNum){
				$cur.fadeOut("normal", function(){})
			}
		}, 200)

	})
}
module.exports = fadeInAndOut; 