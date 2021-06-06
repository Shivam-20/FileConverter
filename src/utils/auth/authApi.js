import AuthAxios from "../customaxios/AuthAxios";

const authUrl = "http://localhost:3001/user/";

class AuthAPI {
  signup = async (userData) => {
    return await AuthAxios.post(`${authUrl}signup`, userData);
  };

  userLogIn = async (userData) => {
    return await AuthAxios.post(`${authUrl}login`, userData);
  };
}

export default new AuthAPI();
