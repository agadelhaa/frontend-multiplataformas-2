<template>
    <main class="apresentacao-perfil">
             <div class="logo-titulo">
            <img src="../assets/logo-praca.png" alt="logo do petFood" class="logo">
            <h2 class="titulo-logo">
               
                    Praça+
                    
            </h2>
        </div>
        <div class="rotas">
            <button v-on:click="agendarConsulta()" class="btn-rota">Agendar solicitações</button>
            <Button v-on:click="marketplace()" class="btn-rota">Ver solicitações</Button>

        </div>
        <div class="bem-vindo">
            <h2 class="mensagem">
               
        Bem-vindo, {{ user }}
      </h2>
                <div class="card flex justify-content-center perfil">
        <Button type="button" icon="pi pi-cog" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu"  :model="items" :popup="true" />
    </div>
   
      </div>
    
      </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Menu from 'primevue/menu';

import { realizarLogout, userLogado, verificarUsuarioLogado } from '@/http';
import AtualizarUser from './AtualizarUser.vue';
import ListarUsuario from './ListarUsuario.vue';
import Marketplace from './Marketplace.vue';
import BarraMenu from './BarraMenu.vue';


export default defineComponent({
    name:'BarraPerfil',
    components:{},
    data(){
        return{
            user: '',
            items: [
          {
                    label: 'Atualizar informações',
                    icon: 'pi pi-icon',
                    command: this.atualizarUser
                },{
                    label: 'Atualizar login',
                    icon: 'pi pi-icon',
                    command: this.atualizarLogin
                }
                ,  {
                    label: 'Usuarios',
                    command: this.listarUsuario
                }
                ,  {
                    label: 'Sair',
                    command: this.logout
                }
            ],
            atualizar: false
        }
    },
    methods:{
         async atualizarUser(){
            this.$router.push('/atualizar')
        },
        async agendarConsulta(){
            this.$router.push('/agenda')
        },
        async listarUsuario(){
            this.$router.push("listarUsuario")
        },
            
        async atualizarLogin(){
            this.$router.push('/atualizarLogin')
        },
        async marketplace(){
            this.$router.push('/marketplace')
        },
        async exibirUser(){
            const logou = await userLogado()
            this.user = logou.login
            console.log(this.user);
            
        },
        toggle(event:any) {
            if (typeof this.$refs === 'object' && this.$refs !== null) {
        (this.$refs as any).menu.toggle(event);
    } else {
        // Lidar com o caso em que $refs não está definido ou é null
    }
        },
        async logout(){

const sair = await realizarLogout()
console.log(sair);
console.log(localStorage);

this.$router.push('/#')
},
    },
    mounted(){
        this.exibirUser();
    }
})
</script>
<style scoped>
.apresentacao-perfil{
    width: 100%;
    height: 6rem;
    background-color: #f37457;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 1000;
}

.btn-rota{
    width: 100%;
    background-color: #86abe2;
    border-radius: 8px;
    color: white;
    height: 3rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
.btn-rota:hover{
 background-color:#4c8de6!important ;
  color: white !important;
}
.p-menu-overlay {
    border-bottom: 20px solid blue;
}
.perfil{
    
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    height: 3rem;
    display: flex;
    align-items: center;
}
.p-menuitem {
    width: 200px;
}
.logo-titulo {
    display: flex;
    align-items: center;
    height: 6rem;
    width: 30%;
}
.logo {
    width:22%;
    margin-left: 2rem;

}
.link-rota {
    color: white;
    color: white;
    box-shadow: 9px 7px 6px white;
    font-size: 20px;
    width: 30%;
    text-align: center;
    border: 2px solid;
    border-radius: 9px;
}

.rota-zeus {
    color: black;
}

.rotas {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 4rem;
}

.campo-foto {
    display: flex;
    justify-content: center;
}



.foto-main {
    width: 30%;
    margin-bottom: 175px;
}

.crud {
    display: flex;
    margin-top: 18px;
}

.apresentacao {
    /* background-color: black;
    height: 6rem;
    display: flex;
    align-items: center;
    gap: 100px;
    margin-bottom: 20px; */
    width: 30%;
    background-color: black;
    height: 43.6rem;
    display: flex;
    align-items: center;
    gap: 100px;
    margin-bottom: 20px;

}

.bem-vindo {

    display: flex;
    align-items: center;
    height: 6rem;
    margin-left: 26%;
    gap: 10px;
    margin-right: 1rem;
}

.foto-card {
    width: 10%;
}

.mensagem {
    font-size: 20px;
    color: black;
}

.apresentacao-card {
    border: 2px solid;
    border-radius: 2%;
    text-align: center;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.card-item {
    width: 20%;
    background-color: white;
    height: 20rem;
    box-shadow: 0px 0px 21px 4px aqua;

}

.titulo-logo {
    color: black;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    font-size: 30px;
    width: 40%;
    text-align: center;
    border: 2px solid;
    border-radius: 9px;
    padding: 0.5rem;
}



.apresentacao-itens {
    width: 60%;
}

.escolhas-principais {
    background-color: #D9D9D9;

    height: 40.4rem;
    width: 100%;
}

.escolhas {
    height: 40rem;
    width: 100%;
}

.cadastro {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    /* gap: 5%; */
    height: 40rem;
    background-color: white;
}

.cadastrar {
    background-color: white;
    border: 2px solid white;
    height: 2rem;
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: center;
}

.visualizar {
    background-color: white;
    border: 2px solid white;
    height: 2rem;
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: center;
}

.itens {
    background-color: white;
    box-shadow: 10px 10px 10px #5CB9EE;
    width: 90%;
    margin-bottom: 22px;
    text-align: center;
}

.selecionar-item {
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

.titulo-cadastro {
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

/* @media screen and (min-width: 1000px) {
.bem-vindo{
    display: flex;
    align-items: center;
    height: 6rem;
    margin-left: 34%;
    gap: 10px;
}.apresentacao-perfil{
    width: 58%;
    height: 6rem;
    background-color: white;
    box-shadow: 9px 7px 6px black;
    display: flex;
    position: absolute;
    margin-left: 20%;
}
} */


/* Estilos para tela pequena */
@media screen and (max-width: 767px) {
    .apresentacao {
        flex-direction: column;
        height: auto;
        margin-bottom: 0px;
        
    }
    .apresentacao-perfil{

        width: 100%;
        margin-left: 0px;
    }

    .logo-titulo {
    
        height: auto;
        width: 100%;
        
    }

    .titulo-logo {
        width: 50%;
    }

    .rotas {
        width: auto;
        height: auto;
    }

    .logo {
        display: none;
    }

    .bem-vindo {
        width: 100%;
        height: auto;
        height: auto;
        justify-content: center;
        margin-left: 4%;

    }
}
@media screen and (max-width: 900px) {
    .titulo-logo{
        width: 50%;
    }
}

</style>
