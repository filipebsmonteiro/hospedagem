import Auth from '@/services/Auth'
import ClienteRepository from '@/services/Cliente'
import ActionsClass from '@/store/References/ActionsClass'
import Getters from '@/store/References/Getters'
import Mutations from '@/store/References/Mutations'
import State from '@/store/References/State'

const $actions = new ActionsClass(ClienteRepository)

export default {
    name: 'cliente',
    namespaced: true,
    state: Object.assign({}, State),
    getters: Object.assign({}, Getters),
    mutations: Object.assign({}, Mutations),
    actions: {
        ...$actions.classToObject(),
        async listMe({commit}) {
            commit('setLoading', true)
            await Auth.me().then(response => {
                commit('setCurrent', response.data)
            })
            commit('setLoading', false)
        },
    }
}
