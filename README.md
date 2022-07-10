## Install Application
- git clone https://github.com/Nick1091/Graphql-Service.git
- checkout develop branch
- npm install
- npm run start
- Read [Readme.md](https://github.com/lased/node-nodejs-basics/blob/feat-graphql/services/README.md) to run microservices and test this application

## Use Application
- pass in browser http://localhost:4000/ 

## Implemented Queries and mutations:
<details>
   <summary> Queries </summary>
   
* artist
* artists
* band
* bands
* album
* albums
* genre
* genres
* tracks
* track
* jwt
* user
* getFavourites
</details>
 
<details>
   <summary> Mutations </summary>

* createArtist
* deleteArtist
* updateArtist
* createBand
* updateBand
* deleteBand
* createAlbum
* updateAlbum
* deleteAlbum
* createGenre
* updateGenre
* deleteGenre
* createTrack
* updateTrack
* deleteTrack
* register
* addTrackToFavourites
* addBandToFavourites
* addArtistToFavourites
* addGenreToFavourites
* removeTrackToFavourites
* removeBandToFavourites
* removeArtistToFavourites
* removeGenreToFavourites
</details>

## Contents of the examples:
> To obtain user data, you must specify the required data in apollo, as well as the fields you need

### **Users**
<details>
   <summary>Register</summary>

```graphql
mutation Mutation($userInput: userInput) {
  register(userInput: $userInput) {
    id
    firstName
    lastName
    password
    email
  }
}
```
```Json
{
  "userInput": {
    "firstName": "first name",
    "lastName": "last name",
    "password": "11sqxdwchn",
    "email": "met9129@gmail.com"
  },
}
```
</details>
<details>
   <summary>login (get jwt token)</summary>

```graphql
query User($email: String!, $password: String!) {
  jwt(email: $email, password: $password) {
    jwt
  }
}
```
```Json
{
  "email": "met9129@gmail.com",
  "password": "11sqxdwchn",
}
```
</details>

#### To use mutations, set the token in the headers
<details>
   <summary>Get user:</summary>

```graphql
   query User($userId: ID!) {
      user(id: $userId) {
         id
         firstName
         lastName
         password
         email
  }
}
```
```Json
{
  "userId": "62c9ac322b17fc33c222f513"
}
```
</details><br>

### **Bands**

<details>
   <summary>band (get a band by id)</summary>

```graphql
query Query($bandId: ID!) {
  band(id: $bandId) {
    id
    name
    origin
    members {
      id
    }
    website
    genres {
      id
    }
  }
}
```
```Json
{
   "bandId": "62c9ac322b17fc33c222f513"
}
```
</details>
<details>
   <summary>bands (get all bands)</summary>

```graphql
query Query($limit: Int, $offset: Int) {
  bands(limit: $limit, offset: $offset) {
    id
    name
    origin
    website
    genres {
      id
    }
    members {
      id
    }
  }
}
```
```Json
{
  "limit": 10,
  "offset": 0
}
```
</details>
<details>
   <summary>createBand</summary>

```graphql
mutation Mutation($createInputBand: BandInputCreate) {
  createBand(createInputBand: $createInputBand) {
    id
    name
    origin
    members {
      id
    }
    website
    genres {
      id
    }
  }
}
```
```Json
{
  "createInputBand": {
    "name": "some name",
    "members": [
      {
        "artist": "62c5ab71035f208b7666df7e",
        "instrument": "some instrument",
        "years": ["1990", "1999"]
      }
    ],
    "origin": "origin",
    "website": "www.some-site.site",
    "genresIds": ["62c5ac17035f208b7666df82", "62c894f29d8237b966017549"]
  }
}
```
</details>
<details>
   <summary>updateBand</summary>

```graphql
mutation Mutation($updateBandId: ID!, $updateInputBand: BandInputUpdate) {
  updateBand(id: $updateBandId, updateInputBand: $updateInputBand) {
    id
    name
    origin
    members {
      id
    }
    website
    genres {
      id
    }
  }
}
```
```Json
{
  "updateBandId": "62c5ab71035f208b7666df7e",
  "updateInputBand": {
    "name": "some name",
    "members": [
      {
        "artist": "62c5ab71035f208b7666df7e",
        "instrument": "some instrument",
        "years": ["1990", "1999"]
      }
    ],
    "origin": "origin",
    "website": "www.some-site.site",
    "genresIds": ["62c5ac17035f208b7666df82", "62c894f29d8237b966017549"]
  },
}
```
</details>
<details>
   <summary>deleteBand</summary>

```graphql
mutation Mutation($deleteBandId: ID!) {
  deleteBand(id: $deleteBandId) {
    acknowledged
    deletedCount
  }
}
```
```Json
{
  "deleteBandId": "62c5ab71035f208b7666df7e",
}
```
</details><br>

### **Favorites**

<details>
   <summary>addTrackToFavourites</summary>

```graphql
mutation AddTrackToFavourites($addTrackToFavouritesId: ID!) {
  addTrackToFavourites(id: $addTrackToFavouritesId) {
    id
    userId
    tracks {
      id
    }
  }
}
```
```Json
{
  "addTrackToFavouritesId": "62c5ab71035f208b7666df7e",
}
```
</details>
<details>
   <summary>removeTrackToFavourites</summary>

```graphql
mutation AddTrackToFavourites($removeTrackToFavouritesId: ID!) {
  removeTrackToFavourites(id: $removeTrackToFavouritesId) {
    id
    userId
    tracks {
      id
    }
  }
}
```
```Json
{
  "removeTrackToFavouritesId": "62c5ab71035f208b7666df7e",
}
```
</details>
<details>
   <summary>getFavourites</summary>

```graphql
query Query {
  getFavourites {
    id
    userId
    bands {
      id
      name
      origin
      members {
        id
        instrument
      }
      website
      genres {
        id
      }
    }
  }
}
```
</details><br>


>more detailed information on how the queries and mutations that are  available in the application were created is described here [assignment.md](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/assignment.md)
