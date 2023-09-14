import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent {
  displayedColumns: string[] = [];  // Ahora se establecerán dinámicamente
  dataSource: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getClases().subscribe(data => {
      this.dataSource = data;

      // Establecer columnas dinámicamente basándonos en el primer objeto (si existe)
      if (data.length > 0) {
        this.displayedColumns = Object.keys(data[0]);
      }

    }, error => {
      console.error("Error obteniendo clases:", error);
    });
  }
}
