<template>
    <div class="escolhas-principais">
        <div class="apresentacao-cadastro">
            <div class="escolhas">
                <h2 class="titulo-cadastro">
                    O que você deseja cadastrar ?
                </h2>
                <div class="cadastro">
                    <DataTable :value="value" stripedRows tableStyle="min-width: 41rem">
            <div style="background-color: blue;">
              <Column field="nomeOcorrencia" header="Ocorrência" sortable
                style="width: 90%; padding: 1% 4% ; font-size: 15px;"></Column>
              <Column>
              </Column>
            </div>
          </DataTable>
                </div>
                
            </div>
            <div class="cadastrar">
                        <CadastroRacao v-if="produtoSelecionado === 'RAÇÃO'" />
                    </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CadastroRacao from '@/components/CadastroRacao.vue';

export default defineComponent({
    name: "CadastroProduto",
    components: {
        CadastroRacao
    },

    data() {
        return {
            produto: [
                'RAÇÃO',
                'VETERINARIO'
            ],
            produtoSelecionado: '',
            value: null
        };
    },
    methods: {
        exibirProduto(produto: string) {
            this.produtoSelecionado = produto;
        },
     
    }
})
</script>

<style scoped>
.apresentacao-cadastro{
   
}
.escolhas{
 
    height: 4rem;
    justify-content: center;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #5CB9EE;
}
.cadastro{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5%;
    height: 5rem;
}
.escolhas-principais{
    background-color: #D9D9D9;
    margin: 5% 7%;
    height: 30rem;
    width: 80%;
}

.opcoes-cadastro{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: baseline;
    height: 2rem;
    gap: 10%;   

}
.opcoes{
    background-color: white;
    border: 2px solid white;
    border-radius: 5px;
    width: 130px;
    text-align: center;
    cursor: pointer;
}
.cadastrar{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16rem;
}

</style>
