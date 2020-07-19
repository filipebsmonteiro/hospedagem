<template>
    <div class="d-flex justify-content-around">
        <router-link class="btn btn-link" :to="{name: 'site.deploy'}">Deploy</router-link>
        <b-dropdown variant="link" text="Arquivos">
            <b-dropdown-item>
                <router-link :to="{name: 'site.arquivos.gerenciador'}">Gerenciador</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
                <router-link :to="{name: 'site.arquivos.restauracao'}">Pontos de restauração</router-link>
            </b-dropdown-item>
        </b-dropdown>
        <router-link class="btn btn-link" :to="{name: 'site.database'}">Banco de dados</router-link>
        <b-dropdown variant="link" text="Configurações">
            <b-dropdown-item>
                <router-link :to="{name: 'site.configuracoes.php'}">Configurações PHP</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
                <router-link :to="{name: 'site.configuracoes.ssh'}">SSH</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
                <router-link :to="{name: 'site.configuracoes.ssl'}">SSL</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
                <router-link :to="{name: 'site.configuracoes.cron'}">CRON</router-link>
            </b-dropdown-item>
        </b-dropdown>
        <router-link class="btn btn-link" :to="{name: 'site.logs'}">Logs</router-link>
        <router-link class="btn btn-link" :to="{name: 'site.addons'}">Add-ons</router-link>
    </div>
</template>

<script>
    export default {
        name: "SiteInfoTab"
    }
</script>

<style lang="scss" scoped>

</style>