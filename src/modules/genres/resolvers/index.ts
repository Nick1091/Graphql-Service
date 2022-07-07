import { Pagination, TypeGenre } from "src/modules/types";

export default {
  Query: {
    genre: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.genresAPI.getGenre(id);
    },
    genres: async (_ :any, args: Pagination, { dataSources } :any) => {
      const data =  await dataSources.genresAPI.getGenres(args);
      return data.items
    },
  },
  Genre: {
    id: (parent: any) => parent._id
  },
  Mutation: {
    createGenre: async (_: any, createGenre: { createGenre: TypeGenre }, { dataSources }: any) => {

      return await dataSources.genresAPI.createGenre(createGenre.createGenre);
    },
    deleteGenre: async (_: any, id: {id: string}, { dataSources }: any) => {
      return await dataSources.genresAPI.deleteGenre(id.id)
    },
    updateGenre: async (_: any, args: { id: string, updateGenre: TypeGenre }, { dataSources }: any) => {
      const { id, updateGenre } = args;
      return await dataSources.genresAPI.updateGenre(id, updateGenre);
    }
  }
};
