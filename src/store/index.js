import { createStore } from "vuex";

export default createStore({
    state: {
        authenticated: false,
        whoUser: false, 
    },
    mutations: {
        SET_AUTH: function (state, auth) {
            return (state.authenticated = auth);
        },
        SET_WHO: function (state, auth) {
            return (state.whoUser = auth);
        },
    },
    actions: {
        setAuth: function (_a, auth) {
            var commit = _a.commit;
            return commit("SET_AUTH", auth);
        },
        setWho: function (_a, who) {
            var commit = _a.commit;
            return commit("SET_WHO", who);
        },
    },

    modules: {},
});

