class AuthService {
    getUser () {
        const user = sessionStorage.getItem("user");
        if (user === 'undefined' || !user) {
            return null;
        } else {
            return JSON.parse(user);
        }
    };

    getToken() {
        return sessionStorage.getItem("token");
    }

    setUserSession(user, token){
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", token);
    }

    resetUserSession() {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
    }
}
export default new AuthService();