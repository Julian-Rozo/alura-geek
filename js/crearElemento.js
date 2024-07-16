import { conexionAPI } from "./api.js"
import { crearCard } from "./mostrarElementos.js";

const formulario = document.querySelector("[data-formulario]")

function esURLValida(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

async function crearElemento (evento) {
    evento.preventDefault()

    const titulo = document.querySelector("[data-titulo]").value
    const precio = document.querySelector("[data-precio]").value
    const imagen = document.querySelector("[data-imagen]").value

    if (!titulo || !precio || !imagen) {
        alert("No es posible enviar el elemento. Por favor, completa todos los campos.");
        return;
    }

    if (!esURLValida(imagen)) {
        alert("URL inválida.");
        return;
    }

    try {
        await conexionAPI.enviarElemento(titulo, precio, imagen)

        formulario.reset()

    const nuevoElemento = crearCard(titulo, precio, imagen, true)
    document.querySelector("[data-lista]").appendChild(nuevoElemento)
        


    } catch (e) {
        alert(e)
    }

}

formulario.addEventListener("submit", evento => crearElemento(evento))
