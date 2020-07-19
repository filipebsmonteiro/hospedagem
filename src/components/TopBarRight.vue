<template>
    <div>
        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none p-0" dropleft right no-caret>
            <template v-slot:button-content>
                <img src="/img/brand/avatar.png" class="img-2x">
            </template>
            <b-dropdown-item>
                <b-icon-person/>Perfil
            </b-dropdown-item>
            <b-dropdown-item>
                <b-icon-puzzle/>Configurações
            </b-dropdown-item>
            <b-dropdown-divider/>
            <b-dropdown-item>
                <b-icon-box-arrow-left/> Sair
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "TopBarRight"
    }
</script>

<style lang="scss" scoped>

</style>