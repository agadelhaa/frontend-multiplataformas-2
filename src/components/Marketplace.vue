<template>
  <main class="t">
    <!-- Barra de Perfil -->
    <BarraPerfil />

    <!-- Card -->
    <div class="marketplace">
      <Card class="card" style="overflow: hidden">
        <template #header>
          <img alt="user header" src="../assets/limpeza.png" class="card-img" />
        </template>
        <template #title> <h3>Praça X</h3> </template>
        <template #content>
          <p>Tipo de cuidado: Limpeza geral</p>
          <p>Data: 17/05/2025</p>
          <p>Localização: Quadra</p>
        </template>
        <template #footer>
          <Button label="Quero me voluntariar" class="botao-voluntario" />
        </template>
      </Card>

      <Card class="card" style="overflow: hidden">
        <template #header>
          <img alt="user header" src="../assets/repair.png" class="card-img" />
        </template>
        <template #title> <h3>Praça Z</h3> </template>
        <template #content>
          <p>Tipo de cuidado: Reparo</p>
          <p>Data: 20/05/2025</p>
          <p>Localização: Parquinho</p>
        </template>
        <template #footer>
          <Button label="Quero me voluntariar" class="botao-voluntario" />
        </template>
      </Card>

      <Card class="card" style="overflow: hidden">
        <template #header>
          <img alt="user header" src="../assets/pintura.png" class="card-img" />
        </template>
        <template #title> <h3>Praça AB</h3> </template>
        <template #content>
          <p>Tipo de cuidado: Pintura</p>
          <p>Data: 21/05/2025</p>
          <p>Localização: Quadra de futebol</p>
        </template>
        <template #footer>
          <Button label="Quero me voluntariar" class="botao-voluntario" />
        </template>
      </Card>

       <Card class="card" style="overflow: hidden">
        <template #header>
          <img alt="user header" src="../assets/jardinagem.png" class="card-img" />
        </template>
        <template #title> <h3>Praça Y</h3> </template>
        <template #content>
          <p>Tipo de cuidado: Manutenção de jardinagem</p>
          <p>Data: 26/05/2025</p>
          <p>Localização: Canteiros</p>
        </template>
        <template #footer>
          <Button label="Quero me voluntariar" class="botao-voluntario" />
        </template>
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
  name: 'MarketplaceComponent',
  components: {
    BarraPerfil,
    Rodape,
  },
  data() {
    return {
      produtos: ['pet', 'auau', 'rex'],
    };
  },
});
</script>

<style scoped>
.t {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  box-sizing: border-box;
}

.marketplace {
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;
  align-items: start;
  justify-content: center;
  overflow-x: auto;
  overflow-y: auto;
  margin-top: 8%;
  padding: 6rem 2rem 2rem;
  box-sizing: border-box;
}

.card {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  align-items: center;
  border-radius: 16px;
  max-width: 100%;
  height: 16rem;
  border: 2px #3c8f7d	solid;
  gap: 1rem;
}

.card-img {
  width: 100%;
  height: 12rem; /* Altura fixa para as imagens */
  object-fit: cover; /* Faz com que a imagem cubra a área sem distorcer */
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-position: right;
}

.card h3 {
color: #f37457;
font-weight: bold;
}

.card .p-card-title {
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0;
}

.p-card-title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

.card .p-card-footer {
  margin-top: auto; /* Garante que o rodapé fique no final do card */
}

.botao-voluntario {
  background-color: #f37457; /* cor principal do projeto */
  height: 3rem;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  text-align: center;
}

.botao-voluntario:hover {
  background-color: #d65e44 !important;
  transform: scale(1.03);
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

.botoes {
  width: 50%;
  border: 2px solid;
  border-radius: 8px;
}

@media screen and (max-width: 1024px) {
  .marketplace {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 640px) {
  .marketplace {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
