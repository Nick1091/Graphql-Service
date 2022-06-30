import { gql } from 'apollo-server';

export default gql `
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }

    extend type Query {
        genre(id: ID!): Genre
        genres: [Genre]
    }

    extend type Mutation {
        createGenre(name: String, description: String, country: String, year: Int): Genre
    }
`