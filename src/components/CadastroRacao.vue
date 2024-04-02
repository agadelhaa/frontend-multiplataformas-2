<template>
    <div class="card flex justify-content-center" style=" height: 3rem; width: 18%;
    width: 50%;
    height: 3rem;
    display: flex;
    justify-content: center;">
        <Button label=" Cadastrar" @click="visible = true" class="cadastro" />

        <Dialog v-model:visible="visible" modal :pt="{
            root: 'border-none',
            mask: {
                style: 'backdrop-filter: blur(2px)'
            }
        }" class="center-dialog">
            <template #container="">
                <div class="flex flex-column px-5 py-5 gap-4" style="border-radius: 12px; display: flex;
                justify-content:center;
                width: 50;">
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="block mx-auto">

                    </svg>
                    <div class="inline-flex flex-column gap-2">
                        <div class="cadastro-componente-1">
                            <div class="componente-cadastro-1">
                                <label for="nome-produto" class="campo-label">Nome do produto <i class="pi pi-pencil"
                                        style="font-size: 1rem"></i></label>
                                <InputText type="text" v-model="racao.nome" placeholder="Nome" class="input-componente"
                                    :class="{ 'input-vazio': !racao.nome }" />
                            </div>
                            <div class="componente-cadastro-2">
                                <label for="" class="campo-label">Quantidade (kg)</label>
                                <InputNumber v-model="racao.kgQuantidade" invalid mode="decimal" :min="0"
                                    class="input-componente" :class="{ 'input-vazio': !racao.kgQuantidade }" />


                            </div>
                        </div>
                        <div class="cadastro-componente-2">
                            <div class="componente-cadastro-2">

                                <label for="valor-pago" class="campo-label">Valor <i class="pi pi-dollar"
                                        style="font-size: 1rem"></i></label>

                                <InputNumber v-model="racao.valorPago" mode="currency" currency="BRL" :min="0"
                                    class="input-componente" :class="{ 'input-vazio': !racao.valorPago }" />

                            </div>
                            <div class="componente-cadastro-data">
                                <label for="Data" class="campo-label-data">Data <i class="pi pi-calendar"
                                        style="font-size: 1rem"></i></label>
                                <Calendar v-model="racao.data" date-format="dd/mm/yy"
                                    class="card flex justify-content-center input-componente" />

                            </div>
                        </div>


                        <div class="flex align-items-center gap-3">
                            <Button label="Cancelar" @click="cancelar" text
                                class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Salvar" @click="salvarRacao" text
                                class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
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
import { cadastroRacao } from '@/http';
export default defineComponent({
    components: {
        Calendar
    },

    data() {


        return {
            visible: false,
            racao: {
                nome: '',
                kgQuantidade: 0,
                valorPago: 0,
                data: new Date(),
            }
        };
    },
    methods: {
        async salvarRacao() {


            let mensagem = '';
            switch (true) {
                case !this.camposPreenchidos():
                    mensagem = 'Por favor, preencha todos os campos obrigatórios'
                    break;

                case this.racao.data > new Date():
                    mensagem = 'Data inválida'
                    break;

                default: {
                    try {
                        const salvar = await cadastroRacao(this.racao)
                        // console.log(salvar);
                        this.visible = false;
                        this.racao.nome = '',
                            this.racao.data = new Date(),
                            this.racao.kgQuantidade = 0,
                            this.racao.valorPago = 0
                        mensagem = 'Ração salva!'
                    }
                    catch (error) {
                        mensagem = 'Ocorreu um erro ao salvar o seu produto'
                    }

                }

            }
            alert(mensagem)
        },
        cancelar() {
            this.racao.nome = '',
                this.racao.data = new Date(),
                this.racao.kgQuantidade = 0,
                this.racao.valorPago = 0
            this.visible = false;

        },
        camposPreenchidos() {
            return this.racao.nome && this.racao.kgQuantidade && this.racao.valorPago;
        }

    },
});
</script>
<style scoped>
.input-vazio {
    border: 2px solid red;
}


.input-componente {
    box-shadow: 0px 6px 9px #5CB9EE;
    border-radius: 6px;
    outline: none;

}

.cadastro {
    background-color: white;
    width: 100%;
    height: 3rem;
}

.cadastro:hover {
    background-color: #5CB9EE;
    color: white;
}



.campo-label {
    color: black;
}

.cadastro-racao {

    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cancelar-salvar {
    display: flex;
    justify-content: center;
    gap: 50%;
}

.formulario {

    height: 7rem;
    gap: 10px;
    align-items: center;
    justify-content: center;

    padding: 4px;

}

.enviar {
    background-color: white;
    width: 100px;
    color: #5CB9EE;
    height: 2rem;
    border: 2px solid white;
    border-radius: 8px;
}

.cancelar {
    background-color: white;
    width: 100px;
    color: red;
    height: 2rem;
    border: 2px solid white;
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

.componente-cadastro-1 {
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

.componente-cadastro-2 {
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

.componente-cadastro-data {
    width: 50%;
    background-color: white;
    box-shadow: 0px 4px 7px black;
    height: 6rem;
    gap: 10px;
    text-align: center;
    padding: 27px 0px;
}

.cadastro-componente-1 {

    display: flex;
    gap: 40px;
    margin-bottom: 30px;
    width: 500px;
}

.cadastro-componente-2 {
    width: 500px;
    display: flex;
    gap: 40px;
    margin-bottom: 16%;
}

@media screen and (max-width: 767px) {


    flex-column {
        flex-direction: column;
    }

    .px-5,
    .py-5 {
        padding: 12px;
    }

    .gap-4 {
        gap: 12px;
    }

    .width-50 {
        width: 100%;

    }
}

.cadastro-componente-1,
.cadastro-componente-2 {
    width: 100%;

}

.componente-cadastro-1,
.componente-cadastro-2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 44%;
}

.componente-cadastro-data {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.campo-label {
    font-weight: bold;
}

.input-componente {
    width: 80%;

}
</style>
