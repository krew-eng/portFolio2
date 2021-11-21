import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectComponent } from './project/project.component';
import { SelectedWorksComponent } from './selected-works/selected-works.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component:  MainPageComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'education', component: EducationComponent },
  { path: 'project', component:  ProjectComponent},
  { path: 'selected-works', component: SelectedWorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
