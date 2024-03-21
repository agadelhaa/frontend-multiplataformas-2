import IRacao from "@/interface/IRacao";
import ListarRacao from "@/interface/ListarRacao";
import axios from "axios";

export async function cadastroRacao(salvarRacao: IRacao): Promise<string> {
    const body = JSON.stringify(salvarRacao);
    console.log(body);
    const resposta = await axios.post('http://localhost:8080/racao', salvarRacao);
    return resposta.data as string;
}
export async function obterRacao():Promise<ListarRacao> {
    const resposta = await axios.get('http://localhost:8080/racao');
    // console.log(resposta)
    // console.log(resposta);
    
    return resposta.data.content as ListarRacao;
}

