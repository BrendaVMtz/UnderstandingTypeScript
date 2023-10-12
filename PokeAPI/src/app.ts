///////// import axios
import axios from "axios";


//variables

let contenedor = document.getElementById(
  "contenedorPokemon"
)! as HTMLDivElement;

//funciones

const consultarPokemon = async (id: number, num: number) => {
  const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await resultado.json();
  const item = contenedor.querySelector(`#pokemon-${num}`)!;

  const results = crearPokemon(pokemon, num);
  item.innerHTML = results;
};

function consultarPokemones() {
  let primerID = Math.round(Math.random() * 150);
  let segundoID = Math.round(Math.random() * 150);

  consultarPokemon(primerID, 1);
  consultarPokemon(segundoID, 2);
}

const crearPokemon = (sprites: {front_default: any}, name: number) => {
  return `
        <img src="${sprites.front_default}" alt="${name}">
        <p>${name}</p>
    `;
};

//Ejecutable
consultarPokemones();
