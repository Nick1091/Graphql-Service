import { mergeResolvers } from "@graphql-tools/merge";
import resolversArtists  from './artists/resolvers';
import resolversBands  from './bands/resolvers';
import resolversAlbums  from './album/resolvers';
import resolversGenres  from './genres/resolvers';
import resolversTracks  from './tracks/resolvers';
import resolversUsers  from './users/resolvers';

export const resolvers = mergeResolvers([resolversArtists, resolversBands, resolversAlbums, resolversGenres, resolversTracks, resolversUsers])