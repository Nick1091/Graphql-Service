import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export default class FavoritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVORITES_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async addToFavorites( args: { type: string, id: string } ) {
    if (!this.context.token) return;
    return  await this.put(`/add`, args )
  }
  async removeToFavorites( args: { type: string, id: string } ) {
    if (!this.context.token) return;
    return  await this.put(`/remove`, args )
  }
  async getToFavorites() {
    if (!this.context.token) return;
    return  await this.get(`/`)
  }
};
