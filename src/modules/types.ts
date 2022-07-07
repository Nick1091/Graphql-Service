export type UserType = {
  firstName: string
  secondName: string
  password: string
  email: string
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

export type Pagination = {
  offset: number
  limit: number
}

export type MemberInput = {
  artist: string
  instrument?: string
  years?: string
}
export type TypeBand = {
  name: string
  origin?: string
  members?: MemberInput[]
  website?: string
  genresIds?: string[]
}
export type TypeGenre = {
  name: string
  description: string
  country: string
  year: number
}
export type TypeTrack = {
  title: string
  albumId: string
  bandIds: string[]
  artistsIds: string[]
  duration: number
  released: number
  genresIds: string[]      
}
export type TypeAlbum = {
  name: string
  released?: number
  artistsIds?: string[]
  bandsIds?: string[]
  trackIds?: string[]
  genresIds?: string[]      
}
