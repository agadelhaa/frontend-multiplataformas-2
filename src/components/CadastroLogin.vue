<template>
  <div class="tela-cadastro">
    <div class="componentes-cadastros">
      <form @submit.prevent="realizarLogin" class="formulario">
        <InputText
          v-model="user.login"
          placeholder="Login"
          class="input-cadastro"
        />
        <InputText
          type="password"
          v-model="user.senha"
          placeholder="Senha"
          class="input-cadastro"
          :feedback="false"
        />
        <div class="login">
          <Button type="submit" class="enviar">Login</Button>
        </div>
      </form>
    </div>
  </div>
  <div></div>
</template>
<script lang="ts">
import Dialog from 'primevue/dialog';
import { defineComponent } from 'vue';
import CadastrarUsuario from './CadastrarUsuario.vue';
import EsqueceuSenha from './EsqueceuSenha.vue';
import { gerarLogin } from '@/http';
import Password from 'primevue/password';
import BarraMenu from './BarraMenu.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'CadastroLogin',
  components: {},

  data() {
    return {
      visible: false,
      user: {
        login: '',
        senha: '',
        token: '',
      },
      logado: '',
    };
  },
  methods: {
    async realizarLogin() {
      let mensagem = '';
      switch (true) {
        case this.user.senha === null:
          mensagem = 'Senha incorreta';
          break;

        case this.user.login === null:
          mensagem = 'Login nÃ£o encontrado';
          break;

        default:
          try {
            const logar = await gerarLogin(this.user);
            // const { token, userLogado } = await gerarLogin(this.user);
            mensagem = 'Login realizado com sucesso!';
            this.$router.push('/marketplace');

            console.log(this.user.login);
          } catch (error) {
            mensagem =
              'Aconteceu um erro ao realizar o login, verifique sua senha e seu login';
          }
          break;
      }

      alert(mensagem);
    },
    cancelarCadastro() {
      this.visible = false;
    },
    camposPreenchidos() {
      return this.user.login && this.user.senha;
    },
  },
});
</script>
<style scoped>
.login {
  margin-left: 90px;
}
.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  justify-content: center;
  height: 10rem;
  margin-top: 20px;
  align-items: center;
}

.input-cadastro {
  box-shadow: 0px 2px 4px rgba(92, 185, 238, 0.4);
  border-radius: 6px;
  height: 3rem;
  width: 100%;
  outline: none;
  padding: 0 4px;
}
.componentes-cadastros {
  display: flex;
  align-items: center;
}
.tela-cadastro {
  align-items: center;
  padding: 8% 10%;
  display: flex;
  justify-content: center;
}
.enviar {
  background-color: #86abe2;
  width: 100px;
  color: white;
  display: flex;
  justify-content: center;
  height: 2rem;
  border: 2px solid white;
  border-radius: 8px;
  font-weight: bold;
}
.enviar:hover {
  background-color:#4c8de6!important ;
  color: white !important;
  font-weight: bold;
}
@media screen and (max-width: 576px) {
  .componentes-cadastros {
    width: 90%;
  }
  .login {
    margin-left: 0;
    margin-right: 10px;
  }
}
</style>
