$(function(){
	var isHover = false;
	var timer1 = null;
	$(".buy_car_img").hover(function(){
		isHover = true;
		$(".buy_car_img").arrt("src","images/shopcarhover.png")
		$(".buy_car_spec").animate({
			height:100
		},200,function(){
			$(".buy_var p").html("购物车中还没有商品，赶紧选购吧！");
		});
	});
});