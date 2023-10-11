import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CoachesComponent } from './coaches/coaches.component';
import { MembresiasComponent } from './membresias/membresias.component';
import { GymComponent } from './gym/gym.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ClaseComponent } from './clase/clase.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'membresias', component: MembresiasComponent },
  { path: 'gym', component: GymComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'clase', component: ClaseComponent },
  { path: 'asistencia', component: AsistenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
