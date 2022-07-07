import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
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
    return this.get(`${this.baseURL}/${encodeURIComponent(id)}`);
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
    return await this.delete(`/${id}`)
  }
  async updateBand( id: string, inputUpdateBand: TypeBand ) {
    if (!this.context.token) return;
    return await this.put(`/${id}`, inputUpdateBand )
  }
}