import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor(private api:ApiService,private toast:ToastrService,
    private _router:Router) { }
  question:any
  answer=""
  ngOnInit(): void {
    this.api.findQuestionById(sessionStorage.getItem("id")).subscribe({
      next:resp=>{
      this.question=resp.data
      
      },
    error:err=>{
      console.log(err)
      
    }
  })
  }
  submit(data:any){
    if(this.answer!=null){
    this.api.addAnswer(sessionStorage.getItem("id"),data).subscribe({
      next:resp=>{
        this.toast.success("answer added") 
        sessionStorage.removeItem("id") 
        this._router.navigate([''])
        },
      error:err=>{
        console.log(err)
        this.toast.error('Question not added',"Question shouldn't be empty")
      }
    })
    }
  else{
   this.toast.error("answer shouldn't be null")
  }
}
  }
  