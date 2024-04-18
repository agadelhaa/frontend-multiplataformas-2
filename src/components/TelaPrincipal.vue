<template>
    <BarraMenu />


   <BarraPerfil />
   <VisualizarRacao />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraMenu from './BarraMenu.vue';
import VisualizarRacao from './VisualizarRacao.vue';
import BarraPerfil from './BarraPerfil.vue';
import CadastroRacao from './CadastroRacao.vue';
import AtualizarRacao from './AtualizarRacao.vue'
import Dropdown from 'primevue/dropdown';

export default defineComponent({
    components: {
        BarraMenu,
        BarraPerfil,
        VisualizarRacao
    },
    emits: ['aoTemaAlterado'],
    data() {
        return {
            selectedCity: null,
            item: [
                'RAÇÃO',
                'PRODUTO DE LIMPEZA',
                'VETERINARIO',
                'BRINQUEDOS',


            ],
            itemSelcionado: '',
            exibirModal: false,
            modoEscuro: false
        };

    },
    methods: {
        exibirItem(item: string) {
            this.itemSelcionado = item;
            if (item === 'RAÇÃO') {
                this.exibirModal = true
            }
        },
        exibirCadastro() {
            this.exibirModal = true
        },

    },
    computed: {
        textoBotao() {
            if (this.modoEscuro) {
                return 'Desativar modo escuro'
            }
            return 'Ativar modo escuro'
        }
    }
});
</script>
<style scoped>
.campo-foto {
    display: flex;
    justify-content: center;
    margin-bottom: 78px;
}

.foto-card {
    width: 10%;
}


@media screen and (max-width: 767px) {

    .campo-foto {
        display: none;
    }
}
</style>