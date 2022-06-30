import { RESTDataSource } from 'apollo-datasource-rest';

export default class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getUser(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getUsers() {
    const data = await this.get(`${this.baseURL}`, {
      // Query parameters
    });
    return data.results;
  }
}
// class PersonalizationAPI extends RESTDataSource {
//   willSendRequest(req) {
//     request.headers.set('Authorization', this.context.token);
//   }
// }