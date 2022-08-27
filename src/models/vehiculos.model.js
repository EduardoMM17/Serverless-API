class Vehiculos {
  constructor(swapi_vehiculo_body) {
    this.nombe = swapi_vehiculo_body.name;
    this.modelo = swapi_vehiculo_body.model;
    this.clase = swapi_vehiculo_body.vehicle_class;
    this.manufacturero = swapi_vehiculo_body.manufacturer;
    this.largo = swapi_vehiculo_body.length;
    this.costo_creditos = swapi_vehiculo_body.cost_in_credits;
    this.num_tripulacion = swapi_vehiculo_body.crew;
    this.pasajeros = swapi_vehiculo_body.passengers;
    this.max_velocidad_atmosferica = swapi_vehiculo_body.max_atmosphering_speed;
    this.capacidad_carga = swapi_vehiculo_body.cargo_capacity;
    this.consumibles = swapi_vehiculo_body.consumables;
    this.peliculas = swapi_vehiculo_body.films;
    this.pilotos = swapi_vehiculo_body.pilots;
    this.url = swapi_vehiculo_body.url;
    this.fecha_creacion = swapi_vehiculo_body.created;
    this.fecha_edicion = swapi_vehiculo_body.edited;
  }
}

module.exports = Vehiculos;
