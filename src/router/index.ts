

import TelaPrincipal from "@/components/TelaPrincipal.vue";
import CadastrarProduto from "@/views/CadastrarProduto.vue";
import VisualizarRacao from "@/components/VisualizarRacao.vue";
import CardsItens from "@/components/CardsItens.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import CadastroLogin from "@/components/CadastroLogin.vue";
import TelaCadastro from "@/components/TelaCadastro.vue";


const rotas: RouteRecordRaw [] = [{
    path:'/',
    name:'TelaPrincipal',
    component: TelaPrincipal
},
{
    path:'/cadastrar',
    name:'CadastrarProduto',
    component:CardsItens
},
{
    path:'/visualizar',
    name:'VisualizarProduto',
    component:VisualizarRacao
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

