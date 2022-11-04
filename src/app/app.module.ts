import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeroesComponent } from './tasks/components/heroes/heroes.component';
import { HeroDetailComponent } from './tasks/components/hero-detail/hero-detail.component'; 
import { LabelComponent } from './tasks/components/label/label.component';
import { MessagesComponent } from './messages/messages.component'; // <--- NgModel Lives here
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './tasks/components/dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './shared/services/in-memory-data.service';
import { HeroSearchComponent } from './tasks/components/hero-search/hero-search.component';
import { HeroTypeComponent } from './tasks/components/hero-type/hero-type.component';

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
