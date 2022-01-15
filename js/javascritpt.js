// Para el HEADER
{
    // Para exoandir el header inyectando la clase .header_open_menu al header
    const header = document.getElementsByTagName("header")[0];
    const elementContainer = document.getElementById("element_container");

    // Para detectar los clicks en el botón del menú
    const navMenuButton = document.getElementById("nav_menu_button");
    var buttonState = "closed";

    navMenuButton.addEventListener("click", function() {
        // Declaración de variables
        const navMenuButtonImg = navMenuButton.getElementsByTagName("img")[0];
        let navMenuButtonImgSrc = navMenuButtonImg.getAttribute("src");
        const elementVisualIdentifier = document.getElementById("element_visual_identifier");
        const elementContainerNav = elementContainer.querySelector("nav");

        // Para cambiar la imagen del icono
        if (buttonState == "closed") {
            navMenuButtonImg.setAttribute("src", "/images/icon_close_menu.svg");
            navMenuButtonImg.style.margin = "0 1.555rem 0.3rem";

            buttonState = "open";
        }
        else if (buttonState == "open") {
            navMenuButtonImg.setAttribute("src", "/images/icon_burguer_menu.svg");
            navMenuButtonImg.style.margin = "0 1.5rem 0.3rem";

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
            header.style.marginBottom = "4rem";
            
            // 2. Para añadir el tamaño al elemento de color . element_container
            elementContainer.style.height = "4rem";
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
}



// Para deslizar al dar click a los botones de la sección de redes sociales
{
    // Botones
    const leftBttn = document.querySelector("#to_left-bttn");
    const rightBttn = document.querySelector("#to_right-bttn");
        // Contendor a hacer scroll
    const snetFeed = document.querySelector(".social_networks-feed");
        //Ancho de los cards
    const card = document.querySelectorAll(".social_networks-feed-card")[0];
    var cardWidth = document.querySelectorAll(".social_networks-feed-card")[0].clientWidth;
            // Para actualizar el ancho de los cards
    function cardWidthRezise() {
        cardWidth = card.clientWidth;
        // console.log(cardWidth);
    }
        
    // Funciones
    function scrollLeft() {
        cardWidthRezise()
        snetFeed.scrollLeft -= cardWidth;
    }
    function scrollRight() {
        cardWidthRezise()
        snetFeed.scrollLeft += cardWidth;
    }

    // Ejecución de las funciones
    leftBttn.addEventListener('click', function() {
        scrollLeft()
    });
    rightBttn.addEventListener('click', function() {
        scrollRight()
    });
}

// Para inyectar rel="noopener noreferrer" a todos los links
{
    var aLinks = document.getElementsByTagName("a");
    
    let i = 0;
    while (i < aLinks.length) {
        aLinks[i].setAttribute("rel", "noopener noreferrer");
        i++
    }
}

// Para cerrar el menú emergente de "Cambiar lenguaje" al dar click fuera del menú
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

// Para el slider de comunicados
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
        releasesControllerItems[actualPositionIndex].classList.add("active_item");

    }, 10000);
}