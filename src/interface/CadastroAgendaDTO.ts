export default interface CadastroAgendaDTO{
    tipoCuidado: string;   // Tipo de cuidado (ex: Vacina, Consulta Veterinária, etc.)
  dataHora: string;      // Data e hora do agendamento
  pet: string;         // ID do pet (referência ao pet agendado)
  tutor: string;  
}