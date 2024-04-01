export default interface AtualizarRacao{
[x: string]: string | number | Date;
    id: number,
    nome: string,
    kqQuantidade: number,
    valorPago: number,
    data: Date
}
