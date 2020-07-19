<template>
    <b-card>
        <b-card-header class="p-0 d-flex justify-content-between">
            <h2>Configurações do Ambiente</h2>
            <div>
                <b-button-group size="sm" class="rounded-pill">
                    <b-button variant="primary">Teste</b-button>
                    <b-button variant="primary">Produção</b-button>
                    <b-button variant="primary">Personalizado</b-button>
                </b-button-group>
            </div>
        </b-card-header>
        <table class="table table-borderless table-responsive table-striped table-hover w-100">
            <tbody class="d-flex flex-column">
                <tr class="d-flex">
                    <td class="flex-fill">error_reporting</td>
                    <td>
                        <b-select v-model="form.error_reporting" :options="[
                        'E_ALL & ~E_DEPRECATED & ~E_STRICT',
                        'E_ALL | ~E_STRICT',
                        'E_ERROR & ~E_ALL',
                        'E_ALL & ~E_NOTICE',
                    ]"/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">display_errors</td>
                    <td>
                        <b-check v-model="form.display_errors" switch/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">display_startup_errors</td>
                    <td>
                        <b-check v-model="form.display_startup_errors" switch/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">track_errors</td>
                    <td>
                        <b-check v-model="form.track_errors" switch/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">short_open_tag</td>
                    <td>
                        <b-check v-model="form.short_open_tag" switch/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">register_globals</td>
                    <td>
                        <b-check v-model="form.register_globals" switch/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">post_max_size</td>
                    <td class="d-flex">
                        <p class="d-inline mr-3">{{ form.post_max_size }} MB / 100 MB</p>
                        <b-input type="range" min="5" max="100" v-model="form.post_max_size"/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">upload_max_file_size</td>
                    <td class="d-flex">
                        <p class="d-inline mr-3">{{ form.upload_max_file_size }} MB / 100 MB</p>
                        <b-input type="range" min="20" max="100" v-model="form.upload_max_file_size"/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">max_input_vars</td>
                    <td class="d-flex">
                        <p class="d-inline mr-3">{{ form.max_input_vars }} / 10000</p>
                        <b-input type="range" min="1000" step="1000" max="10000" v-model="form.max_input_vars"/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">max_execution_time</td>
                    <td class="d-flex">
                        <p class="d-inline mr-3">{{ form.max_execution_time }}s / 500 s</p>
                        <b-input type="range" min="30" max="500" v-model="form.max_execution_time"/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">max_input_time</td>
                    <td class="d-flex">
                        <p class="d-inline mr-3">{{ form.max_input_time }}s / 500 s</p>
                        <b-input type="range" min="60" max="500" v-model="form.max_input_time"/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">Usar SMTP da Umbler</td>
                    <td>
                        <b-check v-model="form.SMTP" switch/>
                    </td>
                </tr>
                <tr class="d-flex">
                    <td class="flex-fill">mod_security</td>
                    <td>
                        <b-check v-model="form.mod_security" switch/>
                    </td>
                </tr>
            </tbody>
        </table>
    </b-card>
</template>

<script>
    export default {
        name: "PHP",
        data() {
            return {
                form: {
                    error_reporting: 'E_ALL & ~E_NOTICE',
                    display_errors: true,
                    display_startup_errors: false,
                    track_errors: true,
                    short_open_tag: false,
                    register_globals: true,
                    post_max_size: '20',
                    upload_max_file_size: '30',
                    max_input_vars: '1000',
                    max_execution_time: '30',
                    max_input_time: '60',
                    SMTP: true,
                    mod_security: true,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>