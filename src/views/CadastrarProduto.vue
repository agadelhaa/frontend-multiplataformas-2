<template>
    <div class="escolhas-principais">
        <div class="apresentacao-cadastro">
            <h1 class="titulo-lista">
                Seus itens
            </h1>
            <Button @click="listarRacao">Listar Rações</Button>
            <div class="card-lista">
                <div class="cards-container">
                    <div v-for="(item, index) in itens" :key="index" class="card-item">
                        <div class="card">
                            <div class="card-header">
                              {{ item.nome }}
                            </div>
                            <div class="card-body">
                                <p><strong>ID:</strong> {{ item.id }}</p>
                               
                                <p><strong>Quantidade:</strong> {{ item.kqQuantidade }}</p>
                                <p><strong>Valor:</strong> {{ item.valorPago }}</p>
                                <p><strong>Data:</strong> {{ item.data }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CadastroRacao from '@/components/CadastroRacao.vue';
import IRacao from '@/interface/IRacao';
import { obterRacao } from '@/http';
import ListarRacao from '@/interface/ListarRacao';

export default defineComponent({
    name: "CadastroProduto",
    components: {
    },

    data() {
        return {
           itens: [] as ListarRacao []
        };
    },
    methods: {
      async listarRacao(){
        try {
        const racoes = await obterRacao() as unknown as ListarRacao [];
        this.itens = racoes;
    } catch (error) {
        console.error('Erro ao listar as rações:', error);
    }
        
      }
    },
    created(){
        this.listarRacao()
    }
})
</script>

<style scoped>
.apresentacao-cadastro {
   
}
.card-lista {
    background-color: #D9D9D9;
    margin-top: 20px;
    padding: 10px;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background: red;
    height: 35rem;
    overflow-x: hidden;
    overflow-y: auto;
}

.card-item {
    width: calc(33.33% - 20px); /* Defina o tamanho do card aqui */
}

.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
    padding: 10px;
    background-color: #5CB9EE;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.card-body {
    padding: 10px;
    height: 10rem;
}
</style>
