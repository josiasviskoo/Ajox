$(document).ready(function(){
	$('.ajox').click(function() {
		
		var pagina = $(this).attr('ajox-href');
		var alvo = $(this).attr('ajox-div');

		$(alvo).fadeIn(700);
  		$(alvo).html('<p><img src="assets/img/carregando.gif" /></p>');
		$(alvo).load(pagina);
		
	});
});