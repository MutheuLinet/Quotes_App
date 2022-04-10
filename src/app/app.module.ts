import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDescriptionComponent } from './components/quote-description/quote-description.component';
import { DateCountPipe } from './pipe/date-count.pipe';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDescriptionComponent,
    DateCountPipe,
    FormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
