<template>
    <div>
        <router-link to="/"><img class="d-md-flex d-none img-2x" src="/img/brand/logo.png"></router-link>
        <b-icon-x v-if="sideBarVisible" scale="2" class="d-xl-none d-lg-none d-md-none d-sm-flex" @click="$emit('toggle')"/>
        <b-icon-list v-else scale="2" class="d-xl-none d-lg-none d-md-none d-sm-flex" @click="$emit('toggle')"/>
    </div>
</template>

<script>
    export default {
        name: "SiteTopBarLeft",
        props: {
            sideBarVisible: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .b-icon{
        cursor: pointer;
    }
</style>