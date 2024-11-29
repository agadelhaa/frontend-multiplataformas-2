export default interface IRacao{
    [x: string]: string | number | Date;
    nome: string,
    kg: number,
    historicoMedico: string,
    idade: string;
}