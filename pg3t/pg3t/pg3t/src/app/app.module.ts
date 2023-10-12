import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPageComponent } from './new-page/new-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NewPageComponent
  ],
  imports: [
    GoogleChartsModule,
    BrowserModule,
    NgCircleProgressModule.forRoot(
      {
        radius: 70,
      outerStrokeWidth: 8,
     
      outerStrokeColor: "#78C000",
      
      animationDuration: 300,
      }
    ),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
