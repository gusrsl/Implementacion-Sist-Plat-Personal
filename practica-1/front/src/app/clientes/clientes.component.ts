import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  
  displayedColumns: string[] = [];  // Ahora se establecerán dinámicamente
  dataSource: any[] = [];
  selectedCliente: any = {}; // Cliente seleccionado para editar
  clienteForm!: FormGroup;
  editing: boolean = false; // Nuevo estado
  private clienteIdControl = this.fb.control('');


  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private fb: FormBuilder  // Inyecta FormBuilder
    // Inyecta MatDialog
    ) {
      this.createForm();
     }

     createForm() {
      // Crea el formulario sin el control _id por defecto
      this.clienteForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        fechaNacimiento: ['', Validators.required],
        membresiaId: [''],
        coachId: [''],
      });
    }

    loadClienteToEdit(cliente: any): void {
      // Habilita el modo de edición y establece el control _id
      this.editing = true;
      this.clienteIdControl = this.clienteIdControl ?? ''; // Establece un valor predeterminado si es null
      this.clienteIdControl.setValue(cliente.id);
      this.selectedCliente = cliente;
    
      // Establece los valores en el formulario
      this.clienteForm.setValue({
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        fechaNacimiento: cliente.fechaNacimiento,
        membresiaId: cliente.membresiaId,
        coachId: cliente.coachId,
      });
    }
    

    onSubmit(): void {
      const formData = this.clienteForm.value;
      
      if (this.selectedCliente) { // Si se está editando un cliente
        const clienteId = this.selectedCliente.id; // Obtén el clienteId del cliente seleccionado
        if (clienteId) {
          this.apiService.updateCliente(clienteId, formData).subscribe(response => {
            // Aquí puedes refrescar tu lista de clientes o hacer alguna otra acción
            console.log('Cliente actualizado con éxito');
            this.selectedCliente = null; // Resetea el cliente seleccionado
            this.clienteForm.reset(); // Limpia el formulario
            
            // Actualiza la lista de clientes después de la actualización
            this.apiService.getClientes().subscribe(data => {
              this.dataSource = data;
            }, error => {
              console.error('Error obteniendo clientes:', error);
            });
          }, error => {
            console.error('Error actualizando cliente:', error);
          });
        } else {
          console.error('El cliente seleccionado no tiene un ID válido.');
        }
      } else { // Si se está agregando un nuevo cliente
        this.apiService.createCliente(formData).subscribe(response => {
          // Aquí puedes agregar el nuevo cliente a tu lista o hacer alguna otra acción
          console.log('Cliente creado con éxito');
          this.clienteForm.reset(); // Limpia el formulario
          
          // Actualiza la lista de clientes después de la creación
          this.apiService.getClientes().subscribe(data => {
            this.dataSource = data;
          }, error => {
            console.error('Error obteniendo clientes:', error);
          });
        }, error => {
          console.error('Error creando cliente:', error);
        });
      }
    }

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


  // En tu componente ClientesComponent

  addCliente(newCliente: any): void {
    this.apiService.createCliente(newCliente).subscribe(response => {
      // Refresca la lista de clientes o añade el nuevo cliente a dataSource
      this.dataSource.push(response);
      this.dataSource = [...this.dataSource];
      console.log('Cliente añadido con éxito.');
      this.editing = false; // Salir del modo de edición
    }, error => {
      console.error('Error añadiendo cliente:', error);
    });
  }

// Función ya tienes para actualizar un cliente
updateCliente(): void {
  const formData = this.clienteForm.value;
  this.apiService.updateCliente(this.selectedCliente.id, formData).subscribe(response => {
    // Encuentra el cliente en dataSource y actualiza sus datos
    const index = this.dataSource.findIndex(cliente => cliente.id === this.selectedCliente.id);
    if (index !== -1) {
      this.dataSource[index] = { ...this.selectedCliente, ...formData };
      this.dataSource = [...this.dataSource];
    }
    console.log('Cliente actualizado con éxito.');
    this.editing = false; // Salir del modo de edición
    this.selectedCliente = null; // Resetea el cliente seleccionado
  }, error => {
    console.error('Error actualizando cliente:', error);
  });
}

  deleteCliente(clienteId: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de que quieres eliminar este cliente?' } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) { // Si el usuario confirma la eliminación
        this.apiService.deleteCliente(clienteId).subscribe(response => {
          this.dataSource = this.dataSource.filter(cliente => cliente.id !== clienteId);
          console.log('Cliente eliminado con éxito.');
        }, error => {
          console.error('Error eliminando cliente:', error);
        });
      }
    });
  }

  cancelEdit(): void {
    this.editing = false;
    this.clienteIdControl = this.clienteIdControl ?? ''; // Establece un valor predeterminado si es null
    this.clienteIdControl.setValue(''); // Limpia el control _id
    this.selectedCliente = null;
    this.clienteForm.reset();
  }


}
