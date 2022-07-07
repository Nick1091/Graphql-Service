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

    # input CreateTrackInput {
    #     title: String!
    #     albums: [Album]
    #     bands: [Band]
    #     duration: Int
    #     released: Int
    #     genres: [Genre]        
    # }
    # input UpdateTrackInput {
    #     title: String!
    #     albums: [Album]
    #     bands: [Band]
    #     duration: Int
    #     released: Int
    #     genres: [Genre]        
    # }

    extend type Query {
        tracks: [Track]!
        track(id: ID!): Track!
    }
    # extend type Mutation {
    #     createTrack(createTrackInput: CreateTrackInput): Track!
    #     updateTrack(id: ID!, updateTrackInput: UpdateTrackInput):Track!
    #     # deleteTrack(id: ID!): Delete
    # }
`