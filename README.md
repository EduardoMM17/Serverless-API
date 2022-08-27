## Project Description  
Title: 'Serverless callenge by RIMAC'  
Description: 'This project is part of the challenges from the hiring process by RIMAC. It consists of setting up a serverless architecture through AWS Lambdas. The well known Serverless framework is used and the API has 4 endpoints that will be described below.'  
Cloud: AWS  
Framework: serverless  
Framework-docs: https://www.serverless.com/framework/docs/getting-started  
Db: Dynamodb  
Language: nodeJS  
AuthorLink: 'https://github.com/Marcuss17'  
AuthorName: 'EM'  

### Endpoint 1. 
Description: Fetches a movie JSON from SWAPI, creates a Pelicula object with the movie fields translated to spanish and saves the new Pelicula in table called FilmsT in Dynamodb.  
Method: POST  
Path: /pelicula  
Body: { film_id: number }  

### Endpoint 2.  
Description: Returns a pelicula Item from FilmsT table in Dynamodb according to the id passed in the url.  
Method: GET  
Path: /fetch-pelicula/:id  
Params: { id: number }  

### Endpoint 3.  
Description: Returns a movie from SWAPI according to the id passed in the url.  
Method: GET  
Path: /fetch-pelicula-swapi/:id  
Params: { id: number }  

### Endpoint 4.  
Description: Returns all Items from FilmsT table in Dynamodb.  
Method: GET  
Path: /pelicula  

### Deployment  
To deploy new functions run: sls deploy --verbose at root level  
