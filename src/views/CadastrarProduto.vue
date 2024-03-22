<template>
   
    <div class="apresentacao-cadastro">
        <h1 class="titulo-lista">
            Seus itens
        </h1>
    </div>
    
        <div class="card">
            <DataTable :value="item" scrollable scrollHeight="400px">
                <Column field="id" header="ID" style="min-width: 100px"></Column>
                <Column field="nome" header="Nome" style="min-width: 200px"></Column>
                <Column field="kqQuantidade" header="Quilos" style="min-width: 200px"></Column>
                <Column field="valorPago" header="Valor" style="min-width: 200px"></Column>
                <Column field="data" header="Data" style="min-width: 200px" :body="formatDateColumn"></Column>
            </DataTable>
        </div>
    
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import IRacao from '@/interface/IRacao';
    import { format } from 'date-fns';
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
                const formattedDate = format(data, 'dd/MM/yyyy');
                return formattedDate;
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
    .card {
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    </style>
    