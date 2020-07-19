<template>
    <div>
        <b-card v-if="loading || items.length > 0" class="ml-3 mr-3 mb-3" body-class="p-0">
            <b-overlay :show="loading">
                <b-table
                        :ref="ref"
                        head-variant="light"
                        :items="items"
                        :fields="localFields"
                        responsive
                        hover
                >
                    <template v-for="slotName in Object.keys($scopedSlots)" v-slot:[slotName]="slotScope">
                        <slot :name="slotName" v-bind="slotScope" />
                    </template>
                </b-table>
            </b-overlay>
            <Paginator
                    v-if="paginator.total > paginator.per_page"
                    :page="paginator.page"
                    :per-page="paginator.per_page"
                    :total="paginator.total"
                    @change="evt => $emit('list', evt)"
            />
        </b-card>
        <EmptyData v-else :title="textEmpty">
            <router-link v-if="routeNew && textNew" :to="{name: routeNew}" class="btn btn-primary">
                {{ textNew }}
            </router-link>
        </EmptyData>
    </div>
</template>

<script>
    import EmptyData from "@/components/EmptyData";
    import Paginator from "@/components/Paginator";

    export default {
        name: "TableSimple",
        components: {
            Paginator,
            EmptyData
        },
        props: {
            textEmpty: {
                type: String,
                default: ''
            },
            items: {
                type: Array
            },
            loading: {
                type: Boolean,
                default: false
            },
            fields: {
                type: Array,
                default: () =>[]
            },
            paginator: {
                type: Object,
                default: () => {
                    return {
                        per_page: null,
                        page: null,
                        total: null
                    }
                }
            },
        },
        computed: {
            localFields(){
                return this.fields
            }
        },
        data() {
            return {
                ref: null,
            }
        },
        mounted() {
            this.ref = this._uid
        },
    }
</script>

<style lang="sass" scoped>

</style>
