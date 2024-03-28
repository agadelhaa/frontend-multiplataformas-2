<template>

    <div class="apresentacao">
        <div class="logo-titulo">
        <img src="../assets/logo-zeus.jpg" alt="logo do zeus" class="logo">
        <h2 class="titulo-logo" >
        <router-link to="/" class=" rota-zeus" >
            Zeus
            </router-link>
        </h2>
        </div>
        <div class="rotas">
            <router-link to="/visualizar"  class="link-rota"> 
                Visualizar seus itens
            </router-link>
            <router-link to="/cadastrar" class="link-rota">
                Cadastrar itens
            </router-link>
        </div>
        <div class="bem-vindo">
        <h2 class="mensagem">
            Bem vindo ao Zeus!
        </h2>

       
        </div>
       
    </div>  
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
import CadastroRacao from './CadastroRacao.vue';
import AtualizarRacao from './AtualizarRacao.vue'
import Dropdown from 'primevue/dropdown';

export default defineComponent({
components:{

},
emits:['aoTemaAlterado'],
data() {
    return {
        selectedCity: null,
        item: [
           'RAÇÃO' ,
            'PRODUTO DE LIMPEZA' ,
            'VETERINARIO',
            'BRINQUEDOS' ,
            
            
        ],
        itemSelcionado: '',
        exibirModal: false,
        modoEscuro: false
    };

},
methods:{
exibirItem(item: string){
    this.itemSelcionado = item;
    if(item === 'RAÇÃO'){
        this.exibirModal = true
    }
},
exibirCadastro(){
    this.exibirModal = true
},

}, 
computed:{
textoBotao(){
    if(this.modoEscuro){
        return 'Desativar modo escuro'
    }
    return 'Ativar modo escuro'
}
}
});
</script>
<style scoped>
.link-rota{color: white;
    color: white;
    box-shadow: 9px 7px 6px white;
    font-size: 20px;
    width: 30%;
    text-align: center;
    border: 2px solid;
    border-radius: 9px;
}
.rota-zeus{
    color: white;
}
.rotas{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    height: 4rem;
}
.campo-foto{
display: flex;
justify-content: center;
}
.logo-titulo{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    gap: 10px;
    width: 20%;
}
.foto-main{
width: 30%;
margin-bottom: 175px;
}
.crud{
display: flex;
margin-top: 18px;
}
.apresentacao{
background-color: black;
height: 6rem;
display: flex;
align-items: center;
gap: 100px;
margin-bottom: 20px;
}

.bem-vindo{

display: flex;
align-items: center;
height: 6rem;
gap: 10px;
}
.foto-card{
width: 10%;
}
.mensagem{
font-size: 20px;
color: white;
}
.separador{
background-image: -webkit-linear-gradient(#F6F6F6 60%, #EDEDED);
background-image: linear-gradient(#F6F6F6 60%, #EDEDED);
display: inline-block;
height: 100%;
margin: 0 2px 0;
width: 1px;
vertical-align: middle;
}
.apresentacao-card{
border: 2px solid;
border-radius: 2%;
text-align: center;
height: 3rem;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
}
.card-item{
width: 20%;
background-color: white;
height: 20rem;
box-shadow: 0px 0px 21px 4px aqua;

}
.titulo-logo{
color: white;
box-shadow: 9px 7px 6px white;
font-size: 30px;
width: 36%;
text-align: center;
border: 2px solid;
border-radius: 9px;
}

.logo{
width: 48%;

}
.apresentacao-itens{
width: 60%;
}
.escolhas-principais{
background-color: #D9D9D9;

height: 40.4rem;
width: 100%;
}
.escolhas{
height: 40rem;
width: 100%;
}
.cadastro{
display: flex;
justify-content: center;
/* align-items: center; */
width: 100%;
/* gap: 5%; */
height: 40rem;
background-color: white;
}
.cadastrar{
background-color: white;
border: 2px solid white;
height: 2rem;
display: flex;
align-items: center;
width: 200px;
justify-content: center;
}
.visualizar{
background-color: white;
border: 2px solid white;
height: 2rem;
display: flex;
align-items: center;
width: 200px;
justify-content: center;
}
.itens{
background-color: white;
box-shadow: 10px 10px 10px #5CB9EE;
width: 90%;
margin-bottom: 22px;
text-align: center;
}

.selecionar-item{
list-style: none;
gap: 20px;
justify-content: center;
align-items: center;
-moz-column-count: 2;
column-count: 2;
margin-left: 10;
padding: 0px 20px;
height: 10rem;
}
.titulo-cadastro{
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;
background-color: white;
color: black;
box-shadow: 0px 6px 6px #5CB9EE;
width: 100%;
margin-top: 20px;
}
.cards {
display: flex;
justify-content: center;
margin: 60px 0px;
height: 26rem;
}
</style>