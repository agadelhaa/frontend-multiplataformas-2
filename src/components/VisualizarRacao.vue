<template>
<BarraMenu />
<div class="lista">
    <div class="card tabela">
        
            <DataTable :value="item" scrollable scrollHeight="400px" style="padding: 0px 20px;" >
                <Column field="id" header="ID" style="min-width: 100px"></Column>
                <Column field="nome" header="Nome" style="min-width: 200px"></Column>
                <Column field="kqQuantidade" header="Quilos" style="min-width: 200px"></Column>
                <Column field="valorPago" header="Valor" style="min-width: 200px"></Column>
                <Column field="data" header="Data" style="min-width: 200px" :body="formatDateColumn"></Column>
            </DataTable>
            
    </div>
</div>        
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ListarRacao from '../interface/ListarRacao';
import {obterRacao} from '../http'
import BarraMenu from './BarraMenu.vue';
import TelaPrincipal from './TelaPrincipal.vue';
export default defineComponent({

        name: "CadastroProduto",
        // props: {
        //     itens: {
        //         type: Array as () => ListarRacao[],
        //         required: true
        //     }
        // },
        components:{
            BarraMenu
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
})
</script>
<style scoped>
.lista{
    height: 30rem;
    display: flex;
    justify-content: center; 
    margin-bottom: 37px;
}
.tabela{
    box-shadow: 0px 0px 21px 4px aqua;
}

</style>