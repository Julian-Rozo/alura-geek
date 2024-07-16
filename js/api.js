//conexion api json
async function listarElementos () {
    const conexion = await fetch("https://6695c1030312447373bff5f8.mockapi.io/alurageek/elementos")
    const conexionConvertida = conexion.json();
    
    return conexionConvertida
}

//funcion para ingresar objetos a mi json https://my-json-server.typicode.com/Julian-Rozo/alura-geek-api/elementos
async function enviarElemento (titulo, precio, imagen) {
    const conexion = await fetch("https://6695c1030312447373bff5f8.mockapi.io/alurageek/elementos", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            precio:precio,
            imagen:imagen,
        })
    })
    const conexionConvertida = conexion.json()

    if(!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el video D:")
    }
    return conexionConvertida
}



export const conexionAPI= {
    listarElementos, enviarElemento
}

