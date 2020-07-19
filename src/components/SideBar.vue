<template>
    <b-sidebar
            bg-variant="transparent"
            backdrop-variant="dark"
            :visible="visible"
            @change="evt => $emit('change', evt)"
            no-header no-close-on-route-change>
        <nav class="ml-3">
            <b-nav vertical>
                <b-nav-item :to="{name: 'dashboard'}" class="font-weight-bold opacity-8">
                    <b-icon-bar-chart class="mr-2"/>
                    Dashboard
                </b-nav-item>

                <b-nav-item class="font-weight-bold opacity-8" v-b-toggle.collapse-1>
                    <CaretCollapse/>
                    suahospedagem.com.br
                </b-nav-item>
                <b-collapse id="collapse-1" class="ml-4 border-left border-light" visible>
                    <b-nav-item :to="{name: 'site'}" class="font-weight-bold opacity-8">Site</b-nav-item>

                    <b-nav-item class="font-weight-bold opacity-8" v-b-toggle.collapse-1-1>Sub Nivel 1</b-nav-item>
                    <b-collapse id="collapse-1-1" class="ml-4 border-left border-light">
                        <b-nav-item class="font-weight-bold opacity-8">Sub Nivel 2</b-nav-item>
                    </b-collapse>
                </b-collapse>
            </b-nav>
        </nav>
    </b-sidebar>
</template>

<script>
    import CaretCollapse from "@/components/CaretCollapse";

    export default {
        name: "SideBar",
        components: {CaretCollapse},
        props: {
            visible: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    /deep/.b-sidebar {
        top: 66px !important;
    }
    /deep/.bg-transparent{
        @media(max-width: 768px){
            top: 50px !important;
            background: linear-gradient(87deg, #e9ecef 0, #e9eaef 100%) !important;
        }
    }
</style>