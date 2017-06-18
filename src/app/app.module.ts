import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PipesAppComponent } from './pipes.component';
import { DoublePipe } from './double.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesAppComponent,
    DoublePipe  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
