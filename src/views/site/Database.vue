<template>
    <b-card>
        <b-card-header class="p-0">
            <h2>Criando banco de dados ...</h2>
        </b-card-header>
        <b-card-body>
            <b-form-radio-group class="mb-4" buttons>
                <b-form-radio value="MYSQL" v-b-tooltip.hover title="MySQL" class="rounded-pill m-1">
                    <img src="/img/svg-icons/mysql.svg" height="50"/>
                </b-form-radio>
                <b-form-radio value="SQLSERVER" v-b-tooltip.hover title="SQL Server" class="rounded-pill m-1">
                    <img src="/img/svg-icons/sql-server.svg" height="50"/>
                </b-form-radio>
                <b-form-radio value="MONGODB" v-b-tooltip.hover title="Mongo DB" class="rounded-pill m-1">
                    <img src="/img/svg-icons/mongodb.svg" height="50"/>
                </b-form-radio>
            </b-form-radio-group>

            <b-form-group label="Nome do Banco de Dados">
                <b-input />
            </b-form-group>
            <b-form-group label="Usuário">
                <b-input />
            </b-form-group>
            <b-form-group label="Senha">
                <b-input />
            </b-form-group>
            <h4>Espaço?</h4>
            <b-form-radio-group v-model="valor" buttons>
                <b-form-radio value="0.9" class="rounded m-1">
                    R$ 0,90
                </b-form-radio>
                <b-form-radio value="15" v-b-tooltip.hover class="rounded m-1" checked="checked">
                    R$ 15,00 (Recomendado)
                </b-form-radio>
                <b-form-radio value="35" class="rounded m-1">
                    R$ 35,00
                </b-form-radio>
            </b-form-radio-group>
            <ul v-if="valor === '0.9'" class="list-unstyled m-3">
                <li><b>1 GB</b> de espaço</li>
                <li><b>25 conexões</b> simultâneas</li>
                <li><b>Baixa</b> capacidade de CPU</li>
                <li><b>Baixa</b> capacidade de IO</li>
                <li><b>Possui</b> cache</li>
            </ul>
            <ul v-else-if="valor === '15'" class="list-unstyled m-3">
                <li><b>2 GB</b> de espaço</li>
                <li><b>50 conexões</b> simultâneas</li>
                <li><b>Baixa</b> capacidade de CPU</li>
                <li><b>Baixa</b> capacidade de IO</li>
                <li><b>Possui</b> cache</li>
            </ul>
            <ul v-else-if="valor === '35'" class="list-unstyled m-3">
                <li><b>5 GB</b> de espaço</li>
                <li><b>50 conexões</b> simultâneas</li>
                <li><b>Média</b> capacidade de CPU</li>
                <li><b>Média</b> capacidade de IO</li>
                <li><b>Possui</b> cache</li>
            </ul>

        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: 'DataBase',
        data() {
            return {
                valor: null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn.active {
        border: 3px solid #5e72e4 !important;
    }
</style>