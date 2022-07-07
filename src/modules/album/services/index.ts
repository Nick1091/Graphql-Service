import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Pagination, TypeAlbum } from 'src/modules/types';

export default class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getAlbum(id: string) {
    return this.get(`${this.baseURL}/${id}`);
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
    return await this.delete(`/${id}`)
  }
  async updateAlbum( id: string, inputUpdateAlbum: TypeAlbum ) {
    if (!this.context.token) return;
    return await this.put(`/${id}`, inputUpdateAlbum )
  }
}