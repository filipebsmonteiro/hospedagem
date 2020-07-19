<template>
    <nav class="navbar navbar-fixed-top navbar-dark bg-gradient-blue text-white top-bar p-2 pl-4 pr-4">
        <div class="d-flex flex-fill justify-content-between align-items-center">
            <SiteTopBarLeft :sideBarVisible="sideBarVisible" @toggle="$emit('toggle')"/>
            <img class="d-xl-none d-lg-none d-md-none d-sm-flex img-2x" src="/img/brand/logo.png">

            <router-link to="/" class="btn btn-link p-0 text-white">Soluções</router-link>
            <router-link to="/" class="btn btn-link p-0 text-white">Planos</router-link>
            <router-link to="/" class="btn btn-link p-0 text-white">Tecnologia</router-link>

            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link to="/" class="btn btn-link p-0 text-white"></router-link>
            <router-link :to="{name:'registro'}" class="btn btn-link p-0 text-white">Cadastrar</router-link>
            <router-link :to="{name: 'login'}" class="btn btn-link p-0 text-white">Entrar</router-link>
        </div>
    </nav>
</template>

<script>
    import SiteTopBarLeft from "@/components/SiteTopBarLeft";

    export default {
        name: "TopBar",
        props: {
            sideBarVisible: {
                type: Boolean,
                default: true
            }
        },
        components: {SiteTopBarLeft}
    }
</script>

<style lang="scss" scoped>
    /deep/ .img-2x {
        width: 32px;
        height: 32px;
    }
</style>