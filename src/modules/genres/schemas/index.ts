import { gql } from 'apollo-server';

export default gql `
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }

    type Delete {
        acknowledged: Boolean
        deletedCount: Int
    }

    input InputGenre {
        name: String
        description: String
        country: String
        year: Int
    }

    extend type Query {
        genre(id: ID!): Genre!
        genres(limit: Int, offset: Int): [Genre]!
    }

    extend type Mutation {
        createGenre(createGenre: InputGenre ): Genre!
        updateGenre(id: ID!, updateGenre: InputGenre ): Genre!
        deleteGenre(id:ID): Delete!
    }
`