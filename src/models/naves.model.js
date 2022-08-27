class Naves {
  constructor(swapi_naves_body) {
    this.nombre = swapi_naves_body.name;
    this.modelo = swapi_naves_body.model;
    this.clase_nave = swapi_naves_body.starship_class;
    this.manufacturero = swapi_naves_body.manufacturer;
    this.costo_en_creditos = swapi_naves_body.cost_in_credits;
    this.largo = swapi_naves_body.length;
    this.tripulacion = swapi_naves_body.crew;
    this.pasajeros = swapi_naves_body.passengers;
    this.max_velocidad_atmosferica = swapi_naves_body.max_atmosphering_speed;
    this.calificacion_hiperimpulsor = swapi_naves_body.hyperdrive_rating;
    this.MGLT = swapi_naves_body.MGLT;
    this.capacidad_carga = swapi_naves_body.cargo_capacity;
    this.peliculas = swapi_naves_body.films;
    this.pilotos = swapi_naves_body.pilots;
    this.url = swapi_naves_body.url;
    this.fecha_creacion = swapi_naves_body.created;
    this.fecha_edicion = swapi_naves_body.edited;
  }
}

module.exports = Naves;
