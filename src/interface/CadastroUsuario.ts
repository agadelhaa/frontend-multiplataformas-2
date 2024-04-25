export default interface Cadastrousuario{
    nome: string,
    idade: number,
    email: string,
    telefone: string,
    user:{
        login: string,
        senha: string
    }
}