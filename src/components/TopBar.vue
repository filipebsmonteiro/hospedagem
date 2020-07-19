<template>
    <nav class="navbar navbar-fixed-top navbar-dark bg-gradient-blue text-white top-bar p-2 pl-4 pr-4">
        <div class="d-flex flex-fill justify-content-between align-items-center">
            <TopBarLeft :sideBarVisible="sideBarVisible" @toggle="$emit('toggle')"/>
            <img class="d-xl-none d-lg-none d-md-none d-sm-flex img-2x" src="/img/brand/logo.png">
            <TopBarRight/>
        </div>
    </nav>
</template>

<script>
    import TopBarLeft from "@/components/TopBarLeft";
    import TopBarRight from "@/components/TopBarRight";

    export default {
        name: "TopBar",
        props: {
            sideBarVisible: {
                type: Boolean,
                default: true
            }
        },
        components: {TopBarLeft, TopBarRight}
    }
</script>

<style lang="scss" scoped>
    /deep/ .img-2x {
        width: 32px;
        height: 32px;
    }
</style>