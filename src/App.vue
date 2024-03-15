<template>
    <main class="columns is-gapless">
   <div class="column is-one-quarter">
 <TelaPrincipal/>
 </div>
 <div class="column is-three-quarter">
  <router-view ></router-view>

 </div>
 </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TelaPrincipal from './components/TelaPrincipal.vue'

export default defineComponent({
  components:{
    TelaPrincipal

  }  
});
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
