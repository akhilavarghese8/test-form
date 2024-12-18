import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicListComponentComponent } from './components/dynamic-list.component/dynamic-list.component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    DynamicListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
