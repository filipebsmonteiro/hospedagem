// import APIService from '@/api/APIService'
// import {isAuthenticated} from '@/routes/guards'
import LayoutDefault from "@/layouts/LayoutDefault";
import LayoutEmpty from "@/layouts/LayoutEmpty";
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    //scrollBehavior () {
    //  return { x: 0, y: 0 };
    //},

    routes: [
        {path: '*', component: () => import('@/views/NotFound')},

        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login'),
            // beforeEnter: ($to, $from, $next) => {
            //     if (APIService._isAuthenticated()) {
            //         $next({name: 'dashboard'})
            //     }
            //     $next()
            // },

        },
        {path: '/', name: 'homepage', component: () => import('@/views/Homepage')},
        {
            path: '/',
            component: LayoutEmpty,
            children: [
                {path: 'registro', name: 'registro', component: () => import('@/views/Registro')},
                {path: 'agradecimento/:nome', name: 'agradecimento', component: () => import('@/views/Agradecimento')},
            ]
        },

        {
            path: '/novo-servico',
            name: 'novo-servico',
            redirect: {name: 'novo-servico.inicio'},
            component: LayoutEmpty,
            children: [
                {path: 'inicio', name: 'novo-servico.inicio', component: () => import('@/views/novo-servico/inicio')},

                {
                    path: 'hospedagem',
                    name: 'novo-servico.hospedagem',
                    component: () => import('@/views/novo-servico/hospedagem/NovaHospedagem')
                },
                {
                    path: 'hospedagem/tecnologia',
                    name: 'novo-servico.hospedagem.tecnologia',
                    component: () => import('@/views/novo-servico/hospedagem/Tecnologia')
                },

                {
                    path: 'dominio',
                    name: 'novo-servico.dominio',
                    component: () => import('@/views/novo-servico/NovoDominio')
                },

                {path: 'email', name: 'novo-servico.email', component: () => import('@/views/novo-servico/NovoEmail')},
            ]
        },

        {
            path: '/',
            component: LayoutDefault,
            // beforeEnter: isAuthenticated,
            redirect: {name: 'dashboard'},
            children: [
                {path: 'dashboard', name: 'dashboard', component: () => import('@/views/Dashboard')},

                {
                    path: 'site',
                    name: 'site',
                    redirect: {name: 'site.deploy'},
                    component: () => import('@/views/site/SiteInfo'),
                    children: [
                        {path: 'deploy', name: 'site.deploy', component: () => import('@/views/site/deploy/Deploy')},

                        {
                            path: 'arquivos/gerenciador',
                            name: 'site.arquivos.gerenciador',
                            component: () => import('@/views/site/arquivos/Gerenciador')
                        },
                        {
                            path: 'arquivos/restauracao',
                            name: 'site.arquivos.restauracao',
                            component: () => import('@/views/site/arquivos/Restauracao')
                        },

                        {path: 'database', name: 'site.database', component: () => import('@/views/site/Database')},


                        {
                            path: 'configuracoes/php',
                            name: 'site.configuracoes.php',
                            component: () => import('@/views/site/configuracoes/PHP')
                        },
                        {
                            path: 'configuracoes/ssh',
                            name: 'site.configuracoes.ssh',
                            component: () => import('@/views/site/configuracoes/SSH')
                        },
                        {
                            path: 'configuracoes/ssl',
                            name: 'site.configuracoes.ssl',
                            component: () => import('@/views/site/configuracoes/SSL')
                        },
                        {
                            path: 'configuracoes/cron',
                            name: 'site.configuracoes.cron',
                            component: () => import('@/views/site/configuracoes/CRON')
                        },

                        {path: 'logs', name: 'site.logs', component: () => import('@/views/site/Logs')},
                        {path: 'add-ons', name: 'site.addons', component: () => import('@/views/site/Addons')},
                    ]
                },
            ]
        },
    ]
})
