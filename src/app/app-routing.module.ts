import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './programs/programs.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:'',redirectTo:'programs',pathMatch:'full'},
  {path:'programs',component:ProgramsComponent},
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'blog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
