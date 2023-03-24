import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenericTableComponent } from './table-component/generic-table.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { FormComponent} from "./form/form.component";
import { counterReducer } from './store/counter.reducer';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    MyCounterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot([
      {path: 'table', component: GenericTableComponent},
      {path: 'counter', component: MyCounterComponent},
      {path: 'form', component: FormComponent},

    ]),
    StoreModule.forRoot({count: counterReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
