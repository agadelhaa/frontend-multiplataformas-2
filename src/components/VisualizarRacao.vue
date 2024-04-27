<template>
  <!-- <BarraMenu /> -->
  <div class="lista">
    <div v-if="item.length === 0" class="lista-vazia">
      <h2 class="titulo-lista-vazia">
        Você ainda não tem nenhuma ração cadastrada!
      </h2>
    </div>
    <div v-else class="card p-fluid tabela">
      <DataTable v-model:editingRows="editingRows" paginator :rows="10" :value="item" editMode="row" dataKey="id"
        @row-edit-save="onRowEditSave" style="padding: 10px 20px; overflow-x: auto;">
        <Column field="nome" sortable header="Nome" style="width: 20%; min-width: 100px;">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" />
          </template>
        </Column>
        <Column field="kgQuantidade" header="Quantidade (kg)" style="width: 20%; min-width: 100px;">
          <template #editor="{ data, field }">
            <InputNumber v-model="data[field]" optionLabel="label" optionValue="value" />
          </template>
        </Column>
        <Column field="valorPago" header="Valor R$" style="width: 20%; min-width: 100px;">
          <template #editor="{ data, field }">
            <InputNumber v-model="data[field]" mode="currency" currency="BRL" locale="pt-BR" />
          </template>
        </Column>
        <Column field="dataCompra" header="Data" style="min-width: 200px" :body="formatDateColumn">
          <template #editor="{ data, field }">
            <InputMask id="basic" v-model="data[field]" placeholder="99/99/9999" mask="99/99/9999"
              slotChar="dd/mm/yyyy" />
          </template>
        </Column>
        <Column header="Atualizar" :rowEditor="true" style="width: 10%; text-align: center; display:flex; min-width: 8rem;"
          bodyStyle="text-align: center;">
        </Column>
        <Column header="Excluir" style="min-width: 20%; ">
          <template #body="{ data }">
            <div class="card flex justify-content-center">
              <Button @click="abrirDialog(data)"><i class="pi pi-trash" style="color: slateblue"></i></Button>
              <Dialog v-model:visible="visible" modal header="Tem certeza que deseja excluir o item ?"
                class="dialog-cancelar" :style="{ width: '30rem;', height: '10rem;', color: 'red' }">
                <div class="flex justify-content-end gap-2 cancela-item">
                  <div class="excluir">
                    <Button @click="cancelarDelete">Excluir</Button>
                  </div>
                  <Button type="button" label="Cancelar" @click="cancelDelete" class="cancelar"></Button>
                </div>
              </Dialog>
            </div>
          </template>
        </Column>
            

      </DataTable>
      <p class="valor-gasto" >Valor gasto: {{ valorTotal }}</p>
      
    </div>
   
  </div>

  <div class="card-container">
        <div v-for="(item, index) in item" :key="index" class="card">
          <div class="card-header">
            <h3 class="card-title">{{ item.nome }}</h3>
            <span class="card-subtitle">Quantidade: {{ item.kgQuantidade }}kg</span>
          </div>
          <div class="card-body">
            <p><strong>Valor:</strong> R$ {{ item.valorPago }}</p>
            <p><strong>Data de Compra:</strong> {{ formatDateColumn(item.dataCompra) }}</p>
          </div>
          <div class="card-footer">
            <button @click="abrirDialog(item)" class="btn-excluir">
              <i class="pi pi-trash"></i> Excluir
            </button>
          </div>
          </div>
          </div>
  
 

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListarRacao from '../interface/ListarRacao';
import { deleteItem, obterRacao } from '../http';
import BarraMenu from './BarraMenu.vue';
import { updateRacao } from '../http';
import AtualizarRacao from '@/interface/AtualizarRacao';
import Rodape from './Rodape.vue';


export default defineComponent({
  name: "CadastroProduto",
  components: {
    
 

  },
  data() {
    return {
      item: [] as ListarRacao[],
      racao: {
        id: 0,
        nome: '',
        kgQuantidade: 0,
        valorPago: 0,
        dataCompra: new Date(),
      },
      visible: false,
      products: null as null | any,
      editingRows: [],
      excluirDialogVisible: false,
      selectedRowData: null as null | ListarRacao,
      valorTotal:'0'

    };
  },

  methods: {
    async abrirDialog(rowData: ListarRacao) {
      this.selectedRowData = rowData;
      this.visible = true;
    },
    async cancelarDelete() {
      if (this.selectedRowData) {
        const id = this.selectedRowData.id;
        await deleteItem(id);
        window.location.reload();
      }
    },
    valorGasto(){
      let valorTotal = 0;
  for (const item of this.item) {
    valorTotal += item.valorPago;
  }
  this.valorTotal = valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  
    },
    async calcula(event: any){
      this.valorGasto();
    },
    cancelDelete() {
      this.selectedRowData = null;
      this.visible = false;
    },
    async excluirItem(id: number) {
      debugger;

      console.log("id", id);

      const excluir = await deleteItem(id)

    },
    async onRowEditSave(event: any) {
      console.log("EVENTO: ", event);
      let data = event.newData as AtualizarRacao;
      let mensagem = '';
    
            

     
     
          try {
            const salvar = await updateRacao(data);
            window.location.reload();
            mensagem = 'Ração salva!'
            
            console.log();

          }
          catch (error) {
            mensagem = 'Verifique sua data'
          }
          alert(mensagem)
        

      



    },


    formatCurrency(value: number | bigint) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    },
    async listarRacao() {
      const racoes = await obterRacao() as unknown as ListarRacao[];
  this.item = racoes.map(racao => ({ ...racao, selecionado: false }));
  this.valorGasto();

    },
    formatDateColumn(data: Date) {
      // Converte a data do formato YYYY/MM/DD para DD/MM/YYYY antes de exibi-la
      //     const formattedDate = format(data, 'dd/MM/yyyy');
      //   return formattedDate;
    }


  },
  created() {
    this.listarRacao();
  },

});
</script>

        <style scoped>
        .lista {
          height: 30rem;
          display: flex;
          /* justify-content: center; */
          margin-bottom: 21px;
          margin-left: 23%;
          margin-top: 8%;
          width: 108%;
          position: absolute;
          /* display: flex;
          gap: 10%;
          flex-direction: column; */
        }

        .lista-vazia{
          width: 30%;
          display: flex;
          height: 2rem;
          justify-content: center;
          align-items: center;
          margin: 12% 16%;
        }
        .titulo-lista-vazia{
          color: grey;
          font-size: 24px;
        }

        .dialog-cancelar {
          background-color: red
        }

        .tabela {
          box-shadow: 0px 0px 21px 4px aqua;
          width: 70%;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .cancela-item {
          display: flex;
          gap: 15px;
          padding: 0px 5px;
          justify-content: center;
        }

        .excluir {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          background-color: white;
          width: 100px;
          color: red;
          height: 2rem;
          border: 2px solid white;
          border-radius: 8px;

        }
        .valor-gasto{
          padding: 2% 2%;
        }

        .excluir:hover {
          background-color: red;
          color: white;
        }

        .card-container{
          display: none;
        }

        .cancelar {
          background-color: white;
          width: 100px;
          color: #5CB9EE;
          height: 2rem;
          border: 2px solid white;
          border-radius: 8px;
        }

        .cancelar:hover {
          background-color: #5CB9EE;
          color: white;
        }

        
.card-container {
  display:none;
  flex-wrap: wrap;
  gap: 20px;
}


.card-header {
  background-color: #007bff;
  color: white;
  padding: 10px;
}

.card-title {
  margin: 0;
}

.card-subtitle {
  font-size: 14px;
}

.card-body {
  padding: 10px;
}

.card-footer {
  padding: 10px;
  text-align: center;
}

        /* @media screen and (max-width: 768px) {
          .tabela {
            width: 90%;
          }
        }

        @media screen and (max-width: 576px) {
          .lista {
            height: auto;
            width: auto;
          }

          .tabela {
            width: 100%;
            margin-top: 20px;
          }
        } */
        @media screen and (max-width: 1200px) {
  .tabela {
    width: 100%;
        margin-left: 6%;
  }
  .lista{
    margin-top: 12%;
    width: 78%;
    justify-content: center;
  }
}

@media screen and (max-width: 1200px) {
  .lista{
    margin-top: 14%;
        /* justify-content: center; */
        margin-left: 20%;
  }
}
/* 
@media screen and (max-width: 992px) {
  .tabela {
    width: 90%;
  }
} */
/* @media screen and (max-width: 700px) {
  .lista{
    margin-left: 24%;
    width: 70%;
  }
} */

@media screen and (max-width: 768px) {
  .lista {
    align-items: center;
        width: 60%;
        margin-left: 30%;
        
  }

  .tabela {
    width: 100%;
    margin-top: 20px;
  }
}

@media screen and (max-width: 576px) {
  .lista {
    margin-left: 3%;
        margin-top: 16%;
        width: 90%;
  }
  .card-container{
    display: none;
        height: 24rem;
        margin-top: 30%;
        margin-left: 4%;
        overflow-x: hidden;
        overflow-y: auto;
        align-items: center;
        width: 40%;
        }
}

        </style>