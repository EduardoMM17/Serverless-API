class Raiz {
  constructor(swapi_raiz_body) {
    this.peliculas = swapi_raiz_body.films;
    this.personas = swapi_raiz_body.people;
    this.planetas = swapi_raiz_body.planets;
    this.especies = swapi_raiz_body.species;
    this.naves = swapi_raiz_body.starships;
    this.vehiculos = swapi_raiz_body.vehicles;
  }
}

module.exports = Raiz;
