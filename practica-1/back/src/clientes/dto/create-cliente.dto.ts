import { IsNotEmpty, IsEmail, IsDateString, IsOptional, IsMongoId } from 'class-validator';

export class CreateClienteDto {
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsDateString()
    fechaNacimiento?: Date;

    @IsOptional()
    @IsMongoId()
    membresiaID?: string;

    @IsOptional()
    @IsMongoId()
    coachID?: string;
}


