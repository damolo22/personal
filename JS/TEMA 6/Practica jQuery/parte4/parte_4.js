$(document).ready(function() {

    const $info = $('#mensaje-info');

    // Cambiamos imagen al pasar el ratón y mostrar ruta
    $('.imagen-interactiva').hover(
        function() {
            const rutaOriginal = $(this).attr('src');
            const rutaNueva = $(this).data('hover');  
            
            $(this).attr('data-original-src', rutaOriginal);
            
            $(this).attr('src', rutaNueva);
            $info.text("Mostrando: " + rutaNueva); 
        }, 
        function() {
            const rutaOriginal = $(this).attr('data-original-src'); 
            $(this).attr('src', rutaOriginal); 
            $info.text("Esperando acción...");
        }
    );

    $('.imagen-interactiva').click(function() {
        const anchoActual = $(this).width();

        if (anchoActual < 200) {
            $(this).animate({ width: '300px' }, 500); 
            $info.text("Tamaño aumentado a: 300px");
        } else {
            $(this).animate({ width: '150px' }, 500);
            $info.text("Tamaño restaurado a: 150px");
        }
    });

    $('#btn-restaurar').click(function() {
        $('.imagen-interactiva').animate({ width: '150px' }, 300);
        $info.text("Todas las imágenes restauradas.");
    });

    $('#btn-rotar').click(function() {
        const img1 = $('.imagen-interactiva').eq(0);
        const img2 = $('.imagen-interactiva').eq(1);
        const img3 = $('.imagen-interactiva').eq(2);

        const src1 = img1.attr('src');
        const src2 = img2.attr('src');
        const src3 = img3.attr('src');

        // Rotamos: La 2 recibe la 1, la 3 recibe la 2, la 1 recibe la 3
        img2.attr('src', src1);
        img3.attr('src', src2);
        img1.attr('src', src3);

        // También rotamos los efectos hover para que coincidan con la nueva imagen
        const hov1 = img1.data('hover');
        const hov2 = img2.data('hover');
        const hov3 = img3.data('hover');

        img2.data('hover', hov1); 
        img3.data('hover', hov2);
        img1.data('hover', hov3);

        $info.text("¡Imágenes rotadas!");
    });

    $('#btn-ocultar').click(function() {
        $('.imagen-interactiva').hide(1000);
        $info.text("Imágenes ocultas.");
    });

    $('#btn-mostrar').click(function() {
        $('.imagen-interactiva').show(1000); 
        $info.text("Imágenes visibles.");
    });

});