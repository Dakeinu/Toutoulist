import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToutouService } from './toutou.service';
import { ToutoulistComponent } from './toutoulist/toutoulist.component';
import { ToutouCreateComponent } from './toutou-create/toutou-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ToutoulistComponent,
    ToutouCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ToutouService],
  bootstrap: [AppComponent]
})
export class AppModule { }
