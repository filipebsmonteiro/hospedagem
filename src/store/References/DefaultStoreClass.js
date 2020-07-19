import ActionsClass from '@/store/References/ActionsClass'
import Getters from '@/store/References/Getters'
import Mutations from '@/store/References/Mutations'
import State from '@/store/References/State'

export class DefaultStoreClass {
    async build(repository, namespace = null) {
        this.$repository = repository
        this.name = namespace
        this.namespaced = !!namespace
        const $actions = new ActionsClass(this.$repository)
        this.actions = $actions.classToObject()
        return this
    }

    name = null

    namespaced = null

    state = Object.assign({}, State)

    getters = Object.assign({}, Getters)

    mutations = Object.assign({}, Mutations)

    actions = null

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
}

export default new DefaultStoreClass()
