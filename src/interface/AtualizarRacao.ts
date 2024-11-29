export default interface AtualizarRacao{
    [x: string]: string | number | Date;
        id: number,
        nome: string,
        kg: string,
        historicoMedico: string,
        idade: string
    }