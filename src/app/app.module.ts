import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes-page/heroes-page.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component'; 
import { LabelComponent } from './heroes/label/label.component';
import { MessagesComponent } from './messages/messages.component'; // <--- NgModel Lives here
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './shared/services/in-memory-data.service';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { HeroTypeComponent } from './heroes/hero-type/hero-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    LabelComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroTypeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    TasksModule,
    SharedModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }