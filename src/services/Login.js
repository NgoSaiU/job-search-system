import API from "./API";

export default {
    getQuote() {
        return API().get('/')
    },
    
    login(data) {
        return API('http://localhost:3000/auth').post('/login_c',data)
    }
}