$(document).ready(function(){
    // alert("JQuery cargado");

    // mover elementos
    $(".elemento").draggable();

    // editar tamaño de elementos
    $(".elemento").resizable();

    // No se permite tener a la vez el .selectable() y el .sortable()
    // seleccionar elementos
    // $(".lista-seleccionable").selectable();
    // reordenar elementos
    // $(".lista-seleccionable").sortable();
    // para realizar una funcion cada vez que se reordena
    $(".lista-seleccionable").sortable({
        update: function(event,ui){
            console.log("He cambiado la lista");
        }
    });

    // drag and drop
    $("#elemento-movido").draggable();

    $("#area").droppable({
        drop: function(){
            console.log("Has dropeado dentro!!");
        }
    });

    // Efectos. Cueando clickeamos el botón
    $("#mostrar").click(function(){
        // $(".caja-efectos").toggle("fade");
        // $(".caja-efectos").fadeToggle(); // opción 2

        // explode es un método no nativo y se lo tengo que pasar como param.
        // $(".caja-efectos").effect("explode"); 
        // $(".caja-efectos").toggle("explode");

        // entra deslizandose
        // $(".caja-efectos").toggle("slide"); 
        // $(".caja-efectos").toggle("drop");

        // $(".caja-efectos").toggle("fold");
        // $(".caja-efectos").toggle("puff");
        // $(".caja-efectos").toggle("scale");
        // $(".caja-efectos").toggle("shake");

        // puedo pasarle opciones, tamaños, valocidades,...
        $(".caja-efectos").toggle("shake", "fast");
        // $(".caja-efectos").toggle("shake", 4000);
    });

    $(document).tooltip();

    // dialog
    $("#popup").dialog();

    $("#lanzar-popup").click(function(){
        $("#popup2").dialog();
    });

    // datepicker - fecha seleccionable
    $("#calendario").datepicker();

    // tabs - paneles de pestañas
    $("#pestanas").tabs();
});