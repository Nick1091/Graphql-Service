import { gql } from 'apollo-server';

export default gql `
    input CreateAlbumInput {
        released: Int
        image: String
        name: String!
        artists: [ID!]
        bands: [ID!]
        tracks: [ID!]
        genres: [ID!]
    }
    type Album {
        id: ID!
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }
    extend type Query {
        album(id: ID!): Album
        albums: [Album]
    }
`