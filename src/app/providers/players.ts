import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Player} from '../player';
 
@Injectable()
export class Players {
  
  data: any;
 

  
  constructor(public http: HttpClient) {
    this.data = null;
  }
 
  getPlayers(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/players')
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createPlayer(player){
    console.log(player);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
 
    this.http.post('http://localhost:8080/api/players', JSON.stringify(player), {headers: headers})
      .subscribe(res => {
        console.log("player added " + res);
      });
 
  }
 
  deletePlayer(id){
    console.log("delete part 2 ...id" + id);
    this.http.delete('http://localhost:8080/api/players/' + id).subscribe((res) => {      
      console.log(res + id);
    });   
 
  }
 
}