<template>
    <b-card class="shadow">
        <b-card-header class="p-0 d-flex justify-content-between">
            <h2>/public</h2>
            <div>
                <b-button variant="outline-primary" pill>Criar pasta</b-button>
                <b-button variant="outline-primary" pill>Adicionar arquivo</b-button>
            </div>
        </b-card-header>
        <b-card-body>
            <p class="mb-5">Não há itens nesta pasta.</p>
            <b-form-file multiple placeholder="Solte Pastas aqui ou" class="mb-5" browse-text="Clique" directory/>
            <b-form-file multiple placeholder="Solte Arquivos aqui ou" browse-text="Clique"/>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "Gerenciador"
    }
</script>

<style lang="scss" scoped>
    /deep/.custom-file-input:lang(en) ~ .custom-file-label::after {
        /*display: none;*/
    }
</style>