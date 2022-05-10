let pokemonRepository= (function() {
    let pokemonList = [
    {pokemon: "Bulbasaur", type: ["grass", "poison"], height:"5"},
    {pokemon: "Squirtle", type:["water"], height: "7"},
    {pokemon: "Charmander", type: ["fire"], height: "9"},
    {pokemon: "Pikachu", type:["electric", "normal"], height: "6"},
    {pokemon: "Gyarados", type:["water", "dragon"], height: "100"},
    ];
    
    function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "types" in pokemon
        ) {
          pokemonList.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
      }

    function getAll () {
        return pokemonList;
    }
  
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.pokemon;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        addEvent(button, pokemon);
      }
      function addEvent(button, pokemon) {
        button.addEventListener('click', function() {
          showDetails(pokemon);
        });
      }
        function showDetails(pokemon) {
            console.log(pokemon);
        }

      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
      };
    })();
    
  
    
    console.log(pokemonRepository.getAll());
    
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
    

