import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';
import { EventsDemoComponent } from './components/events-demo/events-demo.component';
import { AgePipeDemoComponent } from './components/pipes-demo/age-pipe-demo/age-pipe-demo.component';
import { FilterPipeDemoComponent } from './components/pipes-demo/filter-pipe-demo/filter-pipe-demo.component';
import { AgePipe } from './pipes/age.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipesDemoComponent,
    DirectivesDemoComponent,
    EventsDemoComponent,
    AgePipeDemoComponent,
    FilterPipeDemoComponent,
    AgePipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
