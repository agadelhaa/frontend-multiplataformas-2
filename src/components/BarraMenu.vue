<template>
    <div class="principal">
        <div class="apresentacao ">
            <div class="rotas"> 
                <CadastroRacao />
            </div>
        </div>
        <BarraPerfil />
        <VisualizarRacao />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CadastroRacao from './CadastroRacao.vue';
import VisualizarRacao from './VisualizarRacao.vue';
import BarraPerfil from './BarraPerfil.vue';
export default defineComponent({
    components:{
        VisualizarRacao, 
        BarraPerfil,
        CadastroRacao
    },
    data() {
        return {
          
        };
    },
    
})
</script>
<style scoped>
.principal{
   
    display: flex
}

.rotas {
    width: 70%;
    display: flex;
    justify-content: center;
    margin-left: 40px;
}


.apresentacao {
    margin-bottom: 20px; 
    width: 20%;
    background-color: black;
    height: 43.6rem;
    display: flex;
    align-items: center;
    gap: 100px;
    margin-bottom: 20px;

}

@media screen and (min-width: 768px) {
    .apresentacao {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
    }

    .logo-titulo {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 0;
    }

    .rotas {
        width: 70%;
    }
}

@media screen and (max-width: 767px) {
    .logo-titulo {
        flex-direction: column;
    }
    .apresentacao{
        display: flex;
        margin-bottom: 62px;
        margin-top: 144%;
        height: auto;
        margin-left: 14%;
        width: 68%;
        background-color: white;
        box-shadow: 9px 7px 6px black;
    }

    .rotas {
        width: 100%;
        margin: 10px;
    }
}</style>
