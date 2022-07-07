import { gql } from 'apollo-server';

export default gql `
    type Track {
        id: ID!
        title: String!
        album: Album
        artists: [Artist]
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }

    input createTrack {
        title: String!
        albumId: ID
        bandsIds: [ID]
        artistsIds: [ID]
        duration: Int
        released: Int
        genresIds: [ID]        
    }
    input TrackInputUpdate {
        title: String
        albumId: ID
        bandsIds: [ID]
        artistsIds: [ID]
        duration: Int
        released: Int
        genresIds: [ID]        
    }

    type Delete {
        acknowledged: Boolean
        deletedCount: Int
    }

    extend type Query {
        tracks(limit: Int, offset: Int): [Track]!
        track(id: ID!): Track!
    }
    extend type Mutation {
        createTrack(createTrack: createTrack): Track!
        updateTrack(id: ID!, updateTrack: TrackInputUpdate):Track!
        deleteTrack(id: ID!): Delete
    }
`