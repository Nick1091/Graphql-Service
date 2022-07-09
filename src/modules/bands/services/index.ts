import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { CONST_ERRORS } from '../../constants';
import { Pagination, TypeBand } from 'src/modules/types';

export default class BandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getBand(id: string) {
    try{
      if (id === '') return
      const res =  await this.get(`${this.baseURL}/${id}`);
      return res === '' ? null : res
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return null
    }
  }

  async getBands(args: Pagination) {
    return await this.get(`${this.baseURL}`, args);
  }

  async createBand( inputCreateBand: TypeBand ) {
    if (!this.context.token) return;
    return await this.post('/', inputCreateBand )
  }

  async deleteBand( id: string) {
    if (!this.context.token) return;
    try{
      return await this.delete(`/${id}`)
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return err
    }
  }

  async updateBand( id: string, inputUpdateBand: TypeBand ) {
    if (!this.context.token) return;
    try{
      const res =  await this.put(`/${id}`, inputUpdateBand );
      return res === '' ? null : res
    } catch (err: unknown) {
      (err as Error).message = CONST_ERRORS.ID
      return err
    }
  }
}