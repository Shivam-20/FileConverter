import decode from "jwt-decode";

class AuthHelper {
  getToken = () => {
    return localStorage.getItem("token");
  };

  decodeToken = () => {
    try {
      const decodedToken = decode(this.getToken());
      return decodedToken;
    } catch (error) {
      return error;
    }
  };

  isTokenExpired = () => {
    var decodedToken = this.decodeToken(this.isUserLoggedIn());
    var dateNow = new Date();
    if (decodedToken.exp < Math.round(dateNow.getTime() / 1000)) {
      return true;
    }
    return false;
  };

  isUserLoggedIn = () => {
    return !!localStorage.getItem("token");
  };

  logoutUser = () => {
    localStorage.removeItem("token");
  };
}

export default new AuthHelper();
