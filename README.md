# Use code from develop branch
## Install Application
- git clone https://github.com/Nick1091/Graphql-Service.git
- checkout develop branch
- npm install
- rename .env.example to .env
- use https://github.com/rolling-scopes-school/node-graphql-service to test this application
- npm run start
## Use Application
- pass in browser http://localhost:4000/ 
### Examples query and mutations:
#### register:
```
{
   "firstName": "first name",
   "lastName": "last name",
   "password": "118649qwe",
   "email": "met9129@gmail.com"
}
```
#### login (get jwt token):
```
{
    "email": "met9129@gmail.com",
    "password": "118649qwe"
}
```
#### To use mutations, set the token in the headers
#### Example params to createBand mutation (use your own params): 
```
{
  name: "Park"
  origin: "origin"
  members: 
  {
      artist: "62c4a1c7173d5ba47d89ad50"
      instrument: "piano"
      years: ["1968", "1970"]
  },
  {
      artist: "62c4a1c7173d5ba47d89ad00"
      instrument: "gitar"
      years: ["1973", "1977"]
  },
  website: "www.somewere.com"
  genresIds: ["62c4a1c7173d5ba47d89ad50"]
}
```
#### using a query, you can get an entity or entities (also using pagination)
>more detailed information on how the requests and mutations that are  available in the application were created is described here https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/assignment.md
