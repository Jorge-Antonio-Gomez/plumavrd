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