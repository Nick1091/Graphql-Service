import { gql } from 'apollo-server';

export default gql `
    type UserType {
        firstName: String
        lastName: String
        password: String
        email: String
    }
    type User {
        id: ID!
        firstName: String
        lastName: String
        password: String
        email: String!
    }

    input userInput {
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }

    type JWT {
        jwt: String!
    }

    type Query {
        jwt( email: String!, password: String! ): JWT
        user( id: ID!): User
    }
    
    type Mutation {
        register(userInput: userInput): User
    }
`