import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AstroModule } from '@micahjones13/angular-workspace/dist/component-library';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AstroModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
