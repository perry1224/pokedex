
let pokemonList = [ 
{name: "bulbasaur", type: ["grass", "poison"], height:"5"}, 
{name: "squirtle", type:["water"], height: "7"}, 
{name: "charmander", type: ["fire"], height: "9"}
];

for (let i=0; i<=pokemonList.length; i++) {
if (pokemonList[i].height > 7) {
    

    document.write(pokemonList[i].name +' ' + pokemonList[i].type + '(height:' + pokemonList[i].height + ')' + 'Wow you are tall!' + '<BR>');
} else {
    document.write(pokemonList[i].name + ' ' + pokemonList[i].type + '(height:' + pokemonList[i].height + ')'  + '<BR>');
}


}