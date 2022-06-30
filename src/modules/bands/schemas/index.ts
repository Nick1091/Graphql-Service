import { gql } from 'apollo-server';

export default gql `
type Member {
  artist: String
  instrument: String
  years: String
}

input MemberInput {
  artist: String
  instrument: String
  years: String
}

input CreateBandInput {
  name: String!
  origin: String
  members: [MemberInput]
  website: String
  genresIds: [String]
}

input UpdateBandInput {
  id: ID!
  name: String
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
    # genres: [Genre]
}

extend type Query {
    band( id: ID! ): Band
    bands: [Band]
}
`
