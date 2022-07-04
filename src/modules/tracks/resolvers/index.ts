export default {
  Query: {
    track: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.tracksAPI.getTrack(id);
    },
    tracks: async (_ :any, __ :any, { dataSources } :any) => {
      const data = await dataSources.tracksAPI.getTracks();
      return data.items
    },
  },
  Track: {
    id: (parent: any) => parent._id
  }
};
