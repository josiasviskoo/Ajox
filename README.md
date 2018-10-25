# Ajox é um sistema ajax simplificado de carregamento com Jquery
# Ajax por Josias é Ajox para ajudar na construção de aplicações e organização de projetos

Para utilizar siga o arquivo principal com as adequações do <a href="">Link</a>

# ajox.js
$(document).ready(function(){
	$('.ajox').click(function() {
		
		var pagina = $(this).attr('ajox-href');
		var alvo = $(this).attr('ajox-div');

		$(alvo).fadeIn(700);
  		$(alvo).html('<p><img src="assets/img/carregando.gif" /></p>');
		$(alvo).load(pagina);
		
	});
});

#arquivo.html

<a href="javascript:void(0);" class="ajox" ajox-href="elemento_externo.html" ajox-div="areadebusca"><i class="fas fa-search"></i></a>