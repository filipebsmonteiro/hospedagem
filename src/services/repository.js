import {axios as configAxios} from '@/api/index'

export class Repository {
    endpoint = null

    constructor($axios = null) {
        this.$axios = $axios
        if (!$axios) {
            this.$axios = configAxios
        }
    }

    /**
     * List All items without Pagination
     * Bad for Performance Request
     *
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    fetchAll(params) {
        return this.$axios.get(`${this.endpoint}/list`, {params})
    }

    /**
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    fetchPaginated(params) {
        return this.$axios.get(`${this.endpoint}`, {params})
    }

    /**
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    fetch(id) {
        return this.$axios.get(`${this.endpoint}/${id}`)
    }

    /**
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    post(params) {
        return this.$axios.post(`${this.endpoint}`, params)
    }

    /**
     * @param id
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    put(id, params) {
        return this.$axios.put(`${this.endpoint}/${id}`, params)
    }

    /**
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    delete(id) {
        return this.$axios.delete(`${this.endpoint}/${id}`)
    }
}

export function createRepository(Instance) {
    return $axios => new Instance($axios)
}
