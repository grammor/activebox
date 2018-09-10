  $(document).ready(function () {
	 // $('#slider').slick({
		//  autoplay:true,
		//  arrows:false,
		//  infinite:true
	 // });

	 // var isotope = $('.works').isotope({
	 // 	itemSelector: '.work',
	 // 	percentPosition: true,

	 // 	// layoutMode: 'masonry'
	 // 	masonry:{
	 // 		// gutter: '.gutter-sizer',
	 // 		columnWidth: '.work'
	 // 	}
	 // });
$('.slider').slick({
	dots:true,
	infinite: false,	
	arrows:false,
	infinite: true,
	autoplay:true,
	autoplaySpeed: 4000,
	easing:'swing'
});
	 var isotope = $('.works').isotope({
		itemSelector: '.galery',
		percentPosition:true,
		horizontalOrder: true
		
	});

	 // $('.switchers a').on('click', function(e){
	 // 	$('.switchers li').removeClass('active');
	 // 	$(this).parent().addClass('active');
	 // 	e.preventDefault();
	 // 	var filter = $(this).attr('data-filter');
	 // 	filter = filter == '*' ? filter : '.' +filter;
	 // 	isotope.isotope({ filter : filter});
	 // });
	});