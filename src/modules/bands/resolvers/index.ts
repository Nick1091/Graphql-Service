export default {
  Query: {
    band: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.bandsAPI.getBand(id);
    },
    bands: async (_ :any, __ :any, { dataSources } :any) => {
      const data = await dataSources.bandsAPI.getBands();
      return data.items
    },
  },
  Band: {
    id: (parent: any) => parent._id
  }
};
