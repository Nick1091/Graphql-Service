export default {
  Query: {
    band: async (_ :any, { id } :any, { dataSources }:any) => {
      return dataSources.bandsAPI.getBand(id);
    },
    bands: async (_ :any, __ :any, { dataSources } :any) => {
      const data =  dataSources.bandsAPI.getBands();
      return data.items
    },
  },
};
