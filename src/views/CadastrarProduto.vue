<template>
    <div class="escolhas-principais">
        <div class="apresentacao-cadastro">
       <div class="escolhas">
        <h2 class="titulo-cadastro">
    O que você deseja cadastrar ?
   </h2>
   <div class="cadastro">
            <ul>
                <li v-for="(produtos, index) in produto" :key="index">
                {{ produtos }}
                </li>
            </ul>
         </div>
   </div>
        

        </div>
        </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Menubar from 'primevue/menubar';

export default defineComponent({
    name:"CadastroProduto",

    data(){
        return {
            produto: [
                'RAÇÃO',
                'VETERINARIO'
                
            ]
        };
    }
})
</script>
<style scoped>
.escolhas{
    background-color: red;
    height: 4rem;
    justify-content: center;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;

}
.cadastro{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5%;
    height: 5rem;
}
.escolhas-principais{
    background-color: #D9D9D9;
    margin: 5% 7%;
    height: 30rem;
    width: 80%;
}
.apresentacao-cadastro{
    background-color: green;
}
</style>