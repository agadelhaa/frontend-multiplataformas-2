<template>
    <main class="columns is-gapless">
   <div class="column is-one-quarter">
 <TelaPrincipal/>
 <CadastroRacao />
 <CadastrarProduto />

 </div>
 <div class="column is-three-quarter">
  <router-view ></router-view>

 </div>
 </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TelaPrincipal from './components/TelaPrincipal.vue'
import CadastroRacao from './components/CadastroRacao.vue'
import CadastrarProduto from './views/CadastrarProduto.vue';
export default defineComponent({
  components:{
    TelaPrincipal,
    CadastroRacao,
    CadastrarProduto
  

  }  
});
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
