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
        bands: [String]
        instruments: String
    }

    extend type Query {
        artist( id: ID! ): Artist
        artists: [Artist]
    }
`