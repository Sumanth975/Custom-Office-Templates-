import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private api:ApiService,private toast:ToastrService) { }

  ngOnInit(): void {
  }
  submit(question){
    this.api.submitQuestion(question).subscribe({
      next:resp=>{
      //console.log(question,"hii")
      if(question!=null){
        this.toast.success('question added')  
      }
        
        
      },
    error:err=>{
      console.log(err)
      this.toast.error('Question not added',"Question shouldn't be empty")
    }
  })
  }

}
