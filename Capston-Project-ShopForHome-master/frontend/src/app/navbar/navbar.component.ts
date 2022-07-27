import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role=sessionStorage.getItem("role")
  search:string
  constructor(private _router:Router,private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("role",this.role) 
    const custid=sessionStorage.getItem('id')
    if(custid!=null){ 
      this.api.getUserDetails(sessionStorage.getItem('id'))
      .subscribe({
        next:resp=>{
          const uinfo=resp.data
          
           }
      })
    }

    
    this.route.queryParams.subscribe(p=>this.search=p['search'])
  }

  logout(){
    sessionStorage.clear();
    this._router.navigate(['/'])
  }

}
