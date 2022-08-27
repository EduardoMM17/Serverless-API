"use strict";

const peliculas_service = require("../services/peliculas.service");

module.exports.save_one = async (event) => {
  const { film_id } = JSON.parse(event.body);
  const new_pelicula = await peliculas_service.save_one(film_id);

  return {
    statusCode: 200,
    body: JSON.stringify(new_pelicula),
  };
};

module.exports.get_one_from_db = async (event) => {
  const { id } = event.pathParameters;
  const pelicula = await peliculas_service.get_one_from_db(id);
  return {
    statusCode: 200,
    body: JSON.stringify(pelicula),
  };
};

module.exports.get_one_from_swapi = async (event) => {
  const { id } = event.pathParameters;
  const pelicula = await peliculas_service.get_one_from_swapi(id);
  return {
    statusCode: 200,
    body: JSON.stringify(pelicula),
  };
};
