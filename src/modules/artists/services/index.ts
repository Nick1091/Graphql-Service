import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Pagination, TypeArtist } from 'src/modules/types';
import { CONST_ERRORS } from '../../constants';

export default class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getArtist(id: string) {
    try{
      if (id === '') return
      const res =  await this.get(`${this.baseURL}/${id}`);
      return res === '' ? null : res
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return null
    }
  }

  async getArtists(args: Pagination) {
    return await this.get(`${this.baseURL}`, args);
  }

  async createArtist( inputCreateArtist: TypeArtist ) {
    if (!this.context.token) return;
    return await this.post('/', inputCreateArtist )
  }

  async deleteArtist( id: string) {
    if (!this.context.token) return;
    try{
      return await this.delete(`/${id}`)
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return err
    }
  }
  
  async updateArtist( id: string, inputUpdateArtists: TypeArtist ) {
    if (!this.context.token) return;
    try{
      const res =  await this.put(`/${id}`, inputUpdateArtists );
      return res === '' ? null : res
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return err
    }
  }
};
