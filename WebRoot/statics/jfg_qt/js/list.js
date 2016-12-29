// JavaScript Document
/*产品列表  筛选*/
$(function(){
	$(".screening").click(function(){
		oScr=$(".screening").index(this)
		if ($(this).hasClass('yespic')) {

		if($(this).hasClass("screeningClickDown")==false)
		{
			
			$(".screening").removeClass("screeningClickDown")
			$(".screening").removeClass("screeningClickUp")
			$(this).addClass("screeningClickDown")
		}
		else
		{
			$(".screening").removeClass("screeningClickDown")
			$(".screening").removeClass("screeningClickUp")
			$(this).addClass("screeningClickUp")
		}
			 $(".screening").removeClass("Choice");  
		 }
		 else
		 {
			$(".screening").removeClass("screeningClickDown")
			$(".screening").removeClass("screeningClickUp")
	
            $(this).addClass("Choice");  
		 }
	})
	

})


//商品列表 筛选
$(function(){
	$(".points a,.brand a,.area a,.amount a,.style a").click(function(){
		$(this).parent().parent().find("a").removeClass("Choice");  
        $(this).addClass("Choice");  
	})
})

//商品列表 价格区间
function oNclick()
{
	$(".priceRange").addClass("priceRangeClick")
	$(".priceRangeBtn").show(333)
}
function oUtclick()
{
	$(".priceRange").removeClass("priceRangeClick")
}
$(function(){
	$(".priceRangeBtn").click(function(){
		$(".priceRangeBtn").fadeOut(333)
		
	})
})


//页码
$(function(){
	$(".pageNumberBtn:first").addClass("pageNumberBtnClick")
	$(".pageNumberBtn").click(function(){
		$(".pageNumberBtn").removeClass("pageNumberBtnClick")
		$(this).addClass("pageNumberBtnClick")
	})
})


//商品详情 图片显示
$(function(){
	$(".goodsBtn li:first").css("border","1px solid #d22147")
	$(".goodsBtn li").click(function(){
		oGoods=$(".goodsBtn li").index(this)
		$(".goodsBtn li").css("border","1px solid #eee")
		$(this).css("border","1px solid #d22147")
		$(".goodsImg img").fadeOut(333)
		$(".goodsImg img").eq(oGoods).fadeIn(333)
	})

	var oGodL=0;
	$(".rightBtn").click(function(){
		if(oGodL<Math.ceil($(".goodsBtn li").length/4)-1)
		{
			++oGodL
			$(".goodsBtn").animate({left:-312*oGodL},333)
		}
		else
		{
			oGodL=0
			$(".goodsBtn").animate({left:-312*oGodL},333)
		}
	})
	$(".leftBtn").click(function(){
		if(oGodL==0)
		{
			oGodL=Math.ceil($(".goodsBtn li").length/4)-1
			$(".goodsBtn").animate({left:-312*oGodL},333)
		}
		else
		{
			oGodL=oGodL-1
			$(".goodsBtn").animate({left:-312*oGodL},333)
		}
	})
})

//商品详情 详情与留言切换
$(function(){
	$(".goodsIndex:first").show()
	$(".goodsDataLabel p:first").css({"border-top":"2px solid #d41c44","color":"#d41c44","background":"#fff"})
	$(".goodsDataLabel p").click(function(){
		oLabel=$(".goodsDataLabel p").index(this)
		$(".goodsDataLabel p").css({"border-top":"2px solid transparent","color":"#333","background":"inherit"})
		$(this).css({"border-top":"2px solid #d41c44","color":"#d41c44","background":"#fff"})
			
		$(".goodsIndex").hide()
		$(".goodsIndex").eq(oLabel).show()
	})
	
})

//商品详情 浏览过的商品
$(function(){
	var oBro=0
	$(".browseRight").click(function(){
		if(oBro<2)
		{
			++oBro
			$(".browse").animate({left:-912*oBro},500);
			$(".browseData").text(oBro+1)
		}
		else
		{
			oBro=0
			$(".browse").animate({left:-912*oBro},500);
			$(".browseData").text(oBro+1)
		}
	})
	$(".browseLeft").click(function(){
		if(oBro!=0)
		{
			oBro=oBro-1
			$(".browse").animate({left:-912*oBro},500);
			$(".browseData").text(oBro+1)
		}
		else
		{
			oBro=2
			$(".browse").animate({left:-912*oBro},500);
			$(".browseData").text(oBro+1)
		}
	})
	
	function oBroChange(){
		if(oBro<2){
			oBro=oBro+1;
			}else{
			oBro=0;	
			}
		$(".browse").animate({left:-912*oBro},500);
		$(".browseData").text(oBro+1)
	}
	
	var clock = setInterval(oBroChange,3000);
	$(".browseBox").mouseover(function(){
		clearInterval(clock);
			}).mouseout(function(){
			clock=setInterval(oBroChange,3000)	
	})
	
	
	$(".goodsPageBtn:first").addClass("goodsPageClick")
	$(".goodsPageBtn").click(function(){
		$(".goodsPageBtn").removeClass("goodsPageClick")
		$(this).addClass("goodsPageClick")
	})

})