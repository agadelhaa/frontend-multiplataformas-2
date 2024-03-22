<template>
    <main class="principal">
        <div class="escolhas-principais">
            <div class="escolhas">
                <div class="cadastro">
                    <div class="apresentacao-itens">
                        <!-- <router-link to="/cadastrar" class="cadastrar">
                            <i class="fa-solid fa-cart-shopping"></i> Cadastrar Compras
                        </router-link>  
                        <div>
                            <router-link to="/visualizar" class="visualizar">
                                <i class="fa-solid fa-cart-shopping"></i> Visualizar Compras
                            </router-link>
                        </div> -->
                        <h1 class="titulo-cadastro">
                            Cadastre um novo item
                        </h1>
                        
                               <CadastroRacao />
                            
                       
                        </div>
                        <div class="class">
                     
                        </div>
                
                </div>
            
            </div>
        </div>
    </main>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
import CadastroRacao from './CadastroRacao.vue';
import Dropdown from 'primevue/dropdown';
export default defineComponent({
components:{
    CadastroRacao
},
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
            exibirModal: false
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
    }
}
});
</script>
<style scoped>
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
</style>