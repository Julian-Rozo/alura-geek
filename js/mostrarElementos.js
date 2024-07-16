import { conexionAPI } from "./api.js";

const lista = document.querySelector("[data-lista]")
const resetButton = document.querySelector(".reset")

export function crearCard (titulo, precio, imagen, fueAñadido = false) {
    const elemento = document.createElement("div")
    elemento.className="product-card"
    if (fueAñadido) {
      elemento.classList.add("añadido")
    }
    elemento.innerHTML=`<img src="${imagen}" alt="${titulo}">
                        <div class="product-info">
                          <div>
                            <p>${titulo}</p>
                            <p>$${precio} COP</p>
                          </div>
                            <figure>
                              <img src="./img/icon-delete.png" alt="">
                            </figure>
                        </div>`;

    const deleteIcon = elemento.querySelector("figure img")
    deleteIcon.addEventListener("click", function(){
    elemento.remove()
    })
              
    return elemento;
}

async function listarElementos() {

    try {
      const listaAPI = await conexionAPI.listarElementos()
      lista.innerHTML=" "
      listaAPI.forEach(elemento=>lista.appendChild(crearCard(elemento.titulo, elemento.precio, elemento.imagen)))
    } catch {
        lista.innerHTML=`<h2 class="mensaje_titulo">Ha ocurrido un problema con la conexión D: </h2>`
    }
}

function resetElementos() {
  const añadidoUsuario = document.querySelectorAll(".añadido")
  añadidoUsuario.forEach(elemento => elemento.remove())
  listarElementos()
}

resetButton.addEventListener("click", resetElementos)

listarElementos()

