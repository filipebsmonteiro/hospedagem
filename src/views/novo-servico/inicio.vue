<template>
    <div class="d-flex flex-column">
        <h1 class="mt-5 mb-5 ml-auto mr-auto">Por onde deseja começar ?</h1>
        <div class="row">
            <div class="col text-center">
                <i class="fas fa-sitemap fa-3x text-primary"/>
                <h3 class="m-4">Hospedar Site</h3>
                <p class="mb-4">Quero uma hospedagem cloud para o meu site ou aplicação web!</p>
                <router-link :to="{name: 'novo-servico.hospedagem'}"
                             class="btn btn-outline-primary rounded-pill btn-block">Hospedar agora!</router-link>
            </div>
            <div class="col text-center">
                <i class="fas fa-globe-americas fa-3x text-primary"/>
                <h3 class="m-4">Meu domínio</h3>
                <p class="mb-4">Comprar meu domínio ".com.br" a preço de custo ou ".net" ou conheça outros!</p>
                <router-link :to="{name: 'novo-servico.dominio'}"
                             class="btn btn-outline-primary rounded-pill btn-block">Conhecer agora!</router-link>
            </div>
            <div class="col text-center">
                <i class="fas fa-mail-bulk fa-3x text-primary"/>
                <h3 class="m-4">Email</h3>
                <p class="mb-4">Configuração de email caso tenha já um domínio ou email marketing alinhado com sua estratégia!</p>
                <router-link :to="{name: 'novo-servico.email'}"
                             class="btn btn-outline-primary rounded-pill btn-block">Configurar!</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inicio"
    }
</script>

<style lang="scss" scoped>

</style>