const Pelicula = require("../models/peliculas.model");
const dynamodbService = require("./dynamodb.service");
const fetch_service = require("./fetch.service");
const constants = require("../utils/consts");

exports.save_one = async (id) => {
  const swapi_pelicula_body = await fetch_service.fetchWeb(
    `${constants.URLS.PELICULAS}/${id}/`
  );
  const new_pelicula = new Pelicula(swapi_pelicula_body);
  await dynamodbService.put_item(constants.TABLES.FILM, {
    id,
    ...new_pelicula,
  });

  return new_pelicula;
};

exports.get_one_from_db = async (id) => {
  const result = await dynamodbService.get_item(constants.TABLES.FILM, { id });
  return result.Item;
};

exports.get_one_from_swapi = async (id) => {
  const swapi_pelicula_body = await fetch_service.fetchWeb(
    `${constants.URLS.PELICULAS}/${id}/`
  );

  return swapi_pelicula_body;
};

exports.get_all_from_db = async () => {
  // const
};
