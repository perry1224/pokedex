let pokemonRepository= (function() {
let pokemonList = [ 
{pokemon: "bulbasaur", type: ["grass", "poison"], height:"5"}, 
{pokemon: "squirtle", type:["water"], height: "7"}, 
{pokemon: "charmander", type: ["fire"], height: "9"}

];

function getAll () {
    return pokemonList;
}
function add (pokemon) {
    pokemonList.push(pokemon);
}
return {
    getAll: getAll,
    add: add
}
}) 

document.write(pokemonRepository.getAll())

pokemonList.forEach(function(pokemon) {

if (pokemon.height > 7) {
    

    document.write(pokemon.pokemon + '  '  + '(type:' + pokemon.type + ') ' +  '(height:' + pokemon.height + ')' + 'Wow you are tall!' + '<BR>');
} else {
    document.write(pokemon.pokemon + '  ' + '(type:' + pokemon.type + ') ' + '(height:' + pokemon.height + ')'  + '<BR>');
}


})();