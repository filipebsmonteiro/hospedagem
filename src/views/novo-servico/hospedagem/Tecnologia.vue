<template>
    <div class="container">
        <b-card class="w-75 ml-auto mr-auto mt-5 mb-5 shadow">
            <b-card-header class="p-0 d-flex justify-content-between">
                <h2>Nos diga, qual tenologia você utiliza ou utilizou?</h2>
                <router-link :to="{name: 'novo-servico.hospedagem'}"><i class="fas fa-times fa-2x"/></router-link>
            </b-card-header>

            <h4 class="text-primary">Plataforma</h4>
            <b-form-radio-group v-model="form.plataforma" buttons>
                <b-form-radio value="PHP" v-b-tooltip.hover title="PHP" class="rounded-pill m-1">
                    <i class="fab fa-php fa-3x text-blue"/>
                </b-form-radio>
                <b-form-radio value="NODE" v-b-tooltip.hover title="Node JS" class="rounded-pill m-1">
                    <i class="fab fa-node-js fa-3x text-success"/>
                </b-form-radio>
            </b-form-radio-group>

            <hr/>

            <h4 class="text-primary">Template</h4>
            <b-form-radio-group v-model="form.template" buttons>
                <b-form-radio value="WORDPRESS" v-b-tooltip.hover title="Wordpress" class="rounded-pill m-1">
                    <i class="fab fa-wordpress fa-3x"/>
                </b-form-radio>
                <b-form-radio value="JOOMLA" v-b-tooltip.hover title="Joomla" class="rounded-pill m-1">
                    <img src="/img/svg-icons/joomla.svg" height="50"/>
                </b-form-radio>
                <b-form-radio value="PRESTASHOP" v-b-tooltip.hover title="Presta Shop" class="rounded-pill m-1">
                    <img src="/img/svg-icons/prestashop.svg" height="50"/>
                </b-form-radio>
                <b-form-radio value="LARAVEL" v-b-tooltip.hover title="Laravel" class="rounded-pill m-1">
                    <img src="/img/svg-icons/laravel.svg" height="50"/>
                </b-form-radio>
            </b-form-radio-group>

            <hr/>

            <div v-if="form.template && form.template === 'LARAVEL'">
                <h4 class="text-primary">Qual tamanho da Instância?</h4>
                <div class="row">
                    <div class="col-md-7">
                        <b-form-input v-model="form.ambiente" type="range" min="1" max="5"/>
                        <div class="d-flex justify-content-between">
                            <span>PP</span>
                            <span>P</span>
                            <span>M</span>
                            <span>G</span>
                            <span>GG</span>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <ul v-if="form.ambiente === '1'" class="list-unstyled">
                            <li><i class="fas fa-microchip mr-3"/>CPU: <b>1 x 2.4 GHz</b></li>
                            <li><i class="fas fa-memory mr-3"/>RAM: <b>1 GB</b></li>
                            <li><i class="fas fa-hdd mr-3"/>Disco: <b>60 GB</b></li>
                            <li><i class="fas fa-server mr-3"/>Sites: até <b>100</b></li>
                            <li><i class="fas fa-network-wired mr-3"/>Tráfego: <b>256 GB</b></li>
                        </ul>
                        <ul v-else-if="form.ambiente === '2'" class="list-unstyled">
                            <li><i class="fas fa-microchip mr-3"/>CPU: <b>2 x 2.4 GHz</b></li>
                            <li><i class="fas fa-memory mr-3"/>RAM: <b>2 GB</b></li>
                            <li><i class="fas fa-hdd mr-3"/>Disco: <b>80 GB</b></li>
                            <li><i class="fas fa-server mr-3"/>Sites: até <b>150</b></li>
                            <li><i class="fas fa-network-wired mr-3"/>Tráfego: <b>256 GB</b></li>
                        </ul>
                        <ul v-else-if="form.ambiente === '3'" class="list-unstyled">
                            <li><i class="fas fa-microchip mr-3"/>CPU: <b>2 x 2.4 GHz</b></li>
                            <li><i class="fas fa-memory mr-3"/>RAM: <b>4 GB</b></li>
                            <li><i class="fas fa-hdd mr-3"/>Disco: <b>120 GB</b></li>
                            <li><i class="fas fa-server mr-3"/>Sites: até <b>200</b></li>
                            <li><i class="fas fa-network-wired mr-3"/>Tráfego: <b>256 GB</b></li>
                        </ul>
                        <ul v-else-if="form.ambiente === '4'" class="list-unstyled">
                            <li><i class="fas fa-microchip mr-3"/>CPU: <b>4 x 2.4 GHz</b></li>
                            <li><i class="fas fa-memory mr-3"/>RAM: <b>8 GB</b></li>
                            <li><i class="fas fa-hdd mr-3"/>Disco: <b>160 GB</b></li>
                            <li><i class="fas fa-server mr-3"/>Sites: até <b>250</b></li>
                            <li><i class="fas fa-network-wired mr-3"/>Tráfego: <b>256 GB</b></li>
                        </ul>
                        <ul v-else-if="form.ambiente === '5'" class="list-unstyled">
                            <li><i class="fas fa-microchip mr-3"/>CPU: <b>8 x 2.4 GHz</b></li>
                            <li><i class="fas fa-memory mr-3"/>RAM: <b>16 GB</b></li>
                            <li><i class="fas fa-hdd mr-3"/>Disco: <b>320 GB</b></li>
                            <li><i class="fas fa-server mr-3"/>Sites: até <b>300</b></li>
                            <li><i class="fas fa-network-wired mr-3"/>Tráfego: <b>256 GB</b></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div v-else>
                <h4 class="text-primary">Qual ambiente deseja criar seu site?</h4>
                <b-form-radio-group v-model="form.plano" buttons>
                    <b-form-radio value="PRO" class="rounded m-1">
                        <i class="fas fa-home fa-2x mr-2"/> Cloud PRO
                    </b-form-radio>
                    <b-form-radio value="Compartilhado" v-b-tooltip.hover title="Servidor compartilhado" class="rounded m-1">
                        <i class="fas fa-building fa-2x mr-2"/> Cloud Sites
                    </b-form-radio>
                    <b-form-radio value="Container" class="rounded m-1">
                        <i class="fab fa-docker fa-2x mr-2"/> Containers
                    </b-form-radio>
                </b-form-radio-group>
                <a href="#">Qual a diferença?</a>
            </div>

            <b-button variant="success mt-5 mb-5" @click="$router.push({name: 'site'})" block pill>Concluir</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Tecnologia",
        data() {
            return {
                form: {
                    plataforma: null,
                    template: null,
                    plano: null,
                    ambiente: null
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn.active {
        border: 3px solid #5e72e4 !important;
    }
</style>