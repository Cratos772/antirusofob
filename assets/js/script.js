
// Toggle class "active" (Переключение класса "active")
// https://webcomplex.com.ua/kak-sdelat/jquery-kak-izmenit-klass-aktivnomu-elementu.html

// $("#top_menu").on("click", ".menu_item", function(){
// 	$("#top_menu .menu_item").removeClass("active"); // remove class "active" in all links ( удаление класса "active" во всех ссылках )
// 	$(this).addClass("active"); // adding class "active" to the current link ( добавление класса "active" текущей ссылке )
// });

$(function() {

	let location = window.location.href;
	let cur_url = './' + location.split('/').pop();
	
	$('.nav-menu a').each(function () {
		
		let link = $(this).attr('href');
		
		if(cur_url == link) {
			$(this).addClass('active');
		}
	});
})