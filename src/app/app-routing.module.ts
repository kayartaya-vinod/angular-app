import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';
import { EventsDemoComponent } from './components/events-demo/events-demo.component';
import { AgePipeDemoComponent } from './components/pipes-demo/age-pipe-demo/age-pipe-demo.component';
import { FilterPipeDemoComponent } from './components/pipes-demo/filter-pipe-demo/filter-pipe-demo.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pipes-demo',
    component: PipesDemoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'age-pipe-demo'
      },
      {
        path: 'age-pipe-demo',
        component: AgePipeDemoComponent
      },
      {
        path: 'filter-pipe-demo',
        component: FilterPipeDemoComponent
      }
    ]
  },
  {
    path: 'directives-demo',
    component: DirectivesDemoComponent
  },
  {
    path: 'events-demo',
    component: EventsDemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
