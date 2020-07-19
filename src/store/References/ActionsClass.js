export default class ActionsClass {
    constructor(repository) {
        this.$repository = repository
    }

    classToObject() {
        const originalClass = this
        const keys = Object.getOwnPropertyNames(originalClass)
        return keys.reduce((classAsObj, key) => {
            //Não mapeia o Repositório
            if (key !== '$repository') {
                classAsObj[key] = originalClass[key]
            }
            return classAsObj
        }, {})
    }

    listAll = async ({commit}, params) => {
        commit('setLoading', true)
        await this.$repository.fetchAll(params).then(response => {
            commit('setAll', response.data)
        })
        commit('setLoading', false)
    }

    listAllPaginated = async ({commit}, params) => {
        commit('setLoading', true)
        await this.$repository.fetchPaginated(params).then(response => {
            commit('setAll', response.data.data)
            commit('setPagination', response.data)
        })
        commit('setLoading', false)
    }

    listOne = async ({commit}, id) => {
        commit('setLoading', true)
        await this.$repository.fetch(id).then(response => {
            commit('setCurrent', response.data)
        })
        commit('setLoading', false)
    }
}
