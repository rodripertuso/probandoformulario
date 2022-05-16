
// Funcion para que tengan animaciones los elementos cuando se recarga la pagina
window.sr =ScrollReveal();

	sr.reveal('.scroll', {
		duration: 3000 ,
		origin: 'bottom',
		distance: '-100px'
	});
		sr.reveal('#sobre-nosotros', {
		duration: 4000 ,
		origin: 'left',
		distance: '400px'
	});
		sr.reveal('#servicios', {
		duration: 4000 ,
		    rotate: {
        x: 1,
        y: 180,

    }
	});		
		sr.reveal('#porque-viajar', {
		duration: 4000 ,
		scale: 0.85
	});
			sr.reveal('#blog', {
		duration: 4000 ,
		origin: 'bottom',
		distance: '-200px'
	});
			sr.reveal('#google-maps', {
		duration: 4000 ,
		origin: 'top',
		distance: '400px'
	});			
			sr.reveal('#que-esperas', {
		duration: 4000 ,
		origin: 'bottom',
		distance: '-200px',
		rotate: {
        x: 360,
        y: 180,

    }


// Funcion para que cuando recarguen pagina te vuelta al inicio de la pagina 
	});			
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(document).ready(function(){
    $(this).scrollTop(0);
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

// Funcion para que se desplace la pagina lento 

$(document).ready(function(){
	var ir_a = $(".desplazar");

	ir_a.click(function(event){
		event.preventDefault();
		$("body , html").animate(
		{
			scrollTop: $(this.hash).offset().top,
		}, 3000
			)
			
	})
})