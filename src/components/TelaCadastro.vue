<template>
    <div class="tela-cadastro">
        <div class="cadastro">
            <div class="titulo-login">
                <h2 class="titulo">
                    Faça o seu login!
                </h2>
            </div>
            <div class="componentes-cadastro">
                <form class="formulario">
                  <CadastroLogin />
                    <div class="acoes-cadastro">
                        <EsqueceuSenha />
                        <CadastrarUsuario />
                    </div>
                </form>
                <span class="separador">
                   
                </span>
                <img src="../assets/logo-zeus.jpg" alt="" class="foto-login">
            </div>
            
        </div>
        
    </div>
</template>
<script lang="ts">
import Dialog from 'primevue/dialog';
import { defineComponent } from 'vue';
import CadastrarUsuario from './CadastrarUsuario.vue';
import EsqueceuSenha from './EsqueceuSenha.vue';
import CadastroLogin from './CadastroLogin.vue';

export default defineComponent({
components:{
   CadastrarUsuario,
   EsqueceuSenha, 
   CadastroLogin
},
data(){
    return{
        visible: false
    }
},
methods:{
    cancelarCadastro(){
        this.visible = false;
    }
}
})
</script>
<style scoped>
.tela-cadastro{
    align-items: center;
    padding: 10% 10%;
    display: flex;
    justify-content: center;
}
.cadastro{

    background-color: aqua;
    text-align: center;
    width: 56rem;
    height: 24rem;
    background-color: white;
    border-radius: 21px;
    box-shadow: 0px 4px 9px black;
   
}
.componentes-cadastro{
    display: flex;
    align-items:center; 
    
}
.titulo-login{
    background-color: black;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: white;
}

.formulario{
   
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
   justify-content: center;
    height: 10rem;
    margin-top: 20px;
    align-items: center;
}

.input-cadastro{
    box-shadow: 0px 6px 9px #5CB9EE;
    border-radius: 6px;
    height: 3rem;   
    width: 70%;
}
.input-cadastros{
    box-shadow: 0px 6px 9px #5CB9EE;
    border-radius: 6px;
    height: 2rem;   
    width: 90%;
    background-color: white;
}

.separador{
    background-color: black;
    display: inline-block;
    height: 21rem;
    margin: 0px 1px 0px;
    width: 1px;
    vertical-align: middle;
}
.foto-login{
    width: 40%;
    height: 0%;
}
.acoes-cadastro{
    display: flex;
    gap: 20px;
    color: blue;
   
}
</style>