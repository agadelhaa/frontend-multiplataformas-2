<template>
    <div class="card flex justify-content-center" style="background-color: black; height: 3rem; width: 18%;">
        <Button label="Atualizar" icon="pi pi-sync" @click="visible = true" class="cadastro" />
        <Dialog
    v-model:visible="visible"
    modal
    :pt="{
        root: 'border-none',
        mask: {
            style: 'backdrop-filter: blur(2px)'
        }
    }"
    class="center-dialog"
>
            <template #container="">
                <div class="flex flex-column px-5 py-5 gap-4" style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--primary-400), var(--primary-700))" :style="'background-color: black'">
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                        <path
                            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                            fill="var(--primary-700)"
                        />
                        <path
                            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                            fill="var(--primary-200)"
                        />
                    </svg>
                    <div class="inline-flex flex-column gap-2">
                        <div class="cadastro-componente-1">
                <div class="componente-cadastro-1">           
                <label for="" class="campo-label">ID</label>
                <InputNumber v-model="racao.id " :min="1" class="input-componente" />              
                </div>
                <div class="componente-cadastro-1">
            <label for="nome-produto" class="campo-label">Nome do produto <i class="pi pi-pencil" style="font-size: 1rem"></i></label>
                <InputText type="text" v-model="racao.nome"  placeholder="Nome" class="input-componente" />
            </div>
            <div class="componente-cadastro-2"> 
                <label for="" class="campo-label">Quantidade (Kg)</label>
                <InputNumber v-model="racao.kqQuantidade"  :min="0" class="input-componente" />
           
            </div>
                    </div>
                    <div class="cadastro-componente-2">
                <div class="componente-cadastro-2">
                    
                    <label for="valor-pago" class="campo-label">Valor <i class="pi pi-dollar" style="font-size: 1rem"></i></label>

                    <InputNumber v-model="racao.valorPago"  mode="currency" currency="BRL" :min="0" class="input-componente" />
                    
                </div>
                <div class="componente-cadastro-2">
                    <label for="Data" class="campo-label">Data <i class="pi pi-calendar" style="font-size: 1rem"></i></label>
                    <Calendar v-model="racao.data" date-format="dd/mm/yy" class="card flex justify-content-center input-componente" />
                </div>
            </div>
                   
            
                <div class="flex align-items-center gap-3">
                        <Button label="Cancelar" @click="cancelar" text class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        <Button label="Salvar" @click="salvarRacao" text class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
                </div>
            </template> 
        </Dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Calendar from 'primevue/calendar';
import { updateRacao } from '../http';
export default defineComponent ({
    components:{
        Calendar
    },
    
    props: {
        rowData: {
            type: Object, // Defina o tipo de acordo com a estrutura de seus dados
            required: true
        }
},
    data() {

        
        return {
            visible: false,
                racao:{
                id: 0,    
                nome: '',
                kqQuantidade: 0,
                valorPago: 0,
                data: new Date (),
                }
            };
        },
        methods:{
        async salvarRacao(){
            const salvar = await updateRacao(this.racao)
            console.log(salvar);
            this.visible = false;
     
            alert("ração salva")
        },
        cancelar (){
            this.racao.nome = '',
            this.racao.data = new Date(),
            this.racao.kqQuantidade = 0,
            this.racao.valorPago = 0    
            this.visible = false;
          
        }

    },
});
</script>
<style scoped>

.input-componente{
    box-shadow: 0px 6px 9px #5CB9EE;
    border-radius: 6px;
    outline: none;
    padding: 0 7px;
}

.campo-label{
    color: black;
}

.cadastro{
    background-color: white;
    width: 100%;
    height: 3rem;
}
.cadastro-racao{
 
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cancelar-salvar{
    display: flex;
    justify-content: center;
    gap: 50%;
}

.formulario{
   
    height: 7rem;
    gap: 10px;
    align-items: center;
    justify-content: center;

    padding: 4px;

}
.enviar{
    background-color: white;
    width: 100px;
    color: #5CB9EE;
    height: 2rem;
    border: 2px solid white;
    border-radius: 8px;
}
.cancelar{
    background-color: white;
    width: 100px;
    color: red;
    height: 2rem;
    border: 2px solid white;
    border-radius: 8px;
}
.enviar:hover{
    background-color: #5CB9EE;
    color: white;
}
.cancelar:hover{
    background-color: red;
    color: white;
}

.componente-cadastro-1{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    background-color: white;
    box-shadow: 0px 4px 7px black;
    height: 6rem;
    justify-content: center;
    gap: 10px;
}
.componente-cadastro-2{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    background-color: white;
    box-shadow: 0px 4px 7px black;
    height: 6rem;
    justify-content: center;
    gap: 10px;
}
.cadastro-componente-1{

    display: flex;
    gap: 40px;
    margin-bottom: 30px;
    width: 660px;
}
    .cadastro-componente-2{
    width: 660px;
    display: flex;
    gap: 40px;
    margin-bottom: 16%;
    }
</style>
