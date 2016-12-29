// JavaScript Document
//banner图的轮播

/*$(function () {

    $(".HotLayer").each(function () {
        var curDiv = $(this);
        $(curDiv).find(".HotBtn p:eq(0)").addClass("HotBtnClick");
        function init() {
            var curLi = $(curDiv).find(".HotBtn li");
            var n = $(curLi).find("p[class='HotBtnClick']").parent().index();
            $(curDiv).find(".HotBtn li").eq(n).find("p").removeClass("HotBtnClick")
            if (n >= curLi.length - 1) {
                n = 0;
            } else {
                n = n + 1;
            }
            $(curDiv).find(".HotAnimate").animate({ left: -200 * n }, 300);
            $(curLi).eq(n).find("p").addClass("HotBtnClick")
        }
        var clock = setInterval(init, 2000);
        $(this).mouseover(function () {
            clearInterval(clock);
        }).mouseout(function () {
            clock = setInterval(init, 3000)
        })
    });

});
*/
$(function () {
    $(".HotLayer").each(function () {
        var curDiv = $(this);
        $(curDiv).find(".HotBtn p:eq(0)").addClass("HotBtnClick");
        function init() {
            var curLi = $(curDiv).find(".HotBtn li");
            var n = $(curLi).find("p[class='HotBtnClick']").parent().index();
            $(curDiv).find(".HotBtn li").eq(n).find("p").removeClass("HotBtnClick")
            if (n >= curLi.length - 1) {
                n = 0;
            } else {
                n = n + 1;
            }
            $(curDiv).find(".HotAnimate").animate({ left: -200 * n }, 300);
            $(curLi).eq(n).find("p").addClass("HotBtnClick")
        }
        var clock = setInterval(init, 2000);
        $(this).mouseover(function () {
            clearInterval(clock);
        }).mouseout(function () {
            clock = setInterval(init, 2000);
        })
        $(curDiv).find(".HotBtn li").mouseover(function () {
            clearInterval(clock);
            $(this).parent().find("p").removeClass("HotBtnClick");
            $(curDiv).find(".HotAnimate").animate({ left: -200 *  $(this).index() }, 300);
            $(this).find("p").addClass("HotBtnClick");
        })
    });
});


/**$(function(){
	
	
	InitHot();
	
	var n = 0;
	$(".HotBtn p").eq(n).addClass("HotBtnClick")
	
	function imgChange(){
		var n=$("")
		if(n<2){
			n=n+1;
			}else{
			n=0;	
			}
		$(".HotAnimate").animate({left:-200*n},300);
		$(".HotBtn p").removeClHotBtnClick")
		$(".HotBtn p").eq(n).addClass("HotBtnClick")ass("
	}
	
	var clock = setInterval(imgChange,3000);
	$(".HotLayer").mouseover(function(){
		clearInterval(clock);
			}).mouseout(function(){
			clock=setInterval(imgChange,3000)	
	})
	
	$(".HotBtn p").mouseover(function(){
		n=$(".HotBtn p").index(this)
		$(".HotAnimate").animate({left:-200*n},300);
		$(".HotBtn p").removeClass("HotBtnClick")
		$(".HotBtn p").eq(n).addClass("HotBtnClick")
	})
	
})*/


/*$(function(){
	var n = 0;
	$(".HotBtn_1 p").eq(n).addClass("HotBtnClick")
	function imgChange(){
		if(n<2){
			n=n+1;
			}else{
			n=0;	
			}
		$(".HotAnimate_1").animate({left:-200*n},300);
		$(".HotBtn_1 p").removeClass("HotBtnClick")
		$(".HotBtn_1 p").eq(n).addClass("HotBtnClick")
	}
	
	var clock = setInterval(imgChange,3000);
	$(".HotLayer_1").mouseover(function(){
		clearInterval(clock);
			}).mouseout(function(){
			clock=setInterval(imgChange,3000)	
	})
	
	$(".HotBtn_1 p").mouseover(function(){
		n=$(".HotBtn_1 p").index(this)
		$(".HotAnimate_1").animate({left:-200*n},300);
		$(".HotBtn_1 p").removeClass("HotBtnClick")
		$(".HotBtn_1 p").eq(n).addClass("HotBtnClick")
	})
})

$(function(){
	var m = 0;
	$(".HotBtn_2 p").eq(m).addClass("HotBtnClick")
	function imgChange(){
		if(m<2){
			m=m+1;
			}else{
			m=0;	
			}
		$(".HotAnimate_2").animate({left:-200*m},300);
		$(".HotBtn_2 p").removeClass("HotBtnClick")
		$(".HotBtn_2 p").eq(m).addClass("HotBtnClick")
	}
	
	var clock = setInterval(imgChange,3000);
	$(".HotLayer_2").mouseover(function(){
		clearInterval(clock);
			}).mouseout(function(){
			clock=setInterval(imgChange,3000)	
	})
	
	$(".HotBtn_2 p").mouseover(function(){
		m=$(".HotBtn_2 p").index(this)
		$(".HotAnimate_2").animate({left:-200*m},300);
		$(".HotBtn_2 p").removeClass("HotBtnClick")
		$(".HotBtn_2 p").eq(m).addClass("HotBtnClick")
	})
})
*/
