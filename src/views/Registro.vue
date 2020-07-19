<template>
    <div class="m-5">
        <div class="text-center mb-5">
            <img src="/img/brand/logo.png" width="100">
            <h1>Começe com custo zero.</h1>
        </div>
        <div class="w-75 m-auto">
            <b-form-group label="Nome"><b-input v-model="nome"/></b-form-group>
            <b-form-group label="E-mail"><b-input/></b-form-group>
            <b-form-group label="Senha"><b-input type="password"/></b-form-group>
            <!-- <b-button variant="primary" pill block>Criar minha conta</b-button> -->
            <router-link
                class="btn btn-primary rounded-pill btn-block"
                :to="{name: 'agradecimento', params: {nome}}">Criar minha conta</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: null
        }
    }
}
</script>

<style lang="scss" scoped>
</style>