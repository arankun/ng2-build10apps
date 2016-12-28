import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;


  constructor() {
    this.jbtHeading = "My JBT Header";
    this.jbtText = "This is a jbt text. The quick bronw fox jump over the lazy dog. My JBT Text goes here";
    this.jbtBtnText = "Learn more";
    this.jbtBtnUrl = "/about";

  }

  ngOnInit() {
  }

}
