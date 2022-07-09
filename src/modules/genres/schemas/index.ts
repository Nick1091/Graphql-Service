import { gql } from 'apollo-server';

export default gql `
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }

    input InputGenreUpdate {
        name: String
        description: String
        country: String
        year: Int
    }
    input InputGenreCreate {
        name: String!
        description: String
        country: String
        year: Int
    }

    extend type Query {
        genre(id: ID!): Genre
        genres(limit: Int, offset: Int): [Genre]
    }

    extend type Mutation {
        createGenre(createGenre: InputGenreCreate ): Genre
        updateGenre(id: ID!, updateGenre: InputGenreUpdate ): Genre
        deleteGenre(id:ID): Delete
    }
`