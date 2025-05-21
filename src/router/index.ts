

import TelaPrincipal from "@/components/TelaPrincipal.vue";
import CadastrarProduto from "@/views/CadastrarProduto.vue";
import VisualizarRacao from "@/components/VisualizarRacao.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import CadastroLogin from "@/components/CadastroLogin.vue";
import TelaCadastro from "@/components/TelaCadastro.vue";
import BarraMenu from "@/components/BarraMenu.vue";
import AtualizarUser from "@/components/AtualizarUser.vue";
import AtualizarSenha from "@/components/AtualizarSenha.vue";
import Produtos from "@/components/Produtos.vue";
import Marketplace from "@/components/Marketplace.vue";
import AgendaCadastro from "@/components/AgendaCadastro.vue";



const rotas: RouteRecordRaw [] = [
{
    path:'/atualizar',
    name:'AtualizarUser',
    component:AtualizarUser
},

{
    path:'/',
    name:'TelaCadastro',
    component:TelaCadastro
},{
    path:'/atualizarLogin',
    name:'AtualizarSenha',
    component:AtualizarSenha
},
{
    path:'/marketplace',
    name:'MarketplaceComponent',
    component:Marketplace
},
{
    path:'/agenda',
    name:'AgendaComponent',
    component:AgendaCadastro
},

]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas

})

roteador.beforeEach((to, from, next) => {
    // Ignorando autenticação para desenvolvimento
    next();
  });

export default roteador;

