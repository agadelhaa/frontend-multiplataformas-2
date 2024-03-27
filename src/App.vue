<template>
    <main>
<div class="inicio">
  <router-view></router-view>

</div>


 </main>
<Rodape />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TelaPrincipal from './components/TelaPrincipal.vue'
import CadastroRacao from './components/CadastroRacao.vue'
import CadastrarProduto from './views/CadastrarProduto.vue'
import Rodape from './components/Rodape.vue'
import VisualizarRacao from './components/VisualizarRacao.vue';
import CardsItens from './components/CardsItens.vue'

export default defineComponent({
  components:{
    
    Rodape,

    
 

  },

    
});
</script>

<style>
@import 'assets/blue-saga.css';
@import 'primeicons/primeicons.css';
*{
  padding: 0;
  margin: 0;
}


</style>
