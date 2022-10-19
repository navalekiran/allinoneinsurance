import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
myForm:any;
public reg:any=[];

  

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
this.myForm=this.fb.group({
  fname:['', [Validators.required]],
  lname:[''],
  email:[''],
  

})


  }
  onsubmit(){
    console.log(this.myForm.value)

  }
  

}
