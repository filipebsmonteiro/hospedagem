<template>
    <div class="main-content bg-default">
        <!-- Header -->
        <div class="header bg-gradient-success py-7 py-lg-8">
            <div class="container">
                <div class="header-body text-center mb-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6">
                            <h1 class="text-white">Bem-vindo(a)!</h1>
                            <p class="text-lead text-white">Use nossas soluções para criar algo incrível!
                                Comece gratuitamente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-5">

            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-header bg-transparent">
                            <div class="text-muted text-center mt-2"><h3>NOME SISTEMA</h3></div>
                        </div>
                        <div class="card-body px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Use suas credenciais</small>
                            </div>
                            <form role="form">
                                <b-input class="input-group-alternative mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="model.email">
                                </b-input>

                                <b-input class="input-group-alternative"
                                            placeholder="Senha"
                                            type="password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="model.password">
                                </b-input>

                                <div class="text-center">
<!--                                    <b-button variant="primary" class="my-4" block @click="login">Acessar</b-button>-->
                                    <router-link class="btn btn-primary btn-block my-4"
                                                 :to="{name: 'novo-servico'}">Acessar</router-link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Esqueceu Senha?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <router-link :to="{name: 'registro'}">
                                <small>Criar nova conta</small>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <footer class="py-5">
            <div class="container">
                <div class="row align-items-center justify-content-xl-between">
                    <div class="col-xl-6">
                        <div class="copyright text-center text-xl-left text-muted">
                            &copy; {{year}} <a href="https://bratech.info" class="font-weight-bold ml-1"
                                               target="_blank">BRATECH</a>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <ul class="nav nav-footer justify-content-center justify-content-xl-end">
                            <li class="nav-item">
                                <a href="/" class="nav-link" target="_blank">Voltar ao Site</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    import APIService from '@/api/APIService'
    import {redirectLogin} from '@/routes/guards'
    import Auth from '@/services/Auth'

    export default {
        name: 'login',
        data() {
            return {
                model: {
                    email: '',
                    password: ''
                },
                year: new Date().getFullYear(),
            }
        },
        methods: {
            async login() {
                if (this.model.email === '' || this.model.password === '') {
                    this.$snotify({
                        type: 'danger',
                        title: `Credenciais Inválidas!`,
                    })
                    return
                }

                await Auth.login(this.model)
                    .then(async response => {
                        await APIService._setToken(response.data.access_token)
                        await APIService._setExpiration(response.data.expires_in)
                        redirectLogin()
                    })
                    .catch(() => {
                        this.$snotify({
                            type: 'danger',
                            title: `Credenciais Inválidas!`,
                        })
                    })
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>
