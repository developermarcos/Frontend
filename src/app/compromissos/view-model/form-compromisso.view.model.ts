import { TipoLocalCompromissoEnum } from "./tipo-local-compromisso.enum";

export class FormCompromissoViewModel{
  id: string;
  assunto: string;
  local: string;
  tipoLocal: TipoLocalCompromissoEnum;
  link: string;
  data: Date;
  contatoId: string;
  horaInicio: string;
  horaTermino: string;
}