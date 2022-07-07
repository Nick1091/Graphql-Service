import { gql } from 'apollo-server';

export default gql `
type Member {
  id: ID!
  firstName: String
  secondName: String
  middleName: String
  instrument: String
  years: [String]
}

input MemberInput {
  artist: String!
  instrument: String
  years: [String]
}

input BandInput {
  name: String!
  origin: String
  members: [MemberInput]
  website: String
  genresIds: [String]
}

type Band {
  id: ID!
  name: String
  origin: String
  members: [Member]
  website: String
  genres: [Genre]
}

type Delete {
  acknowledged: Boolean
  deletedCount: Int
}

extend type Query {
  band( id: ID! ): Band!
  bands(limit: Int, offset: Int): [Band]!
}

extend type Mutation {
  createBand(createInputBand: BandInput): Band!
  updateBand(id: ID!, updateInputBand: BandInput): Band!
  deleteBand(id: ID!): Delete!
}
`
