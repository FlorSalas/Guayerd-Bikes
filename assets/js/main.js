$(document).ready(main);

var contador = 1;

function main(){
	$(".btn-menu").click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '-100px'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};