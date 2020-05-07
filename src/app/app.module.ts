import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';

/* 
*
//implements ngx-mask
import {  NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
  
@NgModule({
  imports: [
    NgxMaskModule.forRoot(),
  ],
})
// ...end .. implements ngx-mask 
*
*/
@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    InputComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    /* 
    *
    // import NgxMaskModule to implements ngx-mask
    NgxMaskModule.forRoot(options),
    *
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
