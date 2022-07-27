import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  submitted=false;
  fg: FormGroup;
  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private _router:Router,
    private toast:ToastrService
    ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.fg=this.fb.group({
      'adminid':['',Validators.required],
      'name':['',Validators.required],
      'gender':['',Validators.required],
      'city':['',Validators.required],
      'phone':['',Validators.required],
      'pwd':['',Validators.required],
    })
  }

  registeradmin(values:any){
    this.submitted=true
    if(this.fg.valid){
      console.log(values)
      this.api.registeradmin(values).subscribe({
        next:resp=>{
        console.log(resp)
        this.toast.success('Registered successfully')        
          this._router.navigate(['adminlogin'])
        },
      error:err=>{
        console.log(err)
        this.toast.error('Something bad happened',"Registration Failed")
      }
    })
  }
  }
}
