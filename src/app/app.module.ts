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
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    MyCounterComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot([
      {path: 'table', component: GenericTableComponent, canActivate: [AuthGuard]},
      {path: 'counter', component: MyCounterComponent, canActivate: [AuthGuard]},
      {path: 'form', component: FormComponent, canActivate: [AuthGuard]},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full' }

    ]),
    StoreModule.forRoot({count: counterReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
