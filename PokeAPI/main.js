//variables

let contenedor = document.getElementById("contenedorPokemon")

//funciones

 const consultarPokemon = async (id, num) => {
        const resultado = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await resultado.json()
        console.log(pokemon)
        const item = contenedor.querySelector(`#pokemon-${num}`)

        const results = crearPokemon(pokemon,num)
        item.innerHTML =  results

}

function consultarPokemones() {
            let primerID = Math.round(Math.random()*150)
            let segundoID = Math.round(Math.random()*150) 

            consultarPokemon(primerID, 1)
            consultarPokemon(segundoID, 2)
}


const crearPokemon = ({sprites,name}) => {

    return `
        <img src="${sprites.front_default}" alt="${name}">
        <p>${name}</p>
    `
}


//Ejecutable
 consultarPokemones()
