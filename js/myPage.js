var page = {
	initialize: function(){
		this.initializeNavClick();
		this.initializeNavHover();
	},
	initializeNavHover: function(){
		$('.navEl').on('mouseover', function(){
			$(this).css('background-color','rgb(230,230,230)');
		});
		$('.navEl').on('mouseleave', function(){
			$(this).css('background-color','rgb(240,240,240)');
		});
	},
	initializeNavClick: function(){
		$('.navEl').on('click', function(){
			var clickedDiv = $(this).text(),
			scrollToDiv = 'div_'+clickedDiv.toLowerCase(),
			positionToScroll = $('#'+scrollToDiv).offset();
			$('body').animate({scrollTop: positionToScroll.top - 50}, 1000);
		});
	}
}

$(document).ready(function(){
	page.initialize();
});
