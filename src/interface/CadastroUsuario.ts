export default interface Cadastrousuario{
    nome: string,
    idade: number,
    email: string,
    cpf: string,
    telefone: string,
    user:{
        login: string,
        senha: string
    }
}