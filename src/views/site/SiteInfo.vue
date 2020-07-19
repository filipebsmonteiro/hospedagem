<template>
    <div>
        <b-card class="shadow mb-4">
            <b-card-header class="p-0 d-flex justify-content-between">
                <h3>suahospedagem.com.br</h3>
                <b-button-group size="sm" class="mb-1">
                    <b-button variant="outline-primary" v-b-tooltip title="Pausar">
                        <b-icon-pause-fill/>
                    </b-button>
                    <b-button variant="outline-primary" v-b-tooltip title="Reiniciar">
                        <b-icon-bootstrap-reboot/>
                    </b-button>
                    <b-button variant="outline-danger" v-b-tooltip title="Excluir">
                        <b-icon-trash/>
                    </b-button>
                </b-button-group>
            </b-card-header>
            <div class="row mt-3">
                <div class="col">
                    <div class="d-flex p-1">
                        <b class="font-weight-bold w-50">Plano:</b>
                        <span>PRO</span>
                    </div>
                    <div class="d-flex p-1">
                        <b class="font-weight-bold w-50">Status:</b>
                        <b-badge variant="success">Ativado</b-badge>
                    </div>
                    <div class="d-flex p-1">
                        <b class="font-weight-bold w-50">Tecnologia:</b>
                        <b-dropdown variant="link p-0" text="PHP v7.0">
                            <b-dropdown-item>PHP v5.4</b-dropdown-item>
                            <b-dropdown-item>PHP v5.5</b-dropdown-item>
                            <b-dropdown-item>PHP v5.6</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item active>PHP v7.0</b-dropdown-item>
                            <b-dropdown-item>PHP v7.2</b-dropdown-item>
                            <b-dropdown-item>PHP v7.3</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <div class="d-flex p-1">
                        <router-link :to="'/'" class="font-weight-bold opacity-8">Configurar PHP</router-link>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col-md text-center">
                            <h4 class="mb-0">CPU</h4>
                            <VueApexCharts :options="{...options, labels: ['CPU']}" :series="[40]"/>
                        </div>
                        <div class="col-md text-center">
                            <h4 class="mb-0">Memória</h4>
                            <VueApexCharts :options="{...options, labels: ['Memória']}" :series="[80]"/>
                        </div>
                        <div class="col-md text-center">
                            <h4 class="mb-0">Armazenamento</h4>
                            <VueApexCharts :options="{...options, labels: ['Armazenamento']}" :series="[60]"/>
                        </div>
                    </div>
                </div>
            </div>
        </b-card>
        <b-card class="shadow" no-body>
            <SiteInfoTab/>
        </b-card>
        <div class="p-3">
                <router-view/>
            </div>
    </div>
</template>

<script>
    import SiteInfoTab from "@/views/site/SiteInfoTab";
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: "SiteInfo",
        components: {SiteInfoTab, VueApexCharts},
        data() {
            return {
                options: {
                    chart: {
                        // height: 280,
                        type: "radialBar",
                    },
                    plotOptions: {
                        radialBar: {
                            startAngle: -135,
                            endAngle: 135,
                            track: {
                                background: '#fff',
                                dropShadow: {
                                    enabled: true,
                                    top: 3,
                                    left: 0,
                                    blur: 4,
                                    opacity: 0.24
                                }
                            },
                            dataLabels: {
                                name: {
                                    show: false,
                                },
                                value: {
                                    offsetY: 6,
                                    fontSize: "20px",
                                    show: true
                                }
                            }
                        }
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            type: 'horizontal',
                            shade: "dark",
                            shadeIntensity: 1,
                            opacityFrom: 0.7,
                            opacityTo: 0.9,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#2dce89",
                                    opacity: 1
                                },
                            ],
                        }
                    },
                    // stroke: {
                    //     lineCap: "butt"
                    // }
                }
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
</style>




