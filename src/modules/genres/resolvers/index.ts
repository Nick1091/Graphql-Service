export default {
  Query: {
    genre: async (_ :any, { id } :any, { dataSources }:any) => {
      console.log("1")
      return await dataSources.genresAPI.getGenre(id);
    },
    genres: async (_ :any, __ :any, { dataSources } :any) => {
      const data =  await dataSources.genresAPI.getGenres();
      return data.items
    },
  },
  Genre: {
    id: (parent: any) => parent._id
  }
};
