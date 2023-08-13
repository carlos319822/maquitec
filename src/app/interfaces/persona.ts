export interface Persona {
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  estado_civil: string;
  fecha_registro:string;
  estudios:string;
  estado:string;
  cargo_aspirado:string;
  experiencia_laboral:string;
  Hdv:string;
  //forma: Forma[];
  //caras: Caras[];
}
export interface Forma{
  estudios:string;
  estado:string;
}
export interface Caras{
  cargo_aspirado:string;
  experiencia:string;
  Hdv:string;
}