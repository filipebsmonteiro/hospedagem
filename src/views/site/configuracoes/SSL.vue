<template>
    <b-card>
        <b-card-header class="p-0 d-flex justify-content-between">
            <h2>Certificado TLS/SSL</h2>
            <router-link to="/">Como configurar</router-link>
        </b-card-header>
        <b-card-body>
            <b-card class="bg-info-light mb-3">
                Atualmente você não possui um certificado TLS/SSL confugrado para este domínio
            </b-card>
            <div class="row">
                <div class="col">
                    <b-button variant="outline-primary" block pill>Tenho certificado e gostaria de importá-lo</b-button>
                </div>
                <div class="col">
                    <b-button variant="primary" block pill>Habilitar o certificado Let's Encrypt Grátis</b-button>
                </div>
            </div>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "SSL"
    }
</script>

<style lang="scss" scoped>

</style>