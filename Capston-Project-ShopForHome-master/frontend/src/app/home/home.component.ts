import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnswerComponent } from '../answer/answer.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions:any
  id:any
  constructor(private api:ApiService,private toast:ToastrService,
    private route:ActivatedRoute,
    private _router:Router) { }
    answerButton:boolean=true
    submitButton:boolean=false
  ngOnInit(): void {
    this.api.questions().subscribe({
      next:resp=>{
        
        this.questions=resp
        //console.log(this.questions.data)
        

      },
      error:err=>this.toast.error("no questions yet")
    })
  }
    submit(data:any){
      sessionStorage.setItem("id",data)
      this._router.navigate(['answer'])
      
    }
    // answerButtonOn(){
    //   this.answerButton=false
    //   this.submitButton=true
    // }
    // submitButtonOn(){
    //   this.answerButton=true
    //   this.submitButton=false

    // }
    
  

  

  

  // addtocart(id:number){
  //   const custid=sessionStorage.getItem('id')
  //   if(custid!=null){
//       this.api.addtocart({customer:custid,product:id})
//       .subscribe({
//         next:resp=>{
//           this.toast.success('Item added to cart')         
//         },
//         error:err=>this.toast.error(err.error)
//       })
//     }
//   else
//     this.toast.error('Please login first')
// }

//   addtowishlist(id:number){
//     const custid=sessionStorage.getItem('id')
//     if(custid!=null){
//     this.api.addtowishlist({custid,product:id})
//     .subscribe({
//       next:resp=>{
//         this.toast.success('Item added to wishlist')
//       },
//       error:err=>this.toast.error(err.error)
//     })
//   }
//   else
//   this.toast.error('Please login first')
// }

  

}
