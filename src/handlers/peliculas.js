"use strict";

const peliculas_service = require("../services/peliculas.service");

module.exports.save_one = async (event) => {
  try {
    const { film_id } = JSON.parse(event.body);
    const new_pelicula = await peliculas_service.save_one(film_id);

    return {
      status_code: 200,
      body: JSON.stringify(new_pelicula),
    };
  } catch (error) {
    return {
      code: 400,
      error_message: error.message,
    };
  }
};

module.exports.get_one_from_db = async (event) => {
  try {
    const { id } = event.pathParameters;
    const pelicula = await peliculas_service.get_one_from_db(id);
    return {
      status_code: 200,
      body: JSON.stringify(pelicula),
    };
  } catch (error) {
    return {
      code: 400,
      error_message: error.message,
    };
  }
};

module.exports.get_one_from_swapi = async (event) => {
  try {
    const { id } = event.pathParameters;
    const pelicula = await peliculas_service.get_one_from_swapi(id);
    return {
      statusCode: 200,
      body: JSON.stringify(pelicula),
    };
  } catch (error) {
    return {
      code: 400,
      error_message: error.message,
    };
  }
};

module.exports.get_all_from_db = async () => {
  try {
    const peliculas = await peliculas_service.get_all_from_db();
    return {
      body: JSON.stringify(peliculas),
      status: 200,
    };
  } catch (error) {
    return {
      code: 400,
      error_message: error.message,
    };
  }
};
