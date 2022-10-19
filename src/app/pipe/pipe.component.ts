import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  sampletext:string="kiran navale";
  sliceEx:string="ABCDEFGHIJKLM";
  stud=['kiran','amol','sanket','adesh','ketan'];
  date1=new Date();
  price=100000;

  constructor() { }

  ngOnInit(): void {
  }

}
