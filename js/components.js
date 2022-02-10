

// HEADER
{
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", `<header></header>`);

    const header = document.getElementsByTagName("header")[0];
    header.innerHTML = `
        <div class="plumaverde">
            <a href="/">
                <img class="plumaverde_logo" src="/images/logo_simple.svg" width="auto" height="80px" alt="Logotipo de Pluma Verde">
            <p class="plumaverde_name">
                <b>Asamblea Estudiantil</b><br>
                Centro de Investigación<br>
                y Docencia Económicas
            </p>
            </a>
        </div>
        <div class="header_right_content">
            <nav class="header_nav" id="header_nav">
                <ul class="nav_list">
                    <li class="element order-1"><a class="element_link" href="/">Inicio</a></li>
                    <li class="element order-2"><a class="element_link" href="#">Quiero Participar</a></li>
                    <li class="element order-2"><a class="element_link" href="#">Avisos y comunicados</a></li>
                    <li class="element order-2"><a class="element_link" href="/pages/directory.html">Directorio</a></li>
                    <li class="element order-2"><a class="element_link" href="#">Iniciar sesión</a></li>
                    <li class="element order-3" id="nav_menu_button">
                        <img src="/images/icon_burguer_menu.svg" alt="Menú de navegación" width="auto" height="16px">
                        <div id="element_container">
                            <nav>
                                <ul>
                                    <li class="element order-1"><a class="element_link" href="/">Inicio</a></li>
                                    <li class="element order-2"><a class="element_link" href="#">Quiero Participar</a></li>
                                    <li class="element order-2"><a class="element_link" href="#">Avisos y comunicados</a></li>
                                    <li class="element order-2"><a class="element_link" href="/pages/directory.html">Directorio</a></li>
                                    <li class="element order-2"><a class="element_link" href="#">Iniciar sesión</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div id="element_visual_identifier"></div>
                    </li>
                </ul>
            </nav>

            <div class="cide">
                <a href="https://www.cide.edu/" class="image_link" target="blank">
                    <img src="/images/cide_logo.svg" height="75px" width="auto" alt="Logotipo del CIDE">
                    <p class="cide_name">
                        Centro de<br>
                        Investigación<br>
                        Y Docencia<br>
                        Económicas
                    </p>
                </a>
            </div>
        </div>
    `;
}

// FOOTER
{
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("beforeend", `<footer></footer>`);
    
    const footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = `
        <div class="footer_left_content">
            <div class="content_block">
                <p>
                    <b>Pluma Verde<br>
                    Asamblea Estudiantil</b><br>
                    Centro de Investigación<br>
                    y Docencia Económicas<br>
                    <br>
                    <a href="https://www.plumaverde.org">www.plumaverde.org</a>
                </p>
            </div>
            <div class="content_block">
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Transparencia</a></li>
                        <li><a href="#">Quiero Participar</a></li>
                        <li><a href="#">Avisos y Comunicados</a></li>
                        <li><a href="/pages/directory.html">Directorio</a></li>
                        <li><a href="#">Iniciar sesión</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="footer_center_content">
            <img src="/images/logo_simple_white.svg" width="80px" height="auto" alt="Logotipo de Pluma Verde">
            <p>@PlumaVerde.ORG</p>
            <div class="social_media-global">
                <a href="https://t.me/joinchat/C_baSR8k34w5ZGQx" target="blank" class="social_media-global-item"><img src="/images/sn_telegram.svg" alt="Icono de Telegram" width="32px" height="auto"></a>
                <a href="https://twitter.com/plumaverdeORG" target="blank" class="social_media-global-item"><img src="/images/sn_twitter.svg" alt="Icono de Telegram" width="32px" height="auto"></a>
            </div>
        </div>
        <div class="footer_right_content">
            <div class="content_block">
                <details class="switch_lang-select">
                    <summary class="switch_lang-select-header">
                        <p>
                            <img src="/images/icon_world_white.svg" class="text_world" alt="Lenguaje" width="16px" height="16px"> Cambiar lenguaje <div class="marker"></div>
                        </p>
                    </summary>
                    <div class="switch_lang-select-options">
                        <div value="es" class="option">Español</div>
                        <div value="en" class="option">English</div>
                    </div>
                </details>
                <p class="conditions">
                    <a href="#">Términos de uso y condiciones</a><br>
                    <a href="#">Contáctanos</a><br>
                    <br>
                    <a href="https://www.cide.edu/" target="blank">Sitio oficial del CIDE</a>
                </p>
            </div>
            <div class="content_block">
                <p>Este sitio WEB ha sido<br>
                    diseñado y desarrollado por:<br>
                    <a href="#"><b>• Desarrollador 1</b></a><br>
                    <a href="#">@desarrollador_1</a><br>
                    <a href="#"><b>• Desarrollador 2</b></a><br>
                    <a href="#">desarrollador_2@custom.mail</a>
                </p>
            </div>
        </div>
    `;
}