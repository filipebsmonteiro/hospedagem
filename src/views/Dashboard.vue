<template>
    <div>
        <h1>DASHBOARD</h1>
        <p>Necessita Idéias, Dados Que sejam Relevantes ao Usuário</p>

        <router-link :to="{name: 'novo-servico'}" class="btn btn-primary">
            <i class="fas fa-plus mr-3"/>Configurar novo Serviço</router-link>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
</style>