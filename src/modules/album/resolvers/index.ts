import { Pagination, TypeAlbum, TypeAlbumParent, TypeArtistsIds, TypeBandsIds, TypeGenresIds, TypeTrackIds } from "src/modules/types";

export default {
  Query: {
    album: async (_ :null, { id }: { id: string }, { dataSources }:any) => {
      return await dataSources.albumsAPI.getAlbum(id);
    },
    albums: async (_ :null, args: Pagination, { dataSources }:any) => {
      const data = await dataSources.albumsAPI.getAlbums(args);
      return data.items
    },
  },
  Album: {
    id: (parent: TypeAlbumParent) => parent._id,
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
    tracks: async ({ trackIds }: TypeTrackIds, _ :null, { dataSources }: any) => {
      if(trackIds === undefined || trackIds === null) return null
      return trackIds.map( async (id: string) => {
        const track = await dataSources.tracksAPI.getTrack(id) 
        if(track === null || track === '') return
        return track
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
    createAlbum: async (_: null, args: { InputAlbum: TypeAlbum }, { dataSources }: any) => {
    return await dataSources.albumsAPI.createAlbum(args.InputAlbum);
    },
    deleteAlbum: async (_: null, id: { id: string }, { dataSources }: any) => {
      return await dataSources.albumsAPI.deleteAlbum(id.id)
    },
    updateAlbum: async (_: null, args: { id: string, InputAlbum: {InputAlbum: TypeAlbum} }, { dataSources }: any) => {
      const { id, InputAlbum } = args;
      return await dataSources.albumsAPI.updateAlbum(id, InputAlbum);
    }
  }
};
