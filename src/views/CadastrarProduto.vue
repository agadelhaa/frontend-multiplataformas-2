<template>
   
    <div class="apresentacao-cadastro">
        <h1 class="titulo-lista">
            
        </h1>
    </div>
    <div class="itens">
        
    </div>
      
    
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import IRacao from '@/interface/IRacao';
    import CadastroRacao from '@/components/CadastroRacao.vue';
    //import {format} from 'date-fns';
import ListarRacao from '@/interface/ListarRacao';
import { obterRacao } from '@/http';
    export default defineComponent({
        name: "CadastroProduto",
        // props: {
        //     itens: {
        //         type: Array as () => ListarRacao[],
        //         required: true
        //     }
        // },
        components:{

        },
        data(){
            return{
                item: [] as ListarRacao []
            }
        },
        methods: {
            async listarRacao(){
        try {
        const racoes = await obterRacao() as unknown as ListarRacao [];
        this.item = racoes;
        console.log(racoes);
        
        
    
    } catch (error) {
        console.error('Erro ao listar as rações:', error);
    }
        
      },
            formatDateColumn(data: Date) {
                // Converte a data do formato YYYY/MM/DD para DD/MM/YYYY antes de exibi-la
           //     const formattedDate = format(data, 'dd/MM/yyyy');
             //   return formattedDate;
            }
        },
        created(){
            this.listarRacao();
        }
    });
    </script>
    
    <style scoped>
    .titulo-lista{
        background-color: red;
    }
    .apresentacao-cadastro {
       
    }
    .itens{
        background-color: red
    }
    .card {
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    </style>
    