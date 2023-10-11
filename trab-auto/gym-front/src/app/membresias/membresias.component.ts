import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrls: ['./membresias.component.scss']
})
export class MembresiasComponent {
  
  displayedColumns: string[] = [];  // Ahora se establecerán dinámicamente
  dataSource: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMmebresias().subscribe(data => {
      this.dataSource = data;

      // Establecer columnas dinámicamente basándonos en el primer objeto (si existe)
      if (data.length > 0) {
        this.displayedColumns = Object.keys(data[0]);
      }

    }, error => {
      console.error("Error obteniendo membresias:", error);
    });
  }
}
