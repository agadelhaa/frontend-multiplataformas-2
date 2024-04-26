    <template>
    <BarraMenu />

    <div class="componente">
    <div class="apresentacao">
        <div class="conteudo-apresentacao">
        <h2 class="titulo-componente">
            Aqui você pode atualizar suas informações!
        </h2>
        <div >
        <router-link to="/" class="rotas" >
            Tela principal
        </router-link>
        </div>
        </div>
        </div>
        
          <div class="tela-cadastro-usuario">
            <h2 class="titulo-update-login">
                        Atualizar seu login ou senha!
                    </h2>
          <div class="cadastro-componente-1">
                    <div class="componente-cadastro-1">
                        <!-- <label for="nome-produto" class="campo-label">Nome</label> -->
                        <InputText v-model="usuarioAtualizado.nome" type="text" placeholder="Nome" class="input-cadastros"/>
                    </div>
                    <div class="componente-cadastro-2">
                        <!-- <label for="" class="campo-label">Idade</label> -->
                        <InputNumber v-model="usuarioAtualizado.idade" invalid mode="decimal" :min="0" class="input-cadastros" placeholder="Idade"
                         />
                    </div>
                    
                
                </div>
                <div class="cadastro-componente-2">
                    
                    <div class="componente-cadastro-2">
                        <InputText  v-model="usuarioAtualizado.email" type="text" class="input-cadastros" placeholder="Email"/>
                    </div>
                    <div class="componente-cadastro-3">
                        <InputMask id="phone" v-model="usuarioAtualizado.telefone" mask="(99) 99999-9999" placeholder="(99) 99999-9999" class="input-cadastros" />
                    </div>
                    
                </div>
                
                <div class="cadastro-componente-3">
                    <div class="flex align-items-center gap-3 botoes-usuario">
                    <Button label="Cancelar" @click="cancelarCadastro()" text
                        class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10 cancelar"></Button>
                    <Button label="Salvar" @click="atualizarUsuario()"
                        class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10 enviar" ></Button>
                </div>
                </div>
                
          </div>
          </div>
    </template>
    <script lang="ts">
    import { updateUsuario,
verificarUsuarioLogado } from '@/http';
    import Dialog from 'primevue/dialog';
    import { defineComponent } from 'vue';
import BarraMenu from './BarraMenu.vue';
import TelaPrincipal from './TelaPrincipal.vue';
import { gerarLogin } from '@/http';
    export default defineComponent({
    components:{
     
    },
    data(){
    return{
        user:{
            login: '',
            senha:'',
            id: 0
        },
        usuario:{
            nome: '',
    idade: 0,
    email: '',
    cpf: '',
    telefone: '',
    user:{
        login: '',
        senha: ''
    }
        },
        usuarioAtualizado:{
            nome:'',
            idade: 0,
            email: '',
            telefone: '',
            id: 0
        },
        opcaoSelecionada: null,
        opcoes:[
            {
                item:'Login'
            },
            {
                item:'Atualizar dados cadastrais'
            }
        ]
    }
    },
    methods:{
        async realizarAtualizacao(){
            
           
            await verificarUsuarioLogado(this.user)
        
    
    },
    cancelarCadastro(){
        this.$router.push('/')
    },
    async realizarLogin(){
     
     let mensagem = '';
     switch(true){
         case !this.camposPreenchidos():
          mensagem = 'Por favor, preencha todos os campos obrigatórios';
          break;
         case this.user.senha === null:
             mensagem = 'Senha incorreta';
             break;
         
         case this.user.login === null:
             mensagem = 'Login não encontrado'
             break;
             default:{
                     try{
                        //   const logar = await gerarLogin(this.user)
                         
                         // const { token, userLogado } = await gerarLogin(this.user);
                         
             this.$router.push('/')
                          console.log(this.user.login);
                          
                        }
                        catch(error){
                         mensagem = 'Aconteceu um erro ao realizar o login, verifique sua senha e seu login'
                        }
                     }
                     alert(mensagem)
         }
 },
 async atualizarUsuario(){
    const usuarioAtulizado = await updateUsuario(this.usuarioAtualizado)
    console.log(usuarioAtulizado, 'deu bom');
    console.log(this.usuarioAtualizado);
    
    
 },

 camposPreenchidos(){
     return this.user.login && this.user.senha
 },

    }
    })
    </script>
    <style scoped>
    .rotas{
        background-color: white;
    display: flex;
    text-align: center;
    height: 3rem;
    justify-content: center;
    align-items: center;
    color: black;
    width: 80%;
    margin-left: 30px;
    border-radius: 8px;
    }
    .rotas:hover{
        background-color: #5CB9EE;
        color: white    ;
    }
    .cadastro {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    /* gap: 5%; */
    height: 40rem;
    background-color: white;
}

    .titulo-componente{
        color: white;
        font-size: 26px;
        box-sizing: border-box;
        text-align: center;
        padding: 0px 4px;

    }
    .conteudo-apresentacao{
        display: flex;
        flex-direction: column;
        gap: 20%;
    }
    .apresentacao {
    /* background-color: black;
    height: 6rem;
    display: flex;
    align-items: center;
    gap: 100px;
    margin-bottom: 20px; */
    width: 20%;
    background-color: black;
    height: 43.6rem;
    display: flex;
    align-items: center;
    

}
.componente{
    display: flex
}
    .alterar-credenciais{
        background-color: red;
    }
    .tela-cadastro{
    align-items: center;
    padding: 10% 10%;
    display: flex;
    flex-direction: column;
        

    }
    .tela-cadastro-usuario{
        align-items: center;
    padding: 16% 26%;
    display: flex;
    flex-direction: column;
   
    }
    .cadastro{

    background-color: aqua;
    text-align: center;
    width: 56rem;
    height: 24rem;
    background-color: white;
    border-radius: 21px;
    box-shadow: 0px 4px 9px black;

    }
    .componentes-cadastro{
    display: flex;
    align-items:center; 
    
    }
    .titulo-login{
    background-color: black;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: white;
    }

    .formulario{

    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    justify-content: center;
    height: 10rem;
    margin-top: 20px;
    align-items: center;
    }

    .input-cadastro{
    box-shadow: 0px 6px 9px #5CB9EE;
    border-radius: 6px;
    height: 3rem;   
    width: 70%;
    }
    .input-cadastros{
    box-shadow: 0px 6px 9px #5CB9EE;
    border-radius: 6px;
    height: 2rem;   
    width: 100%;
    background-color: white;
    }
    .cadastro-componente-1,.cadastro-componente-2,.cadastro-componente-3{
        display: flex;
    /* flex-direction: column; */
    /* margin-bottom: 10px; */
    width: 100%;
    gap: 10px;
    height: 2rem;
    padding: 22px 0px;

    
    }
    .cadastro-componente-login{
        display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 100%;
    gap: 10px;
    height: 10rem;
    padding: 20px 10px;
    
    
    }

    .componente-cadastro-1,.componente-cadastro-2, .componente-cadastro-3{
    display: flex;
    gap:10px;
    }
    .separador{
    background-color: black;
    display: inline-block;
    height: 21rem;
    margin: 0px 1px 0px;
    width: 1px;
    vertical-align: middle;
    }
    .foto-login{
    width: 40%;
    height: 0%;
    }
    .botoes{
    display: flex;
    gap: 8px;
    }
    .botoes-usuario{
    display: flex;
    gap: 50%;
    margin-top: 10px;
    }
    .enviar {
    background-color: white;
    width: 100px;
    color: black;
    height: 2rem;
    border: 2px solid black;
    border-radius: 8px;
    }

    .cancelar {
    background-color: white;
    width: 100px;
    color: red;
    height: 2rem;
    border: 2px solid black;
    border-radius: 8px;
    }

    .enviar:hover {
    background-color: #5CB9EE;
    color: white;
    }

    .cancelar:hover {
    background-color: red;
    color: white;
    }
    </style>