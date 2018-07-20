$(window).scroll(function(){
	if($(this).scrollTop()>84){
		$('.menu').addClass("sticky");
	}
	else{
		$('.menu').removeClass("sticky");
	}
})