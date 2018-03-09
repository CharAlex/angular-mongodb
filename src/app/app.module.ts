import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Players } from './providers/players'; 
import { TeamService } from './providers/team-service'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Players,TeamService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
