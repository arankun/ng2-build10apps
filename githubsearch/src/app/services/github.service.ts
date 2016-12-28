import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class GithubService {
  private username: string;
  private clientId: "21cf653b67fb5db0cfe5";
  private clientSecret: "94c4f3a3260c6ac3bece230334a046d77d6d4b32";

  constructor(private _http: Http) {
    console.log('Github service ready...');
    this.username = "arankun";


  }

  getUser(){
      return this._http.get("http://api.github.com/users/" + this.username+"?client_id="+this.clientId+"&client_secret="+this.clientSecret)
        .map(res => res.json());
   }
  getRepos(){
      return this._http.get("http://api.github.com/users/" + this.username+"/repos?client_id="+this.clientId+"&client_secret="+this.clientSecret)
        .map(res => res.json());
   }

}
