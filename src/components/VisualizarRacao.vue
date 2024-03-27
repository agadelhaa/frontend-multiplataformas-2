<template>
    <BarraMenu />
    <!-- <div class="lista">
      <div class="card tabela">
        <DataTable :value="item" scrollable scrollHeight="400px" style="padding: 0px 20px;">
          <Column field="id" header="ID" style="min-width: 100px">
          </Column>
          <Column field="nome" header="Nome" style="min-width: 200px">
            <template #body="{ data: rowData }">
              <input v-model="rowData.nome" />
            </template>
          </Column>
          <Column field="kqQuantidade" header="Quilos" style="min-width: 200px">
            <template #body="{ data: rowData }">
              <input v-model="rowData.kqQuantidade" />
            </template>
          </Column>
          <Column field="valorPago" header="Valor" style="min-width: 200px">
            <template #body="{ data: rowData }">
              <input v-model="rowData.valorPago" />
            </template>
          </Column>
          <Column field="dataCompra" header="Data" style="min-width: 200px" :body="formatDateColumn">
            <template #body="{ data: rowData }">
              <input v-model="rowData.dataCompra" />
            </template>
          </Column>
          <Column header="Ações" style="min-width: 100px">
            <template #body="{ data: rowData }">
              <Checkbox v-model="rowData.selecionado" @change="adicionarItem(rowData.id)" />
            </template>
          </Column>
        </DataTable>
      </div>
      <div class="card">
        <DataTable :value="listaItensSelcionado" tableStyle="min-width: 50rem">
            <Column field="id" header="Code"></Column>
            <Column field="nome" header="Nome"></Column>
            <Column field="kqQuantidade" header="Quantidade (kg)"></Column>
        <Column field="valorPago" header="Valor"></Column>
        <Column field="data" header="Data"></Column>
        </DataTable>
    </div>
       

    </div> -->
    <div class="lista">
    
    <div class="card p-fluid tabela">
        <DataTable v-model:editingRows="editingRows" paginator :rows="10" 
        :value="item" editMode="row" 
        dataKey="id" @row-edit-save="onRowEditSave"
        style="padding: 0px 20px;"
        
        
        >
            <Column field="id" sortable header="Code" style="width: 20%;">
              
            </Column>
            <Column field="nome" header="Nome" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="kqQuantidade" header="Quantidade (kg)" style="width: 20%;">
                <template #editor="{ data, field }">
                    <InputNumber v-model="data[field]"  optionLabel="label" optionValue="value" placeholder="Select a Status"/>
                      
                   
                </template>

            </Column>
            <Column field="valorPago" header="Valor $" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputNumber v-model="data[field]" mode="currency" currency="BRL" locale="pt-BR" />
                </template>
                
            </Column>
            <Column field="dataCompra" header="Data" style="min-width: 200px" :body="formatDateColumn">
                <template #editor="{ data, field }">
                  
                    <InputMask id="basic" v-model="data[field]" placeholder="99/99/9999" mask="99/99/9999" slotChar="mm/dd/yyyy" />

                </template>
          </Column>
            <Column header="Atualizar" :rowEditor="true" style="width: 10%;text-align: center; min-width: 8rem;" bodyStyle="text-align:center">
            </Column>
            <Column header="Excluir" style="min-width: 20%;">
    <template #body="{ data }">
        <Button @click="excluirItem(data.id)"><i class="pi pi-trash" style="color: slateblue"></i></Button>
    </template>
</Column>
        </DataTable>
    </div>
    </div>
    

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ListarRacao from '../interface/ListarRacao';
  import { deleteItem, obterRacao } from '../http';
  import BarraMenu from './BarraMenu.vue';
  import { updateRacao } from '../http';
  import Checkbox from 'primevue/checkbox';
import AtualizarRacao from '@/interface/AtualizarRacao';
import { icon } from '@fortawesome/fontawesome-svg-core';
  
  
  export default defineComponent({
    name: "CadastroProduto",
    components: {
        BarraMenu

    },
    data() {
      return {
        item: [] as ListarRacao[],
            racao: {
                id: 0,
                nome: '',
                kqQuantidade: 0,
                valorPago: 0,
                data: new Date(),
            },
            products: null as null | any,
            editingRows: [],
          
      };
    },
    // mounted() {
    //     ProductService.getProductsMini().then((data: any) => (this.products = data));
    // },
    methods: {
        async onRowEditSave(event: any) {
          console.log("EVENTO: ",event);
          let data = event.newData as AtualizarRacao   
          console.log("atualizar dados ----->  ", data);          
          //chamar o metodo put de atualizar esses dados bem aqui    
          //re-renderiza a lista da tabela
          const salvar = await updateRacao(data)
          window.location.reload()
          console.log(salvar);
          
        },
        formatCurrenc(value:any) {
      if (typeof value !== 'number') {
        return value;
      }
      return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },

      async excluirItem(id: number){
        const excluir = await deleteItem(id) 
        window.location.reload()
        console.log(excluir);
        
      },
       
        formatCurrency(value: number | bigint) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        },
      async listarRacao() {
       
          const racoes = await obterRacao() as unknown as ListarRacao[];
          this.item = racoes.map(racao => ({ ...racao, selecionado: false }));
          console.log(racoes);
     
      },
      async salvarRacao() {
        const salvar = await updateRacao(this.racao)
        
            console.log(salvar);
           
     
            alert("ração salva")
      },
      formatDateColumn(data: Date) {
        // Converte a data do formato YYYY/MM/DD para DD/MM/YYYY antes de exibi-la
        //     const formattedDate = format(data, 'dd/MM/yyyy');
        //   return formattedDate;
      }
    },
    created() {
      this.listarRacao();
    }
  });
  </script>
  
  <style scoped>
  .lista {
    height: 30rem;
    display: flex;
    justify-content: center;
    margin-bottom: 37px;
  }
  
  .tabela {
    box-shadow: 0px 0px 21px 4px aqua;
    width: 90%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  </style>
  