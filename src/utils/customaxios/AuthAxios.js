import axios from "axios";

class AuthAxios {
  constructor() {
    this.authUrls = [
      "http://localhost:3001/user/signup",
      "http://localhost:3001/user/login",
    ];
    this.customInstance = axios.create({
      baseURL: "http://localhost:3001",
    });

    this.customInstance.interceptors.request.use(
      (config) => {
        const { href } = new URL(config.url);
        const token = localStorage.getItem("token");
        if (!this.authUrls.includes(href)) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.customInstance.interceptors.response.use(
      (config) => {
        //console.log(config);
        const origin = config.config.url;
        const loginUrl = this.authUrls[1];
        // if (allowedOrigins.includes(origin)) {
        // console.log("view m", config.data.accessToken);
        if (origin === loginUrl) {
          if (config.data.accessToken) {
            // console.log("login", config.data.accessToken);
            localStorage.setItem("token", config.data.accessToken);
          } else {
            console.log("login, no token returned");
          }
        }
        if (origin === this.authUrls[0]) {
          console.log("Sign up page");
          return config;
        }
        if (config.data.accesstoken) {
          // console.log("Other token", config.data.accesstoken);
          localStorage.setItem("token", config.data.accesstoken);
        } else {
          console.log("2 no token returned");
        }
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
const authAxios = new AuthAxios();
export default authAxios.customInstance;
