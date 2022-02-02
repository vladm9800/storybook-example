import { NgModule } from '@angular/core';
import { ExampleLibModule } from '@example-lib';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonExampleComponent } from './button-example/button-example.component';

@NgModule({
  declarations: [AppComponent, ButtonExampleComponent],
  imports: [AppRoutingModule, BrowserModule, ExampleLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
