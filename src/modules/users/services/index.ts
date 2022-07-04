import { RESTDataSource } from 'apollo-datasource-rest';
import { UserType } from 'src/modules/types';

export default class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getUser (id: string) {
    const data = this.get(`${this.baseURL}/${id}`);
    return data
  }
  async createUser ( input: { input: UserType } ) {
    const data = await this.post('/register', input.input)
    return data;
  }
  async getJWT ( userData: {email: string, password: string }) {
    const data = await this.post('/login', {...userData})
    this.context.token = data.jwt;
    return data;
  }
}
// class PersonalizationAPI extends RESTDataSource {
//   willSendRequest(req) {
//     request.headers.set('Authorization', this.context.token);
//   }
// }