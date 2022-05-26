let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let modalContainer = document.querySelector('#modal-container');
let input = $('input');
input.on('input', filterList);  
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return pokemonList;
    }
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      button.setAttribute("data-toggle", "modal")
      button.setAttribute("data-target", "#modal")
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function(event) {
        showDetails(pokemon);
      });
    }
  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
  
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        item.abilities = details.abilities;
      }).catch(function (e) {
        console.error(e);
      });
    }


    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(pokemon);
    
    });
      
    }
  
    function filterList() {
      let inputValue = $('input').val();
      let list = $('li');
      list.each(function () {
        let item = $(this);
        let name = item.text();
        if (name.startsWith(inputValue.toLowerCase())) {
          item.show();
        } else {
          item.hide();
        }
      });
    }

//Modal exercise 

    function showModal(pokemon) {

      
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      modalTitle.empty();
      modalBody.empty();

      //creating element for name in modal content
      let nameElement = $("<h1>" + pokemon.name + "</h1>");
      // // creating img in modal content
      let imageElementFront = $('<img class="modal-img" style="width:50%">');
      imageElementFront.attr("src", pokemon.imageUrlFront);
      let imageElementBack = $('<img class="modal-img" style="width:50%">');
      imageElementBack.attr("src", pokemon.imageUrlBack);
      
      // // creating element for height in modal content
      let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");

      // // creating element fo weight in modal content
      let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");

      // // creating element for type in modal content
const xs = [];
for (let i = 0; i < pokemon.types.length; i++) {
  xs.push(pokemon.types[i].type.name);
}
const types = xs.join(" - ");      

      let typesElement = $("<p>" + "types : " + types + "</p>");

      // // creating element for abilities in modal content
  
      const xz = [];
      for (let i = 0; i < pokemon.abilities.length; i++) {
        xz.push(pokemon.abilities[i].ability.name);
      }
      const abilities = xz.join(" - ");      
      
      let abilitiesElement = $("<p>" + "abilities : " + abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
   
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      filterList: filterList,
      
  
    }
    
})();
  
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });