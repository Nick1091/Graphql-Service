import { Pagination, TypeGenre, TypeGenreParent } from "src/modules/types";

export default {
  Query: {
    genre: async (_ :null, { id }: { id: string }, { dataSources }:any) => {
      return await dataSources.genresAPI.getGenre(id);
    },
    genres: async (_ :null, args: Pagination, { dataSources } :any) => {
      const data =  await dataSources.genresAPI.getGenres(args);
      return data.items
    },
  },
  Genre: {
    id: (parent: TypeGenreParent) => parent._id
  },
  Mutation: {
    createGenre: async (_: null, args: { createGenre: TypeGenre }, { dataSources }: any) => {

      return await dataSources.genresAPI.createGenre(args.createGenre);
    },
    deleteGenre: async (_: null, id: {id: string}, { dataSources }: any) => {
      return await dataSources.genresAPI.deleteGenre(id.id)
    },
    updateGenre: async (_: null, args: { id: string, updateGenre: TypeGenre }, { dataSources }: any) => {
      const { id, updateGenre } = args;
      return await dataSources.genresAPI.updateGenre(id, updateGenre);
    }
  }
};
