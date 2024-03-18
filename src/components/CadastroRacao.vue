<template>
    <div class="cadastro-racao">
        <div class="cadastro">
            <form @submit.prevent="salvarRacao" class="formulario">
            <InputText type="text" v-model="racao.nome"  placeholder="Nome"/>

            <Input type="number" v-model="racao.kqQuantidade" placeholder="Quilo" showButtons :min="0"/>
            <InputNumber v-model="racao.valorPago" showButtons mode="currency" currency="BRL" :min="0" />
            <Calendar v-model="racao.data" />
            <button type="submit">Salvar</button>
           
            </form>
          
        </div>
    </div>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import InputText from 'primevue/inputtext';


import Calendar from 'primevue/calendar';

import InputNumber from 'primevue/inputnumber';
import { cadastroRacao } from '@/http';
import IRacao from '@/interface/IRacao';


export default defineComponent({
    components:{
        InputText,
        Calendar,
        InputNumber
    },
    emits:[
        'SalvarRacao'
    ],
    data(){
        return{
            racao:{
            nome: '',
            kqQuantidade: 0,
            valorPago: 0,
            data: new Date (),
            }
            
        
        }
    },
    methods:{
       async salvarRacao(){
           const salvar = await cadastroRacao(this.racao)
            alert("ração salva")
        },

    },

    
  
})
</script>
<style scoped>
.cadastro{

    margin: 4% 2%;
    display: flex;
    align-items: center;
}
.cadastro-racao{
 
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.formulario{
     
        display: flex;
    /* flex-direction: column; */
    height: 4rem;
    gap: 5px;
    align-items: center;
    /* justify-content: center; */
    /* column-count: 2; */
    padding: 4px;
}
</style>