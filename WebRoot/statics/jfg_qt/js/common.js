$(function(){

//侧边固定开始
$(window).scroll(function(){//滚动条事件
var topheight=$(this).scrollTop();//获取匹配元素相对滚动条顶部的偏移
if(topheight>500){
	$(".anchorLayer").stop().show();
	$(".TOPLayer").stop().show();
	}else{
	$(".anchorLayer").stop().hide();
	$(".TOPLayer").stop().hide();
	
	}
	
});
	//返回顶部

	$(".GoTop").click(function(){
		$('body,html').animate({scrollTop:0},555); 
	})
//侧边固定 结束


	//一级菜单
	 $("#nav li").click(function(){
		 $(this).addClass('active').siblings().removeClass('active');
		
	 })
	/*其他页面导航*/
	$(".categorysshow").hover(function(){
		$(".dd").toggle();
	})

	
	
	// 下拉
	$(".dorpdown").hover(function(){
		$(this).addClass("hover");
		var width = $(this).find(".sc-choie").outerWidth();
		$(this).find(".dd-spacer").css("width",width-2);
	},function(){
		$(this).removeClass("hover");
	});
	
	
	
	
	//3级导航栏子分类展开
	$("#cata-nav .item").mouseenter(function(){
		$(this).addClass("selected");
		$(this).children(".cata-nav-layer").show();  //3级菜单
		//让两个div 高度一样
var heightLeft= $(this).find(".CategoryMenuPannel").outerHeight();  
var heightRight= $(this).find(".sub-logo-con").outerHeight(); 

if (heightLeft > heightRight) 
{ 

$(this).find(".sub-logo-con").height(heightLeft); 
} 
else if(heightLeft < heightRight) 
{ 
$(this).find(".CategoryMenuPannel").height(heightRight); 
} else{

$(this).find(".sub-logo-con").height(heightLeft); 
$(this).find(".CategoryMenuPannel").height(heightRight); 
}

	});
	$("#cata-nav .item").mouseleave(function(){
		$(this).removeClass("selected");
	    $(this).children(".cata-nav-layer").hide();//3级菜单
	});
	


	
	//购物车下拉
   /* $(".top_cart").hover(function(){
		$(".cart_box").toggle();
	})*/

	

})

