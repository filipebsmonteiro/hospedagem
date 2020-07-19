<template>
    <div class="m-5">
        <div class="text-center mb-5">
            <img src="/img/brand/logo.png" width="100">
            <h1>Obrigado por se cadastrar {{ $route.params.nome }}!</h1>
        </div>
        <div class="w-75 m-auto">
            <b-card class="bg-success-light pl-3" no-body>
                <h3>Quase lá!</h3>
                <p>Seus próximos passos são simples:</p>
                <ul>
                    <li>Acesse seu e-mail.</li>
                    <li>Clique no link de confirmação.</li>
                    <li>Pronto!</li>
                </ul>
            </b-card>
            <p class="mt-2">*Caso não encontre o nosso e-mail, verifique seus <b>Spams</b></p>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
      window.scrollTo(0,0)
    },
}
</script>

<style lang="scss" scoped>
</style>