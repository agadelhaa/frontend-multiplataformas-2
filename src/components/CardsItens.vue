<template>
    <BarraMenu />
    <div class="cards">
        <div v-for="item in itens" :key="item" class="card-item">
            <div class="apresentacao-card">
                <h2 class="titulo-card">
                    {{ item }}
                </h2>

            </div>
            <img src="../assets/ração.png" alt="">
            <div class="crud">
                <CadastroRacao class="cars-itens" />

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import CadastroRacao from './CadastroRacao.vue';
import AtualizarRacao from './AtualizarRacao.vue';
import BarraMenu from './BarraMenu.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CardsItens',
    components: {
        CadastroRacao,

        BarraMenu
    },
    data() {
        return {
            itens: ['RAÇÃO',
            ]
        }
    }

})
</script>
<style scoped>
.card-item {
    width: 20%;
    background-color: white;
    height: 20rem;
    box-shadow: 0px 0px 21px 4px aqua;

}

.apresentacao-card {
    border: 2px solid;
    border-radius: 2%;
    text-align: center;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.cards {
    display: flex;
    justify-content: center;
    margin: 53px 0px;
    height: 26rem;
}

.crud {
    display: flex;
    margin-top: 18px;
}

.crud:hover {
    background-color: aqua;
    color: white;
}


@media screen and (max-width: 767px) {

    .card-item {
        width: 50%;
        height: 14rem;
    }
}
</style>