export class Planetas {
  constructor(swapi_planeta_body) {
    this.nombre = swapi_planeta_body.name;
    this.diametro = swapi_planeta_body.diameter;
    this.periodo_rotacion = swapi_planeta_body.rotation_period;
    this.periodo_orbita = swapi_planeta_body.orbital_period;
    this.gravedad = swapi_planeta_body.gravity;
    this.poblacion = swapi_planeta_body.population;
    this.clima = swapi_planeta_body.climate;
    this.terreno = swapi_planeta_body.terrain;
    this.agua_en_superficie = swapi_planeta_body.surface_water;
    this.residentes = swapi_planeta_body.residents;
    this.peliculas = swapi_planeta_body.films;
    this.url = swapi_planeta_body.url;
    this.fecha_creacion = swapi_planeta_body.created;
    this.fecha_edicion = swapi_planeta_body.edited;
  }
}

module.exports = Planetas;
