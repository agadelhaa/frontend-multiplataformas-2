<template>
  <div class="tela-cadastro">
    <div class="cadastro">
      <div class="titulo-login">
        <h2 class="titulo">Faça o seu login!</h2>
      </div>
      <div class="componentes-cadastro">
        <form class="formulario">
          <CadastroLogin />
          <div class="acoes-cadastro">
            <EsqueceuSenha />
            <CadastrarUsuario />
          </div>
        </form>
        <span class="separador"> </span>
        <img src="../assets/homeImg.jpg" alt="" class="foto-login" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Dialog from 'primevue/dialog';
import { defineComponent } from 'vue';
import CadastrarUsuario from './CadastrarUsuario.vue';
import EsqueceuSenha from './EsqueceuSenha.vue';
import CadastroLogin from './CadastroLogin.vue';

export default defineComponent({
  components: {
    CadastrarUsuario,
    EsqueceuSenha,
    CadastroLogin,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    cancelarCadastro() {
      this.visible = false;
    },
  },
});
</script>
<style scoped>
.tela-cadastro {
  align-items: center;
  padding: 9% 10%;
  display: flex;
  justify-content: center;
}
.cadastro {
  background-color: aqua;
  text-align: center;
  width: 56rem;
  height: 26rem;
  background-color: white;
  border-radius: 21px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

}
.componentes-cadastro {
  display: flex;
  align-items: center;
}
.titulo-login {
  background-color: #f37457;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: white;

  border-top-left-radius: 21px;
  border-top-right-radius: 21px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  justify-content: center;
  height: 10rem;
  margin-top: 20px;
  align-items: center;
}

.input-cadastro {
  box-shadow: 0px 2px 4px rgba(92, 185, 238, 0.4);
  border-radius: 6px;
  height: 3rem;
  width: 70%;
}
.input-cadastros {
  box-shadow: 0px 2px 4px rgba(92, 185, 238, 0.4);
  border-radius: 6px;
  height: 2rem;
  width: 90%;
  background-color: white;
}

.separador {
  background-color: black;
  display: inline-block;
  height: 22rem;
  margin: 0px 30px 0px 0px;
  width: 1px;
  vertical-align: middle;
}
.foto-login {
  width: 40%;
  height: auto;
  object-fit: cover;
}
.acoes-cadastro {
  display: flex;
  gap: 20px;
  color: blue;
}
@media screen and (max-width: 576px) {
  .acoes-cadastro {
    font-size: 14px;
    gap: 10px;
  }
}
</style>
