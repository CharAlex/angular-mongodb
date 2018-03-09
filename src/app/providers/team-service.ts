import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Team} from '../team';
 
@Injectable()
export class TeamService {
  
  data: any;
  dataDetails: any;
   
  constructor(public http: HttpClient) {
    this.data = null;
    this.dataDetails = null;
  }
 
  getTeams(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
      
      this.http.get('http://localhost:8080/api/teams')
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createTeam(team){
    console.log(team);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
 
    this.http.post('http://localhost:8080/api/teams', JSON.stringify(team), {headers: headers})
      .subscribe(res => {
        console.log("team added " + res);
      });
 
  }
 
  deleteTeam(id){
    console.log("delete part 2 ...id" + id);
    this.http.delete('http://localhost:8080/api/teams/' + id).subscribe((res) => {      
      console.log(res + id);
    });   
 
  }

  getTeamDetails(teamNm){
    console.log(teamNm);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    const teamName = {
      teamNm: teamNm
    }

    if (this.dataDetails) {
      return Promise.resolve(this.dataDetails);
    }
    return new Promise(resolve => {
      this.http.post('http://localhost:8080/api/teams/teamdetails', JSON.stringify(teamName), {headers: headers})
      .subscribe(res => {
        this.dataDetails = res;
        resolve(this.dataDetails);
        console.log("team details " + res);
      });
    });

    
 
  }
 
}