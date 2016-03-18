// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

PokemonApp.Pokemon = function (pokemonUri) {
  this.id = PokemonApp.Pokemon.idFromUri(pokemonUri);
  // podria declararse aqui el self.info y luego se le asigna response
};

PokemonApp.PokemonEvolutions = function (pokemonUri) {
  this.id = PokemonApp.PokemonEvolutions.idFromUri(pokemonUri);
};

PokemonApp.Pokemon.prototype.render = function () {
  console.log("Rendering pokemon: #" + this.id);

    var self = this; 
    //de esta forma el this esta disponible dentro del callback success

    $.ajax({
      url: "/api/pokemon/" + this.id, //podria ser self.id
      success: function (response) {

        self.info = response;

        $(".js-pkmn-name").text(self.info.name);
        $(".js-pkmn-number").text(self.info.pkdx_id);
        $(".js-pkmn-height").text(self.info.height);
        $(".js-pkmn-weight").text(self.info.weight);
        $(".js-pkmn-hp").text(self.info.hp);
        $(".js-pkmn-attack").text(self.info.attack);
        $(".js-pkmn-defense").text(self.info.defense);
        $(".js-pkmn-sp_atk").text(self.info.sp_atk);
        $(".js-pkmn-sp_def").text(self.info.sp_def);
        $(".js-pkmn-speed").text(self.info.speed);

        $(".js-pkmn-image").attr('src', 'http://pokeapi.co/media/img/'+self.id+'.png');

          pokemon_types = self.info.types;

          print_pokemon_types = [];

          for (i = 0; i < pokemon_types.length; i++){
            print_pokemon_types.push(pokemon_types[i].name);
          }

        $(".js-pkmn-type").text(print_pokemon_types)

        
        if (self.info.evolutions.length !== 0){
          $(".js-show-pokemon-evol").attr('data-pokemon-uri', self.info.evolutions[0].resource_uri);
        } else {
          $(".js-show-pokemon-evol").addClass("hidden");
        }
        

        $(".js-pokemon-modal").modal("show");    
      }
    });        

};

PokemonApp.PokemonEvolutions.prototype.render = function () {
  console.log("Rendering evolutions for: #" + this.id);

  var self = this; 
  // var next_evol_id = (this.id)
  //de esta forma el this esta disponible dentro del callback success

    $.ajax({
      url: "/api/pokemon/" + this.id, //podria ser self.id
      success: function (response) {

        self.info = response;

        $(".js-pkmn-evol-name").text(self.info.name);
        $(".js-pkmn-evol-number").text(self.info.pkdx_id);
        $(".js-pkmn-evol-image").attr('src', 'http://pokeapi.co/media/img/'+self.id+'.png');

        //   if (self.info.evolutions.length !== 0){
        //     $(".js-show-pokemon-evol").attr('data-pokemon-uri', self.info.evolutions[0].resource_uri);
        //   }

        $(".js-pokemon-evolution-modal").modal("show");  
    }
  });
};

PokemonApp.Pokemon.idFromUri = function (pokemonUri) {
  var uriSegments = pokemonUri.split("/"); // array de string separados por ("/"")
  var secondLast = uriSegments.length - 2;
  return uriSegments[secondLast];
};

PokemonApp.PokemonEvolutions.idFromUri = function (pokemonUri) {
  var uriSegments = pokemonUri.split("/"); // array de string separados por ("/"")
  var secondLast = uriSegments.length - 2;
  return uriSegments[secondLast];
};

$(document).on("ready", function () {

  $(".js-show-pokemon").on("click", function (event) {
    var $button = $(event.currentTarget);
    var pokemonUri = $button.data("pokemon-uri");

    var pokemon = new PokemonApp.Pokemon(pokemonUri); 
    
    pokemon.render();
  });

  $(".js-show-pokemon-evol").on("click", function (event) {
    var $button = $(event.currentTarget);
    var pokemonUri = $button.data("pokemon-uri");

    var pokemon_evol = new PokemonApp.PokemonEvolutions(pokemonUri); 
    
    pokemon_evol.render();

  });

});