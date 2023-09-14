// customer-adapter.ts
import { Injectable } from '@angular/core';
import { ClientesModel } from './clientes.interface';


@Injectable({
  providedIn: 'root',
})
export class ClientesAdapter {
  adapt(apiData: any): ClientesModel {
    // Realiza el mapeo de datos aquí
    return {
      id: apiData._id,
      nombre: apiData.nombre,
      apellido: apiData.apellido,
      email: apiData.email,
      fechaNacimiento: apiData.fechaNacimiento,
      membresiaId: apiData.membresiaId,
      coachId: apiData.coachId,
    };
  }
}
