export default {
    getAll(state) {
        return state.list
    },

    pagination(state) {
        return state.pagination
    },

    isLoading(state) {
        return state.isLoading
    },

    getCurrent(state) {
        return state.current
    }
}
