<!--
title: 'Serverless callenge by RIMAC'
description: 'This project is part of the challenges from the hiring process by RIMAC. It consists of setting up a serverless architecture through AWS Lambdas. The well known Serverless framework is used and the API has 4 endpoints that will be described below.'
cloud: AWS
framework: serverless
framework-docs: https://www.serverless.com/framework/docs/getting-started
db: Dynamodb
language: nodeJS
authorLink: 'https://github.com/Marcuss17'
authorName: 'EM'
-->

# Endpoint 1. Fetches a movie JSON from SWAPI, creates a Pelicula class with the movie fields translated to spanish and saves the new Pelicula in table called FilmsT in Dynamodb.
Method: POST
Path: /pelicula
Body: {film_id: number}
