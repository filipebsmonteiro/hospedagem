import Vue from 'vue'
import Vuex from 'vuex'
import cliente from '@/store/modules/cliente'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        cliente
    }
});