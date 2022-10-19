import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
 
 stud:any=['kiran','namu','sudam','uma'];

  constructor() { }
  age:number=19;
  num:any=6;

  ngOnInit(): void {
  }

}
