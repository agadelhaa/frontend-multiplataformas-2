<template>
    <main>
<div class="inicio">
  <router-view></router-view>
  <Rodape />
</div>


 </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Rodape from './components/Rodape.vue'


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
body{
  font-family:'Krona-one,sans-serif';
}
</style>
