<template>
    <b-card>
        <b-card-header class="p-0 d-flex justify-content-between">
            <h2>Pontos de restauração</h2>
        </b-card-header>
        <b-card-body v-if="pontos_restauracao.length === 0">

            <b-card class="bg-info-light mb-5">
                Nenhum ponto de restauração criado até o momento!
            </b-card>

            <b-button variant="success"
                      @click="() => {pontos_restauracao = [{data_e_hora: '01/01/2020 - 21:00', acao: 1}] }"
                      block pill>Criar ponto de restauração</b-button>
        </b-card-body>
        <b-card-body v-else>
            <b-table striped hover borderless :items="pontos_restauracao">
                <template v-slot:cell(acao)>
                    <b-button variant="outline-info" size="sm" pill>Restaurar este ponto</b-button>
                </template>
            </b-table>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "Restauracao",
        data() {
            return {
                pontos_restauracao: []
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>