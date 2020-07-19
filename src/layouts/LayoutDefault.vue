<template>
    <div>
        <TopBar :sideBarVisible="sideBarVisible" @toggle="sideBarVisible = !sideBarVisible"/>
        <SideBar :visible="sideBarVisible" @change="evt => {sideBarVisible = evt}"/>
        <div class="content p-3">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import SideBar from "@/components/SideBar";
    import TopBar from "@/components/TopBar";

    export default {
        name: "LayoutDefault",
        components: {SideBar, TopBar},
        data() {
            return {
                sideBarVisible: true
            }
        },
        mounted() {
            if (this.$el.clientWidth < 768) {
                this.sideBarVisible = false
            }else{
                this.sideBarVisible = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        @media(min-width: 768px){
            margin-left: 320px;
        }
    }
</style>