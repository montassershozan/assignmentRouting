import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ABOUTComponent } from './about/about.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { CONTACTComponent } from './contact/contact.component';
import { NAVBARComponent } from './navbar/navbar.component';
import { LOCATIONComponent } from './location/location.component';
import { FOOTERComponent } from './footer/footer.component';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ABOUTComponent,
    PORTFOLIOComponent,
    CONTACTComponent,
    NAVBARComponent,
    LOCATIONComponent,
    FOOTERComponent,
    StartFrameworkComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
