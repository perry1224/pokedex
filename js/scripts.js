let pokemonRepository= (function() {
    let pokemonList = [
    {pokemon: "Bulbasaur", type: ["grass", "poison"], height:"5"},
    {pokemon: "Squirtle", type:["water"], height: "7"},
    {pokemon: "Charmander", type: ["fire"], height: "9"}
    
    ];
    
    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    add({pokemon: "Pikachu", type:["electric", "normal"], height: "6"},)

    return {
        getAll: getAll,
        add: add
    }
    })
    

    pokemonRepository().getAll().forEach(function(pokemon) {
 
    if (pokemon.height > 7) {
    
    
        document.write(pokemon.pokemon + '  '  + '(type:' + pokemon.type + ') ' +  '(height:' + pokemon.height + ')' + 'Wow you are tall!' + '<BR>');
    } else {
        document.write(pokemon.pokemon + '  ' + '(type:' + pokemon.type + ') ' + '(height:' + pokemon.height + ')'  + '<BR>');
    }
    
    });
    

