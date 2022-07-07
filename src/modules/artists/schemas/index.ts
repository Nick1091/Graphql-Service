import { gql } from 'apollo-server';

export default gql `
    type Artist {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: [String] 
    }

    input UpdateArtist {
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [ID!]
        instruments: [String] 
    }
    input CreateArtists {
        firstName: String!
        secondName: String!
        country: String!
        middleName: String
        birthDate: String
        birthPlace: String
        bandsIds: [ID!]
        instruments: [String] 
    }
    type Delete {
        acknowledged: Boolean
        deletedCount: Int
    }

    extend type Mutation {
        createArtist(inputCreateArtist: CreateArtists): Artist!
        deleteArtist(id: ID!): Delete!
        updateArtist(id: ID!, inputUpdateArtists: UpdateArtist): Artist!
    }

    extend type Query {
        artist( id: ID! ): Artist!
        artists(limit: Int, offset: Int): [Artist]!
    }
`
