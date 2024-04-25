<template>
    <main class="apresentacao-perfil">
             <div class="logo-titulo">
            <img src="../assets/logo-zeuus.png" alt="logo do zeus" class="logo">
            <h2 class="titulo-logo">
                <router-link to="/" class=" rota-zeus">
                    Zeus
                </router-link>
            </h2>
        </div>
        <div class="bem-vindo">
            <h2 class="mensagem">
               
        Bem-vindo, {{ user }}
      </h2>
      <span class="separador">
                   
                </span>
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


export default defineComponent({
    name:'BarraPerfil',
    components:{
 
    },
    data(){
        return{
            user: '',
            items: [
            {
                    label: 'Sair',
                    command: this.logout
                },{
                    label: 'Atualizar suas informações',
                    icon: 'pi pi-icon',
                    command: this.atualizarUser
                },{
                    label: 'Atualizar login',
                    icon: 'pi pi-icon',
                    command: this.atualizarLogin
                } 
            ],
            atualizar: false
        }
    },
    methods:{
         async atualizarUser(){
            this.$router.push('/atualizar')
        },
            
        async atualizarLogin(){
            this.$router.push('/atualizarLogin')
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

this.$router.push('/login')
},
    },
    mounted(){
        this.exibirUser();
    }
})
</script>
<style scoped>
.apresentacao-perfil{
    width: 80%;
    height: 6rem;
    background-color: white;
    box-shadow: 9px 7px 6px black;
    display: flex;
    position: absolute;
    margin-left: 20%;
}
.p-menu-overlay {
    border-bottom: 20px solid blue; /* Defina a cor e o tamanho desejado para a linha */
    /* Ou use box-shadow para um efeito de sombra */
    /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); */
}
.perfil{
    
    box-shadow: 9px 7px 6px black;
    height: 3rem;
    display: flex;
    align-items: center;
}
.p-menuitem {
    width: 200px; /* Defina o tamanho desejado para os itens */
}
.logo-titulo {
    display: flex;
    align-items: center;
    height: 6rem;
    width: 30%;
}
.logo {
    width: 46%;

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
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
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
    margin-left: 52%;
    gap: 10px;
}

.foto-card {
    width: 10%;
}

.mensagem {
    font-size: 20px;
    color: black;
}

.separador {
    background-color: black;
    display: inline-block;
    height: 5rem;
    margin: 10px 1px 0px;
    width: 1px;
    vertical-align: middle;
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
    box-shadow: 9px 7px 6px black;
    font-size: 30px;
    width: 36%;
    text-align: center;
    border: 2px solid;
    border-radius: 9px;
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

@media screen and (min-width: 768px) {
    .titulo-logo {
        width: 30%;
    }

    .logo {
        width: 50%;
    }
}

/* Estilos para tela pequena */
@media screen and (max-width: 767px) {
    .apresentacao {
        flex-direction: column;
        height: auto;
        margin-bottom: 0px;
    }

    .logo-titulo {
        flex-direction: column;
        margin-bottom: 20px;
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
        margin-top: 6px;
        margin-bottom: 5px;
        width: 50%;
    }

    .bem-vindo {
        width: auto;
        height: auto;

    }
}

</style>
