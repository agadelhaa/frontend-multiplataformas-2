

import TelaPrincipal from "@/components/TelaPrincipal.vue";
import CadastrarProduto from "@/views/CadastrarProduto.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";


const rotas: RouteRecordRaw [] = [{
    path:'/',
    name:'TelaPrincipal',
    component: TelaPrincipal
},
{
    path:'/cadastrar',
    name:'CadastrarProduto',
    component:CadastrarProduto
}
// {
//     path:'/visualizar',
//     name:'VisualizarProduto',
//     component:VisualizarProduto
// }

]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas

})

export default roteador;

