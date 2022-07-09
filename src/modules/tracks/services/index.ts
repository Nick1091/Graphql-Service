import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { CONST_ERRORS } from '../../constants';
import { Pagination, TypeTrack } from 'src/modules/types';

export default class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getTrack(id: string) {
    try{
      if (id === '') return
      const res =  await this.get(`${this.baseURL}/${id}`);
      return res === '' ? null : res
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return null
    }
  }

  async getTracks(args: Pagination) {
    return this.get(`${this.baseURL}`, args);
  }

  async createTrack( createTrack: TypeTrack ) {
    if (!this.context.token) return;
    return await this.post('/', createTrack )
  }

  async deleteTrack( id: string) {
    if (!this.context.token) return;
    try{
      return await this.delete(`/${id}`)
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return err
    }
  }
  
  async updateTrack( id: string, inputUpdateTrack: TypeTrack ) {
    if (!this.context.token) return;
    try{
      const res =  await this.put(`/${id}`, inputUpdateTrack );
      return res === '' ? null : res
    } catch (err: unknown) {
      (err as Error).message = CONST_ERRORS.ID
      return err
    }
  }
}
