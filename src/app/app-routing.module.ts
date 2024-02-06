import { CONTACTComponent } from './contact/contact.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'/start-framework',pathMatch:'full'},
  {path:'start-framework', component:StartFrameworkComponent},
  {path:'about',component:ABOUTComponent},
  {path:'portfolio',component:PORTFOLIOComponent},
  {path:'contact',component:CONTACTComponent},
  {path:'**',component:NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
