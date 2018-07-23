$(window).scroll(function(){
	if($(this).scrollTop()>0){
		$('.header_wrapper').addClass("sticky");
	}
	else{
		$('.header_wrapper').removeClass("sticky");
	}
})