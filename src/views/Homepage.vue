<template>
    <div>
        <SiteTopBar class="sticky-top"/>

        <div class="container">
            <div class="row mt-7">
                <div class="col">
                    <h1>Hospede seu site</h1>
                    <h1>De forma fácil e intuitiva!</h1>
                    <p>Oferecemos uma hospedagem tanto para sites quanto para aplicações.</p>
                    <p>Temos a solução Perfeito para as suas necessidades.</p>
                    <b-button variant="primary" block pill>Experimentar Gratuitamente</b-button>
                </div>
                <div class="col">
                    <b-carousel :interval="3000">
                        <b-carousel-slide img-blank caption="Integração Github">
                            <h1><i class="fab fa-github fa-3x text-blue"/></h1>
                        </b-carousel-slide>
                        <b-carousel-slide img-blank caption="Integração FTP">
                            <h1><i class="fas fa-folder-open fa-3x text-blue"/></h1>
                        </b-carousel-slide>
                    </b-carousel>
                </div>
                
            </div>
            <div class="row mt-7">
                <div class="col">
                    <b-card class="bg-gradient-success">
                        <h1 class="text-white">Agência</h1>
                        <b-card class="bg-gradient-danger">
                            <h1 class="text-white">Empreendedor</h1>
                            <b-card class="bg-gradient-indigo">
                                <h1 class="text-white">Desenvolvedor</h1>
                            </b-card>
                        </b-card>
                    </b-card>
                </div>
                <div class="col">
                    <h1>Ideal particularmente para você!</h1>
                    <h1>Independente do seu tamanho!</h1>
                    <p>Configuração simples para desenvolvedores, empreendedores ou até para agências.</p>
                    <p>Temos a solução Perfeito para as suas necessidades.</p>
                    <b-button variant="primary" block pill>Vamos nessa!</b-button>
                </div>
            </div>

            <div class="row">
                
            </div>
        </div>
    </div>
</template>

<script>
import SiteTopBar from '@/components/SiteTopBar'

    export default {
        name: 'Homepage',
        components: {SiteTopBar}
    }
</script>

<style lang="scss" scoped>
    img {
        max-width: 80vh;
        @media (max-width: 768px) {
            max-width: 80vw;
        }
    }
    .img-2x {
        width: 32px;
        height: 32px;
    }
    .b-icon{
        cursor: pointer;
    }
    /deep/.carousel-inner{
        border: rgba(132, 181, 236, 0.8) solid 2px;
        border-radius: 10px;
        .carousel-item{
            img{
                height: 210px !important;
                width: 100% !important;
            }
        }
    }
</style>
