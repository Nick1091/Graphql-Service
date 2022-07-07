import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { UserType } from 'src/modules/types';

export default class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getUser (id: string) {
    const data = this.get(`${this.baseURL}/${id}`);
    return data
  }
  async createUser ( userInput: { userInput: UserType } ) {
    const data = await this.post('/register', userInput.userInput)
    return data;
  }
  async getJWT ( userData: {email: string, password: string }) {
    const data = await this.post('/login', {...userData})
    this.context.token = data.jwt;
    return data;
  }
}
