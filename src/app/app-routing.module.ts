import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ContactComponent } from '../app/contact/contact.component';
import { ServicesComponent } from '../app/services/services.component';
import { TravelComponent } from '../app/travel/travel.component';
import { ProjectsComponent } from '../app/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
