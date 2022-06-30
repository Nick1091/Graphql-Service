export default {
  Query: {
    user: async (_ :any, { id } :any, { dataSources }:any) => {
      return dataSources.usersAPI.getUser(id);
    },
    users: async (_ :any, __ :any, { dataSources } :any) => {
      const data =  dataSources.usersAPI.getUsers();
      return data
    },
  },
};
