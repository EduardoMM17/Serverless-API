class Personas {
  constructor(swapi_persona_body) {
    this.nombre = swapi_persona_body.name;
    this.fecha_nacimiento = swapi_persona_body.birth_year;
    this.colores_ojos = swapi_persona_body.eye_color;
    this.genero = swapi_persona_body.gender;
    this.colores_cabello = swapi_persona_body.hair_color;
    this.estatura = swapi_persona_body.height;
    this.masa_persona = swapi_persona_body.mass;
    this.colores_piel = swapi_persona_body.skin_color;
    this.mundo_de_nacimiento = swapi_persona_body.homeworld;
    this.peliculas = swapi_persona_body.films;
    this.especies = swapi_persona_body.species;
    this.naves = swapi_persona_body.starships;
    this.vehiculos = swapi_persona_body.vehicles;
    this.url = swapi_persona_body.url;
    this.fecha_creacion = swapi_persona_body.created;
    this.fecha_edicion = swapi_persona_body.edited;
  }
}

module.exports = Personas;
