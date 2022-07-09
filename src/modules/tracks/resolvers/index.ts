import { Pagination, TypeArtistsIds, TypeBandsIds, TypeGenresIds, TypeTrack, TypeTrackParent } from "src/modules/types";

export default {
  Query: {
    track: async (_ :null, { id }: { id: string }, { dataSources }:any) => {
      return await dataSources.tracksAPI.getTrack(id);
    },
    tracks: async (_ :null, args: Pagination, { dataSources } :any) => {
      const data = await dataSources.tracksAPI.getTracks(args);
      return data.items
    },
  },
  Track: {
    id: (parent: TypeTrackParent) => parent._id,
    album: async ({ albumId }: any, _ :null, { dataSources }: any) => {
      if(albumId === undefined || albumId === null) return null
      const album =  await dataSources.albumsAPI.getAlbum(albumId)
      if(album === null || album === '') return
      return album
    },
    artists: async ({ artistsIds }: TypeArtistsIds, _ :null, { dataSources }: any) => {
      if(artistsIds === undefined || artistsIds === null) return null
      return artistsIds.map( async (id: string) => {
        const artist = await dataSources.artistsAPI.getArtist(id) 
        if(artist === null || artist === '') return
        return artist
      })
    },
    bands: async ({ bandsIds }: TypeBandsIds, _ :null, { dataSources }: any) => {
      if(bandsIds === undefined || bandsIds === null) return null
      return bandsIds.map( async (id: string) => {
        const band = await dataSources.bandsAPI.getBand(id) 
        if(band === null || band === '') return
        return band
      })
    },
    genres: async ({ genresIds }: TypeGenresIds, _ :null, { dataSources }: any) => {
      if(genresIds === undefined || genresIds === null) return null
      return genresIds.map( async (id: string) => {
        const genre = await dataSources.genresAPI.getGenre(id) 
        if(genre === null || genre === '') return
        return genre
      })
    },
  },
  Mutation: {
    createTrack: async (_:null, args: { createTrack: TypeTrack }, { dataSources }: any) => {
      return await dataSources.tracksAPI.createTrack(args.createTrack);
    },
    deleteTrack: async (_:null, id: {id: string}, { dataSources }: any) => {
      return await dataSources.tracksAPI.deleteTrack(id.id)
    },
    updateTrack: async (_:null, args: { id: string, updateTrack: TypeTrack }, { dataSources }: any) => {
      const { id, updateTrack } = args;
      return await dataSources.tracksAPI.updateTrack(id, updateTrack);
    }
  }
};
