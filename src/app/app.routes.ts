import { provideRouter, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { MostrarComponent } from './mostrar/mostrar.component';

export const routes: Routes = [

        {path: 'agregar', component: FormularioComponent},
        {path: 'mostrar', component: MostrarComponent},
        { path: '', redirectTo: '/agregar', pathMatch: 'full' }
];

export const appRoutingProviders = [provideRouter(routes)];