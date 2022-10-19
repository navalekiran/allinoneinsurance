import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //interpolution
  public sampletext:string="";
  //atribute
  public link:string="";
  name:string="";


  constructor() { }
   
  fullname="";
  ngOnInit(): void {
    this.sampletext="this is interpolution / string interpolution";
    this.link="https://www.google.com/";
  }
//event
  onclick(){

    console.log("this is event databinding");
  }

}
