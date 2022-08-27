class Especies {
  constructor(swapi_especies_body) {
    this.nombre = swapi_especies_body.name;
    this.clasificacion = swapi_especies_body.classification;
    this.designacion = swapi_especies_body.designation;
    this.estatura_promedio = swapi_especies_body.average_height;
    this.tiempo_vida_promedio = swapi_especies_body.average_lifespan;
    this.colores_ojos = swapi_especies_body.eye_colors;
    this.colores_cabello = swapi_especies_body.hair_colors;
    this.colores_piel = swapi_especies_body.skin_colors;
    this.lenguaje = swapi_especies_body.language;
    this.mundo_de_nacimiento = swapi_especies_body.homeworld;
    this.personas = swapi_especies_body.people;
    this.peliculas = swapi_especies_body.films;
    this.url = swapi_especies_body.url;
    this.fecha_creacion = swapi_especies_body.created;
    this.fecha_edicion = swapi_especies_body.edited;
  }
}

module.exports = Especies;
