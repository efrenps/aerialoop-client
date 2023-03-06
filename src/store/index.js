/* eslint-disable global-require */
import { createStore } from 'vuex';

export default createStore({
    state: {
        data: null,
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
    },
    actions: {
        async getData({commit}) {
            try {
                const response = await fetch(`${process.env.VUE_APP_API_HOST}/getData`)
                const data = await response.json();
                console.log(data);
                commit('setData', data)
            } catch (error) {
                console.error(error)
            }
        }
    },
    modules: {

    }
})