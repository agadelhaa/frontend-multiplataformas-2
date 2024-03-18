<template>
    <main class="principal">
        <div class="escolhas-principais">
            <div class="escolhas">
                <div class="cadastro">
                    <nav class="panel mt-5">
                        <router-link to="/cadastrar" class="cadastrar">
                            <i class="fa-solid fa-cart-shopping"></i> Cadastrar Compras
                        </router-link>  
                        <div>
                            <router-link to="" class="visualizar">
                                <i class="fa-solid fa-cart-shopping"></i> Visualizar Compras
                            </router-link>
                        </div>
                    </nav>
                </div>
            
            </div>
        </div>
    </main>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
import CadastroRacao from './CadastroRacao.vue';
export default defineComponent({
components:{

}
});
</script>
<style scoped>
.escolhas-principais{
    background-color: #D9D9D9;

    height: 40.4rem;
    width: 80%;
}
.escolhas{
    height: 6rem;
    justify-content: center;
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0% 26%;
}
.cadastro{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5%;
    height: 5rem;
}
.cadastrar{
    background-color: white;
    border: 2px solid white;
    height: 2rem;
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: center;
}
.visualizar{
    background-color: white;
    border: 2px solid white;
    height: 2rem;
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: center;
}
</style>