

import TelaPrincipal from "@/components/TelaPrincipal.vue";
import CadastrarProduto from "@/views/CadastrarProduto.vue";
import VisualizarRacao from "@/components/VisualizarRacao.vue";
import CardsItens from "@/components/CardsItens.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";


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
}

]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas

})

export default roteador;

