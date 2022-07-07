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

    input createAlbum {
        name: String!
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        trackIds: [ID]
        genresIds: [ID]
    }
    input updateAlbum {
        name: String!
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        trackIds: [ID]
        genresIds: [ID]
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
        albums(limit: Int, offset: Int): [Album]
    }
    extend type Mutation {
        createAlbum(InputAlbum: createAlbum): Album!
        updateAlbum(id: ID!, InputAlbum: updateAlbum): Album!
        deleteAlbum(id: ID!): Delete!
    }
`