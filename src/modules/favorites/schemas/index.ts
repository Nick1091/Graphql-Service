import { gql } from 'apollo-server';

export default gql `

    type Favorites {
        id: ID!
        userId: ID!
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
        tracks: [Track]
    }

    extend type Mutation {
        addTrackToFavourites(id:ID!): Favorites!
        addBandToFavourites(id:ID): Favorites!
        addArtistToFavourites(id:ID): Favorites!
        addGenreToFavourites(id:ID): Favorites!
        removeTrackToFavourites(id:ID!): Favorites!
        removeBandToFavourites(id:ID): Favorites!
        removeArtistToFavourites(id:ID): Favorites!
        removeGenreToFavourites(id:ID): Favorites!
    }
    extend type Query {
        favourites: Favorites!
    }
`
