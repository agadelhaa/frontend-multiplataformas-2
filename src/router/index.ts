

import TelaPrincipal from "@/components/TelaPrincipal.vue";
import CadastrarProduto from "@/views/CadastrarProduto.vue";
import VisualizarRacao from "@/components/VisualizarRacao.vue";
import CardsItens from "@/components/CardsItens.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import CadastroLogin from "@/components/CadastroLogin.vue";
import TelaCadastro from "@/components/TelaCadastro.vue";
import BarraMenu from "@/components/BarraMenu.vue";
import AtualizarUser from "@/components/AtualizarUser.vue";


const rotas: RouteRecordRaw [] = [{
    path:'/',
    name:'BarraMenu',
    component: BarraMenu
},
{
    path:'/atualizar',
    name:'AtualizarUser',
    component:AtualizarUser
},

{
    path:'/login',
    name:'TelaCadastro',
    component:TelaCadastro
},
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas

})

export default roteador;

