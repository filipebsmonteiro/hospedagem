<template>
    <div>
        <div class="w-100">
            <b-button variant="primary" size="sm" class="ml-auto" @click="isCreating = true" pill>Criar CRON</b-button>
        </div>

        <b-card v-if="isCreating" class="shadow">
            <b-card-header class="p-0 d-flex justify-content-between">
                <h2>Criar CRON</h2>
                <i class="fas fa-times fa-2x" @click="isCreating = false"/>
            </b-card-header>

            <b-form-group label="Nome">
                <b-input />
            </b-form-group>
            <b-form-group label="Intervalo de execução">
                <b-select>
                    <b-select-option value="5">A cada 5 minutos</b-select-option>
                    <b-select-option value="5">A cada 10 minutos</b-select-option>
                    <b-select-option value="5">A cada 30 minutos</b-select-option>
                    <b-select-option value="5">A cada 1 hora</b-select-option>
                    <b-select-option value="5">A cada 6 horas</b-select-option>
                    <b-select-option value="5">A cada 24 horas</b-select-option>
                </b-select>
            </b-form-group>
            <b-form-group label="URL">
                <b-input placeholder="curl -Sks ex: http://mydomain.com.br/scripts/cleanImages.php" />
            </b-form-group>
        </b-card>

        <b-card v-else class="shadow">
            <b-card class="bg-info-light">
                Utilize as CRONs para agendar acessos de tempos em tempos à URLs do seu site ou apicativo
            </b-card>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "CRON",
        data() {
            return {
                isCreating: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>