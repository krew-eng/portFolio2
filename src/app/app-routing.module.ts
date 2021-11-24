import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectComponent } from './project/project.component';
import { SelectedWorksComponent } from './selected-works/selected-works.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component:  MainPageComponent, data: { animation: 'HomePage'}},
  { path: 'about', component:  AboutComponent, data: { animation: 'AboutPage' }},
  { path: 'education', component: EducationComponent, data: { animation: 'EducationPage' } },
  { path: 'project', component:  ProjectComponent, data: { animation: 'ProjectPage' }},
  { path: 'selected-works', component: SelectedWorksComponent, data: { animation: 'WorksPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
