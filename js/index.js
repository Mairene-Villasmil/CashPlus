var buttonNav = document.getElementsByClassName("nav-link");
for (let i = 0; i < buttonNav.length; i++) {
    const element = buttonNav[i];
    element.addEventListener("click", function (e) {
        console.log(e.target.id);
        imprimir(e.target.id);
    });
}

function imprimir(id) {
    switch (id) {
        case "PreguntasFercuentes":
            console.log("Estoy en la página de preguntas frecuentes");
            break;

        case "Contactanos":
            console.log("Estoy en la página de contacto");
            break;

        default:
            console.log("Estoy en la página de inicio");
            break;
    }
}
