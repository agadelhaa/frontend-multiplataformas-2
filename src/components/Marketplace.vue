<template>
    <main class="t">
        <!-- Barra de Perfil -->
        <BarraPerfil />

        <!-- Card -->
        <div class="marketplace">
            <Card class="card" style="overflow: hidden">
                <template #header>
                    <img alt="user header" src="../assets/banho.avif" class="card-img" />
                </template>
                <template #title>Banho e Tosa</template>
               
            </Card>

            <Card class="card" style="overflow: hidden">
                <template #header>
                    <img alt="user header" src="../assets/vacina.jpg" class="card-img" />
                </template>
                <template #title>Vacinas</template>
               
            </Card>

            <Card class="card" style="overflow: hidden">
                <template #header>
                    <img alt="user header" src="../assets/transferir.jpg" class="card-img" />
                </template>
                <template #title>Consultas</template>
               
            </Card>
        </div>

        <!-- Rodapé -->
        <Rodape />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraMenu from './BarraMenu.vue';
import BarraPerfil from './BarraPerfil.vue';
import Rodape from './Rodape.vue';

export default defineComponent({
    name: "MarketplaceComponent",
    components: {
        BarraPerfil,
        Rodape
    },
    data(){
        return{
        produtos: ['pet', 'auau',  'rex']
    }
}
})
</script>

<style scoped>
.t {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.marketplace {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 8%;
}

.card {
    width: 25rem; /* Tamanho fixo para os cards */
    height: 400px; /* Definindo altura fixa para os cards */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Garante que o conteúdo fique distribuído */
}

.card-img {
    width: 100%;
    height: 200px; /* Altura fixa para as imagens */
    object-fit: cover; /* Faz com que a imagem cubra a área sem distorcer */
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.card .p-card-title {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    margin: 0.5rem 0;
}

.p-card-title{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}

.card .p-card-footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: auto; /* Garante que o rodapé fique no final do card */
}

.flex {
    display: flex;
}

.gap-4 {
    gap: 1rem;
}

.botoes {
    width: 100%;
}

.botoes{
    width: 50%;
    border: 2px solid;
    border-radius: 8px;
}
</style>

