// DEPENDENCIAS
    // EMPTY

// ESTRUCTURA, FUNCIONAMIENTO Y ESTILOS: Para el HEADER
{
    // Para expandir el header inyectando la clase .header_open_menu al header
    const header = document.getElementsByTagName("header")[0];
    const elementContainer = document.getElementById("element_container");

    // Para detectar los clicks en el botón del menú
    const navMenuButton = document.getElementById("nav_menu_button");
    var buttonState = "closed";
    navMenuButton.addEventListener("click", function() {
        // Declaración de variables
        const navMenuButtonImg = navMenuButton.getElementsByTagName("img")[0];
        const elementVisualIdentifier = document.getElementById("element_visual_identifier");
        const elementContainerNav = elementContainer.querySelector("nav");
        var windowWidth = window.innerWidth;

        // Para cambiar la imagen del icono
        if (buttonState == "closed") {
            navMenuButtonImg.setAttribute("src", "/images/icon_close_menu.svg");
            navMenuButtonImg.style.margin = "0 2.055rem 0.3rem";

            buttonState = "open";
        }
        else if (buttonState == "open") {
            navMenuButtonImg.setAttribute("src", "/images/icon_burguer_menu.svg");
            navMenuButtonImg.style.margin = "0 2rem 0.3rem";

            buttonState = "closed"
        }
        // Caso de emergencia, pero no necesario
        else {
            navMenuButtonImg.setAttribute("src", "/images/icon_burguer_menu.svg");

            buttonState = "closed";
        }

        // Otras condicionales basadas en el estado del botón
        if (buttonState == "open") {
            // 1. Para añadir el margin-bottom de 4rem del header
            if (windowWidth >= 695) {
                header.style.marginBottom = "4rem";
            }
            else {
                header.style.marginBottom = "calc(4rem * 5 + 2rem)";
            }
            
            // 2. Para añadir el tamaño al elemento de color . element_container
            if (windowWidth >= 695) {
                elementContainer.style.height = "4rem";
            }
            else {
                elementContainer.style.height = "calc(4rem * 5 + 2rem)";
            }
            elementContainer.style.transition = "all 380ms ease";

            // 3. Para mostrar el identifier
            elementVisualIdentifier.style.borderBottomWidth = "1rem";

            // 4. Para mostrar el Menú de navegación <nav>
            elementContainerNav.style.display = "block";
            elementContainerNav.style.animation = "ease leftSlide 500ms forwards";
            
        }
        else {
            // 1. Para quitar el margin-bottom de 4rem del header
            header.style.marginBottom = "0";
            
            // 2. Para quitar el tamaño al elemento de color . element_container
            elementContainer.style.height = "0";
            elementContainer.style.transition = "all 420ms ease";
            
            // 3. Para ocultar el identifier
            elementVisualIdentifier.style.borderBottomWidth = "0";

            // 4. Para mostrar el Menú de navegación <nav>
            elementContainerNav.style.animation = "ease showOut 100ms forwards";
        }

    })

    // Para ajustar el tamaño del menú desplegable si cambia el tamaño de la ventana
    window.addEventListener("resize", function() {
        var windowWidth = window.innerWidth;
        if (buttonState == "open") {
            if (windowWidth >= 695) {
                // 1. Para ajustar el margin-bottom de 4rem del header
                if (header.style.marginBottom != "4rem") {
                    header.style.marginBottom = "4rem"
                }
                
                // 2. Para ajustar el tamaño al elemento de color . element_container
                if (elementContainer.style.height != "4rem") {
                    elementContainer.style.height = "4rem"
                }
            }
            else if (windowWidth < 695) {
                // 1. Para ajustar el margin-bottom de calc(4rem * 5 + 2rem) del header
                if (header.style.marginBottom != "calc(4rem * 5 + 2rem)") {
                    header.style.marginBottom = "calc(4rem * 5 + 2rem)";
                }
                
                // 2. Para ajustar el tamaño al elemento de color . element_container
                if (elementContainer.style.height != "calc(4rem * 5 + 2rem)") {
                    elementContainer.style.height = "calc(4rem * 5 + 2rem)";
                }
            }
        }
        // console.log(buttonState);
    });
}

// ESTRUCTURA Y FUNCIONAMIENTO: Los botones de la sección de redes sociales
{
    // Variables y constantes
        // Botones
    const leftBttn = document.querySelector("#to_left-bttn");
    const rightBttn = document.querySelector("#to_right-bttn");
        // Contendor a hacer scroll
    const socialNetworksFeed = document.getElementById("social_networks-feed");
    var actualScroll;
        //Ancho de los cards
    const feedCards = document.querySelectorAll(".social_networks-feed-card");
    const feedCard = document.querySelectorAll(".social_networks-feed-card")[0];
    var cardWidth = document.querySelectorAll(".social_networks-feed-card")[0].clientWidth;
        // Obtener margin de los cards
    var feedCardMarginRight;
    let actualPosition = 1;
    
    // Función para actualizar el ancho de los cards
    function cardWidthRezise() {
        cardWidth = feedCard.clientWidth;

        // Para determinar el valor del margin de los cards
        feedCardMarginRight = parseFloat(window.getComputedStyle(feedCard).getPropertyValue("margin-right"));
    }

    // Ejecución de las funciones con escuchadores de clicks
        // Adjuntar el contenido en funciones
        function leftBttnFn() {
            cardWidthRezise();
            socialNetworksFeed.scrollLeft -= cardWidth;
            
            // Para determinar la posición del nuevo scroll y para ejecutar la función de cambio de tamaño de contenedor
            actualScroll = socialNetworksFeed.scrollLeft - (cardWidth + parseFloat(feedCardMarginRight));
            socialNetworksFeedHeightController(actualScroll);
        }
        function rightBttnFn() {
            cardWidthRezise();
            socialNetworksFeed.scrollLeft += cardWidth;
            
            // Para determinar la posición del nuevo scroll y para ejecutar la función de cambio de tamaño de contenedor
            actualScroll = socialNetworksFeed.scrollLeft + (cardWidth + parseFloat(feedCardMarginRight));
            socialNetworksFeedHeightController(actualScroll);
        }

    leftBttn.addEventListener('click', leftBttnFn);
    rightBttn.addEventListener('click', rightBttnFn);
    

    // Ejecución de las funciones con escuchadores de swipe (sólo en dispositivos menores a 695px) // USO DE DEPENDENCIA PARA EL EVENTO SWIPED
    {
        // var listenerValidator = 0;
        //            
        //     // Añadir listeners de swipe si la pantalla es menor a 695 la primera vez
        //     if (window.innerWidth < 695) {
        //         // Hacia la derecha
        //         socialNetworksFeed.addEventListener('swiped-left', rightBttnFn);
        //
        //         // Hacia la izquierda
        //         socialNetworksFeed.addEventListener('swiped-right', leftBttnFn);
        //
        //         // Validador
        //         listenerValidator = 1;
        //     }
        //     else {
        //         // Validador
        //         listenerValidator = 2;
        //     }
        //
        //     // Quitar o agregar los listeners al cambiar el tamaño de la ventana
        //     window.addEventListener("resize", function(){
        //         if (window.innerWidth < 695) {
        //             if (listenerValidator == 1) {
        //                     // Validador
        //                     listenerValidator = 3;
        //             }
        //             else if (listenerValidator == 2 || listenerValidator == 4) {
        //                 // Hacia la derecha
        //                 socialNetworksFeed.addEventListener('swiped-left', rightBttnFn);                  
        //                 // Hacia la izquierda
        //                 socialNetworksFeed.addEventListener('swiped-right', leftBttnFn);
        //
        //                     // Validador
        //                     listenerValidator = 3;
        //             }
        //         }
        //
        //         else if (window.innerWidth >= 695) {
        //             if (listenerValidator == 1 || listenerValidator == 3) {
        //                 socialNetworksFeed.removeEventListener('swiped-left', rightBttnFn);
        //                 socialNetworksFeed.removeEventListener('swiped-right', leftBttnFn);
        //
        //                     // Validador
        //                     listenerValidator = 4;
        //             }
        //             else if (listenerValidator == 2) {
        //                     // Validador
        //                     listenerValidator = 4;
        //             }
        //         }
        //     });
    }

    
    // Para ajustar el contenedor al tamaño de la tarjeta actual
    // NOTA: ESTO SOLO DEBE OCURRIR CUANDO EL ANCHO DE PANTALLA ES MENOR A 695px
    function socialNetworksFeedHeightController (actualScroll) {
        if (window.innerWidth < 695) {
            // Para determinar la pocisión de feed actual y para identificar el card en la pocisión
                if (actualScroll < 0) {
                    actualPosition = 1;
                }
                else if (actualScroll > socialNetworksFeed.scrollWidth) {
                    actualPosition = parseInt(actualScroll / (cardWidth + feedCardMarginRight));
                }
                else {
                    actualPosition = parseInt(actualScroll / (cardWidth + feedCardMarginRight) + 1);
                }

            // Para generar el índice de la posición actual
                let actualPositionIndex = actualPosition - 1;

            // Para obtener la altura del card actual
                let actualCard = feedCards[actualPositionIndex];
                    if (actualCard != null) {
                var actualCardHeight = actualCard.clientHeight;
                    }
                let actualCardHeightPX = `${actualCardHeight}px`;
            
            // Para asignar al contenedor el tamaño de la tarjeta actual
                setTimeout (function() {
                    socialNetworksFeed.style.height = actualCardHeightPX;
                }, 400);
        }
    }

    // Ajustar el contenedor al tamaño del card inicial una vez que se carga la página // AQUÍ SE USA LA DEPENDENCIA "RESIZE SENSOR"
    const initialCard = feedCards[0];

    new ResizeSensor(initialCard, function() {
        actualScroll = -1;
        socialNetworksFeedHeightController (actualScroll);
    });    
    
    // Ajustar el contenedor al hacer scroll con el dedo
    var antiRepeaterValue = 0;
    
        // Ejecutar pasados 4 segundos de inicializada la página
        setTimeout(function() {
            antiRepeaterValue = 1;
        }, 4000);
    
        // Para Añadir el escuchador del Scroll
        socialNetworksFeed.addEventListener("scroll", function() {
            // Para definir un temporizador que evita que el listener se ejecute más de una vez por segundo
            if (antiRepeaterValue == 1) {
                antiRepeaterValue = 0;

                // Para ejecutar solo cuando la pantalla es pequeña
                if (window.clientWidth < 695) {
                    setTimeout(function(){
                        // Actualizar valores
                        cardWidthRezise();
                        actualScroll = socialNetworksFeed.scrollLeft;
                        console.log("Ahora se va a ejecutar tu maldita función de resize.");
    
                        // Ejecutar la función de cambio de altura
                        socialNetworksFeedHeightController(actualScroll);
    
                        // Reestablecimiento de variable de control
                        antiRepeaterValue = 1;
                    }, 1000);
                }
            }
        });

}

// ESTRUCTURA: Para inyectar rel="noopener noreferrer" a todos los links
{
    var aLinks = document.getElementsByTagName("a");
    
    let i = 0;
    while (i < aLinks.length) {
        aLinks[i].setAttribute("rel", "noopener noreferrer");
        i++
    }
}

// ESTILOS: Para cerrar el menú emergente de "Cambiar lenguaje" al dar click fuera del menú
{
    // Extracción de los elementos del HTML
    const footer = document.querySelector("footer");
    const changeLang = footer.querySelectorAll(".switch_lang-select")[0];

    // Escuchador del click
    document.addEventListener("click", function() {
        // Función para cerrar el menú
        changeLang.removeAttribute("open");
    });
    
    changeLang.addEventListener("click", function() {
        // Función para cerrar el menú
        
        // Primero, determinar si el objeto "details" está abierto (si tiene el atributo "open")
        let thereOpen = changeLang.getAttribute("open");
        
        // Segundo, Si está abierto, quitar el atributo open
        if (thereOpen !== null) {
            setTimeout(function() {
                changeLang.removeAttribute("open");
            },1);
        }
    });
}

// ESTRUCTURA Y FUNCIONAMIENTO: Para el slider de comunicados
{
    // Declaración de constantes iniciales y variables
    const releasesContainer = document.getElementById('releases_container');
    const releasesItems = document.querySelectorAll('.releases_item');
    const releasesController = document.getElementById('releases_controller');
    // VAR DEC: Para saber en dónde estoy
    var a = 0;
    var b = releasesContainer.clientWidth;
    var actualPosition = 1;
    var actualPositionIndex = actualPosition - 1;


    // Para inyectar la cantidad de dots necesaria en el slider
    for (let i = 0; i < releasesItems.length; i++) {
        releasesController.innerHTML += `
            <div class="releases_controller-item"></div>
        `;
    }

    // Obtener dots del DOM y activar el primero
    const releasesControllerItems = document.querySelectorAll('.releases_controller-item');
    releasesControllerItems[0].classList.add("active_item");

    // Para activar el dot al que se la hace clic

    for (let i = 0; i < releasesControllerItems.length; i++) {
        releasesControllerItems[i].addEventListener("click", function(){
            // Variables temporales
            let i1 = i + 1;
            let i1Limit = releasesControllerItems.length;

            // Retirar el estilo "active_item" a todos los dots
            for (let i = 0; i < releasesItems.length; i++) {
                releasesControllerItems[i].classList.remove("active_item");
            }

            // Añadir el estilo "active_item" al dot que se le dió click
            releasesControllerItems[i].classList.add("active_item");

            // Aplicar posición del scroll
            let releasesContainerWidth = releasesContainer.clientWidth;
            releasesContainer.scrollLeft = (i * releasesContainerWidth);

            // Para determinar la posición actual
            a = b * i;
            actualPosition = parseInt((a + b) / b);
            actualPositionIndex = actualPosition - 1;
            // console.log("Posición actual: " + actualPosition);
        });
    }

    // Para activar el siguiente dot de forma automática con temporizador
    setInterval(function() {
        // VAR DEC: Ancho del contenedor de los releases_item
        let releasesContainerWidth = releasesContainer.clientWidth;
        // VAR DEC: Ancho total del contenedor de los releases_item, menos item
        let releasesContainerFullWidthLess1 = (releasesContainer.clientWidth * (releasesItems.length - 1));


        // Aplicar posición del scroll en un elemento "item" a la derecha. Y regresar al inicio si estamos en el último elemento 
        if (releasesContainer.scrollLeft >= releasesContainerFullWidthLess1) {
            releasesContainer.scrollLeft = 0;

            // Esta variable será usada para saber dónde estoy
            a = 0;
        }
        else {
            releasesContainer.scrollLeft += (releasesContainerWidth);

            // Esta variable será usada para saber dónde estoy
            a = releasesContainer.scrollLeft + b;
        }       

        // Para saber en dónde estoy
            // DECLARED let a = releasesContainer.scrollLeft;
            // DECLARED let b = releasesContainer.clientWidth;
        actualPosition = parseInt((a + b) / b);
        actualPositionIndex = actualPosition - 1;

        // Retirar el estilo "active_item" a todos los dots
        for (let i = 0; i < releasesItems.length; i++) {
            releasesControllerItems[i].classList.remove("active_item");
        }

        // Para Añadir el estilo "active_item" al dot que está activo en pantalla
        if (releasesControllerItems[actualPositionIndex] != null) {
            releasesControllerItems[actualPositionIndex].classList.add("active_item");
        }

    }, 10000);
}

// ESTILOS: Para cargar los estilos de transición hasta cargada la página. --> Estilos por clase <--
{
    window.onload = function() {
        // Al header
        const header = document.getElementsByTagName("header")[0];
        header.classList.add("transition-400");

        // Al selector visual "#element_visual_identifier"
        const elementVisualIdentifier = document.getElementById("element_visual_identifier");
        elementVisualIdentifier.classList.add("transition-400");
    };
}