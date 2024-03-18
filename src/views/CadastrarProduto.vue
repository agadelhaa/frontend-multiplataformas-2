<template>
    <div class="escolhas-principais">
        <div class="apresentacao-cadastro">
            <div class="escolhas">
                <h2 class="titulo-cadastro">
                    O que você deseja cadastrar ?
                </h2>
                <div class="cadastro">
                    <ul class="opcoes-cadastro">
                        <li v-for="(produtos, index) in produto" :key="index" class="opcoes">
                            {{ produtos }}
                            <button @click="exibirProduto(produtos)">POPOP</button>
                        </li>
                    </ul>
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
            produtoSelecionado: ''
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
.escolhas{
    background-color: red;
    height: 4rem;
    justify-content: center;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
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

</style>
