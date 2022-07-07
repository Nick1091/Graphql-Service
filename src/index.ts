import "dotenv/config";
import { ApolloServer } from 'apollo-server';
import { typeDefs } from "./modules/typeDefs";
import { resolvers } from "./modules/resolvers";
import BandAPI from "./modules/bands/services";
import ArtistsAPI from "./modules/artists/services";
import AlbumsAPI from "./modules/album/services";
import GenresAPI from "./modules/genres/services";
import UsersAPI from "./modules/users/services";
import TrackAPI from "./modules/tracks/services";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  dataSources: () => {
    return {
      bandsAPI: new BandAPI(),
      artistsAPI: new ArtistsAPI(),
      albumsAPI: new AlbumsAPI(),
      genresAPI: new GenresAPI(),
      usersAPI: new UsersAPI(),
      tracksAPI: new TrackAPI(),

    }
  },
  context: async ({ req }) => ({
    token: req.headers.authorization || ''
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
