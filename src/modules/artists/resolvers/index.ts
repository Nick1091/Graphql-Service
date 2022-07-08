import { Pagination, TypeArtist, UserType } from "src/modules/types";

export default {
  Query: {
    artist: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.artistsAPI.getArtist(id);
    },
    artists: async (_ :any, args: Pagination, { dataSources } :any) => {
      const data = await dataSources.artistsAPI.getArtists(args);
      return data.items
    },
  },
  Artist: {
    id: (parent: any) => parent._id,
    bands: async ({ bandsIds }: any, _ :any, { dataSources }: any) => {
      return await bandsIds.map( async (ids: string) => {
        const arrBand = await dataSources.bandsAPI.getBand(ids);
        if(arrBand === null || arrBand === '') return
        return arrBand
      })
    },
  },
  Mutation: {
    createArtist: async (_: any, inputCreateArtist: { inputCreateArtist: TypeArtist }, { dataSources }: any) => {
      return await dataSources.artistsAPI.createArtist(inputCreateArtist.inputCreateArtist);
    },
    deleteArtist: async (_: any, id: {id: string}, { dataSources }: any) => {
      return await dataSources.artistsAPI.deleteArtist(id.id)
    },
    updateArtist: async (_: any, args: { id: string, inputUpdateArtists: { inputUpdateArtists: TypeArtist }}, { dataSources }: any) => {
      const { id, inputUpdateArtists } = args;
      return await dataSources.artistsAPI.updateArtist(id, inputUpdateArtists);
    }
  }
}
