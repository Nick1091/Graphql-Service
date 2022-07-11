import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Pagination, TypeAlbum } from 'src/modules/types';
import { CONST_ERRORS } from '../../constants';

export default class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getAlbum(id: string) {
    try{
      if (id === '') return
      const res =  await this.get(`${this.baseURL}/${id}`);
      return res === '' ? null : res
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return null
    }
  }

  async getAlbums(args: Pagination) {
    return await this.get(`${this.baseURL}`, args);
  }

  async createAlbum( inputCreateAlbum: TypeAlbum ) {
    if (!this.context.token) return;
    return await this.post('/', inputCreateAlbum )
  }

  async deleteAlbum( id: string) {
    if (!this.context.token) return;
    try{
      return await this.delete(`/${id}`)
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return err
    }
  }
  
  async updateAlbum( id: string, inputUpdateAlbum: TypeAlbum ) {
    if (!this.context.token) return;
    try{
      const res =  await this.put(`/${id}`, inputUpdateAlbum );
      return res === '' ? null : res
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return err
    }
  }
}
