<template>
    <div>
        <TopBar :sideBarVisible="false"/>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar";

    export default {
        name: "LayoutDefault",
        components: {TopBar},
    }
</script>

<style lang="scss" scoped>
</style>