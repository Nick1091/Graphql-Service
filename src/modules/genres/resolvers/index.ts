export default {
  Query: {
    genre: async (_ :any, { id } :any, { dataSources }:any) => {
      return dataSources.genresAPI.getGenre(id);
    },
    genres: async (_ :any, __ :any, { dataSources } :any) => {
      const data =  dataSources.genresAPI.getGenres();
      return data.items
    },
  },
};
