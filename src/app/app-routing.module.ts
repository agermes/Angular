import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes-page/heroes/heroes.component';
import { DashboardComponent } from './heroes-page/dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes-page/hero-detail/hero-detail.component';
import { TodosComponent } from './tasks/components/todos/todos.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },

  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
