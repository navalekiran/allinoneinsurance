import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator } from '@angular/forms';
@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
course:any=['BE','BTECH','BCA','BCS'];
  constructor() { }

  ngOnInit(): void {
  }

}
