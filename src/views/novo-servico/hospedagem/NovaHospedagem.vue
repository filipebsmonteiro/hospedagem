<template>
    <div class="container">
        <b-card class="w-75 ml-auto mr-auto mt-5 shadow">
            <b-card-header class="p-0">
                <h3><i class="fas fa-sitemap mr-3"/>Hospedar Site</h3>
            </b-card-header>
            <b-card-body>
                <p class="h4">Antes vamos precisar de um domínio!</p>
                <b-input placeholder="seusite.com.br" v-model="dominio"/>
                <b-card v-if="dominio && dominio.length > 5" class="bg-yellow-light mt-4 pl-3 pt-3" no-body>
                    <h3>Domínio insdisponível!</h3>
                    <p>Caso este domínio seja seu prossiga normalmente.</p>
                    <p>Caso este domínio não seja seu escolha um domínio disponível.</p>
                </b-card>
                <b-button v-if="dominio && dominio.length > 5" variant="primary mt-4"
                          @click="$router.push({name: 'novo-servico.hospedagem.tecnologia'})"
                          block pill>
                    OK, o domínio é meu!</b-button>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "NovaHospedagem",
        data() {
            return {
                dominio: null
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>