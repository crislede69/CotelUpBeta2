$(document).ready(function(){

	// MOSTRANDO Y OCULTANDO MENU
	$('#button-menu').click(function(){
		if($('#button-menu').attr('class') == 'fa fa-bars' ){

			$('.navegacion').css({'width':'100%', 'background':'rgba(0,0,0,.5)'}); // Mostramos al fondo transparente
			$('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close'); // Agregamos el icono X
			$('.navegacion .menu').css({'left':'0px'}); // Mostramos el menu

		} else{

			$('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,.0)'}); // Ocultamos el fonto transparente
			$('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars'); // Agregamos el icono del Menu
			$('.navegacion .submenu').css({'left':'-320px'}); // Ocultamos los submenus
			$('.navegacion .menu').css({'left':'-320px'}); // Ocultamos el Menu

		}
	});

	// MOSTRANDO SUBMENU
	$('.navegacion .menu > .item-submenu a').click(function(){
		
		var positionMenu = $(this).parent().attr('menu'); // Buscamos el valor del atributo menu y lo guardamos en una variable
		console.log(positionMenu); 

		$('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'}); // Mostramos El submenu correspondiente

	});

	// OCULTANDO SUBMENU
	$('.navegacion .submenu li.go-back').click(function(){

		$(this).parent().css({'left':'-320px'}); // Ocultamos el submenu

	});

});

//Service Worker

if('serviceWorker' in navigator){
    console.log('Puedes usar los serviceWorker en tu navegador');

    navigator.serviceWorker.register('./sw.js')
                           .then(res => console.log('serviceWorker cargado correctamente', res))  
                           .catch(err => console.log('serviceWorker no se ha podido cargar', err))

} else {
    console.log('No puedes usar los serviceWorker en tu navegador');
}

/**Scroll Suavizado**/
$(document).ready(function(){

    $("#menu a").click(function(e)   {
        e.preventDefault();

        $("html, body ").animate( {
            scrollTop: $($(this).attr('href')).offset().top
        });
        
        return false;
    });
});