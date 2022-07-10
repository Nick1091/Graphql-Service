export type UserType = {
  firstName?: string
  secondName?: string
  password?: string
  email?: string
}
export type UserTypeParent = {
  _id: string
  firstName?: string
  secondName?: string
  password?: string
  email?: string
}

export type TypeArtist = {
  firstName?: string
  secondName?: string
  middleName?: string
  birthDate?: string
  birthPlace?: string
  country?: string
  bandsIds?: string[]
  instruments?: string[] 
}
export type TypeArtistParent = {
  _id?: string
  firstName?: string
  secondName?: string
  middleName?: string
  birthDate?: string
  birthPlace?: string
  country?: string
  bandsIds?: string[]
  instruments?: string[] 
}

export type Pagination = {
  offset: number
  limit: number
}

export type MemberInput = {
  artist: string
  instrument?: string
  years?: string[]
}

export type TypeMember = {
  _id: string
  firstName?: string
  secondName?: string
  middleName?: string
  instrument?: string
  years?: string[]
}

export type TypeBandParent = {
  _id: string
  name?: string
  origin?: string
  members?: MemberInput[]
  website?: string
  genresIds?: string[]
}
export type TypeBand = {
  name?: string
  origin?: string
  members?: MemberInput[]
  website?: string
  genresIds?: string[]
}
export type TypeGenreParent = {
  _id?: string;
  name?: string
  description?: string
  country?: string
  year?: number
}
export type TypeGenre = {
  name?: string
  description?: string
  country?: string
  year?: number
}
export type TypeTrack = {
  title?: string
  albumId?: string
  bandsIds?: string[]
  artistsIds?: string[]
  duration?: number
  released?: number
  genresIds?: string[]      
}
export type TypeTrackParent = {
  _id?: string
  title?: string
  albumId?: string
  bandsIds?: string[]
  artistsIds?: string[]
  duration?: number
  released?: number
  genresIds?: string[]      
}
export type TypeAlbum = {
  name?: string
  released?: number
  artistsIds?: string[]
  bandsIds?: string[]
  trackIds?: string[]
  genresIds?: string[]      
}
export type TypeAlbumParent = {
  _id?: string
  name?: string
  released?: number
  artistsIds?: string[]
  bandsIds?: string[]
  trackIds?: string[]
  genresIds?: string[]      
}

export type TypeFavorites = {
  type: 'band' | 'genre' | 'artist' | 'track'
  id: string
}
export type TypeArtistsIds = {
  artistsIds: string[] | undefined | null 
}
export type TypeBandsIds = {
  bandsIds: string[] | undefined | null 
}
export type TypeTrackIds = {
  trackIds: string[] | undefined | null 
}
export type TypeGenresIds = {
  genresIds: string[] | undefined | null 
}
