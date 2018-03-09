import { Component, OnInit, Input } from '@angular/core';
import {Player} from '../player';
import { PLAYERS } from '../player-list';
import { Players } from '../providers/players';
import {Team } from '../team';
import {TeamService} from '../providers/team-service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  team: any[];
  tm: any[];
  details:any[];
  teamName: string;
  price: Number;
  name: string;
  @Input() player: Player = {
    id: 1,
    name: 'Ronaldo',
    price: 2500,
    teamName: 'Chelsea'
  };
  newPlayer: any;
  @Input() footballTeam: Team ={
    id:1,
    name: 'Milan'
  };

  constructor(public players: Players, public teams: TeamService) { 
    this.players.getPlayers().then(res=>{
      this.team=res;
    })
    this.teams.getTeams().then(res=>{
      this.tm=res;
    })
  }

  onSubmit(){
    this.newPlayer={
      teamName: this.teamName,
      name: this.name,
      price: this.price
    }
    this.players.createPlayer(this.newPlayer);
    
  }
 
  onGet(){
    this.players.getPlayers().then(res=>{
      this.team=res;
      console.log(this.team[0].name);
    });
    
    // console.log(this.players.data);
  }

  deletePlayer(id){
    this.players.deletePlayer(id);
    console.log("delete part 1");
  }

  deleteTeam(id){
    this.teams.deleteTeam(id);
  }
  
  onSubmitTeam(){
    this.teams.createTeam(this.footballTeam);
  }

  teamDetails(teamNm){
    this.teams.getTeamDetails(teamNm).then(res=>{
      this.details=res;
      console.log(teamNm + this.details);
    });
  }
  lightOrDark(id){
    if(id%2==0){
      return 'light';
    }
    else{
      return 'dark';
    }
  }
  ngOnInit() {
  }

}
