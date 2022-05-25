let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let modalContainer = document.querySelector('#modal-container');
    
  
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
        item.imageUrl = details.sprites.front_default;
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
  
//Modal exercise 

    function showModal(pokemon) {

      
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");
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
      let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");

      // // creating element for abilities in modal content
      let abilitiesElement = $("<p>" + "abilities : " + pokemon.abilities + "</p>");

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
      
    
};
  
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
  
})
