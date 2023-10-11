import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  
  displayedColumns: string[] = [];  // Ahora se establecerán dinámicamente
  dataSource: any[] = [];
  selectedCliente: any = {}; // Cliente seleccionado para editar


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getClientes().subscribe(data => {
      this.dataSource = data;

      // Establecer columnas dinámicamente basándonos en el primer objeto (si existe)
      if (data.length > 0) {
        this.displayedColumns = Object.keys(data[0]);
      }

    }, error => {
      console.error("Error obteniendo clientes:", error);
    });
  }


   // Función para seleccionar un cliente para editar
   selectCliente(cliente: any): void {
    this.selectedCliente = { ...cliente };
  }

  // Función para actualizar el cliente
  updateCliente(): void {
  }
}
