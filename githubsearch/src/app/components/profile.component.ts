import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any[];
  repos: any[];
  constructor(private _githubSvc:GithubService) {
    this._githubSvc.getUser().subscribe(user => {
      //console.log(user);
      this.user = user;
    });

    this._githubSvc.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;

    });
  }

  ngOnInit() {
  }

}
