import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
registerForm : FormGroup;
USER_ANS=[
  {answer1:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '},
  {answer2:' Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  '},
  {answer3:'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}
  
]
  constructor() { }

  ngOnInit(): void {
    
    this.registerForm = new FormGroup({
  
      Question1: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      Question2: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
     Quetion3: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
 });
  }
onSubmit(){

}
}
