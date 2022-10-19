import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustPipe } from './cust.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectivesComponent,
    TemplateFormsComponent,
    PipeComponent,
    CustPipe,
    ReactiveFormComponent,
    ServiceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
