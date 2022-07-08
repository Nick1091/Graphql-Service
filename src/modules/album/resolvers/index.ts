import { TypeAlbum } from "src/modules/types";

export default {
  Query: {
    album: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.albumsAPI.getAlbum(id);
    },
    albums: async (_ :any, __ :any, { dataSources } :any) => {
      const data = await dataSources.albumsAPI.getAlbums();
      return data.items
    },
  },
  Album: {
    id: (parent: any) => parent._id,
    artists: async ({ artistsIds }: any, _ :any, { dataSources }: any) => {
      if(artistsIds === undefined || artistsIds === null) return null
      return await artistsIds.map( async (id: string) => {
        const artist = await dataSources.artistsAPI.getArtist(id) 
        if(artist === null || artist === '') return
        return artist
      })
    },
    bands: async ({bandsIds} : any, _ :any, { dataSources }: any) => {
      if(bandsIds === undefined || bandsIds === null) return null
      return await bandsIds.map( async (id: string) => {
        const band = await dataSources.bandsAPI.getBand(id) 
        if(band === null || band === '') return
        return band
      })
    },
    tracks: async ({ trackIds }: any, _ :any, { dataSources }: any) => {
      if(trackIds === undefined || trackIds === null) return null
      return await trackIds.map( async (id: string) => {
        const track = await dataSources.tracksAPI.getTrack(id) 
        if(track === null || track === '') return
        return track
      })
    },
    genres: async ({ genresIds }: any, _ :any, { dataSources }: any) => {
      if(genresIds === undefined || genresIds === null) return null
      return await genresIds.map( async (id: string) => {
        const genre = await dataSources.genresAPI.getGenre(id) 
        if(genre === null || genre === '') return
        return genre
      })
    },
  },
  Mutation: {
    createAlbum: async (_: any, args: { InputAlbum: TypeAlbum }, { dataSources }: any) => {
    return await dataSources.albumsAPI.createAlbum(args.InputAlbum);
    },
    deleteAlbum: async (_: any, id: {id: string}, { dataSources }: any) => {
      return await dataSources.albumsAPI.deleteAlbum(id.id)
    },
    updateAlbum: async (_: any, args: { id: string, InputAlbum: {InputAlbum: TypeAlbum} }, { dataSources }: any) => {
      const { id, InputAlbum } = args;
      return await dataSources.albumsAPI.updateAlbum(id, InputAlbum);
    }
  }
};
