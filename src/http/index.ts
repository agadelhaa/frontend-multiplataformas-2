import IRacao from "@/interface/IRacao";
import ListarRacao from "@/interface/ListarRacao";
import AtualizarRacao from "@/interface/AtualizarRacao";
import axios from "axios";

export async function cadastroRacao(salvarRacao: IRacao): Promise<string> {
    const body = JSON.stringify(salvarRacao);
    // console.log(body);
    const resposta = await axios.post('http://localhost:8080/racao', salvarRacao);
    return resposta.data as string;
}
export async function obterRacao():Promise<ListarRacao> {
    const resposta = await axios.get('http://localhost:8080/racao');
    // console.log(resposta);
    
    return resposta.data.content as ListarRacao;
}

    // export async function updateRacao(atualizarRacao: AtualizarRacao):Promise<string>{
    
    //     const body = JSON.stringify(atualizarRacao);
    //     const resposta = await axios.put('http://localhost:8080/racao', body, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     return resposta.data as string;
    // }

    export async function updateRacao(atualizarRacao: AtualizarRacao): Promise<string> {
        try {            
            const resposta = await axios.put('http://localhost:8080/racao', JSON.stringify(atualizarRacao), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            return resposta.data as string;
        } catch (error) {
            // Se ocorrer algum erro durante a chamada da API, você pode tratá-lo aqui
            console.error('Erro ao atualizar a ração:', error);
            throw error; // Você também pode lançar o erro novamente para lidar com ele em outro lugar
        }
    }

    export async function deleteItem(id:number) {
        const resposta = await axios.delete(`http://localhost:8080/racao/${id}`)
        console.log(resposta , 'excluida');
        
    }