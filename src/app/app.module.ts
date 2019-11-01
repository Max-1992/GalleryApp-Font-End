import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// ROUTING
import { AppRoutingModule } from './app-routing.module';

// SHARED MODULE
import { SharedModule } from './shared/shared.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
