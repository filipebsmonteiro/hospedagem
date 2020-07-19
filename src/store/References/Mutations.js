export default {
    setCurrent(state, obj) {
        state.current = obj
    },

    setAll(state, array) {
        state.list = array
    },

    setPagination(state, obj) {
        if (obj.meta) {
            obj = obj.meta
        }
        state.pagination = {
            per_page: parseInt(obj.per_page),
            page: parseInt(obj.current_page),
            total: parseInt(obj.total)
        }
    },

    setLoading(state, boolean) {
        state.isLoading = boolean
    }
}
