class Peliculas {
  constructor(swapi_pelicula_body) {
    this.titulo = swapi_pelicula_body.title;
    this.id_episodio = swapi_pelicula_body.episode_id;
    this.texto_comienzo = swapi_pelicula_body.opening_crawl;
    this.director = swapi_pelicula_body.director;
    this.productor = swapi_pelicula_body.producer;
    this.fecha_estreno = swapi_pelicula_body.release_date;
    this.especies = swapi_pelicula_body.species;
    this.naves = swapi_pelicula_body.starships;
    this.vehiculos = swapi_pelicula_body.vehicles;
    this.personajes = swapi_pelicula_body.characters;
    this.planetas = swapi_pelicula_body.planets;
    this.url = swapi_pelicula_body.url;
    this.fecha_creacion = swapi_pelicula_body.created;
    this.fecha_edicion = swapi_pelicula_body.edited;
  }
}

module.exports = Peliculas;
