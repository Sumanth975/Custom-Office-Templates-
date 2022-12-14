import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASEURL:string="http://localhost:8081/api/";

  constructor(private http:HttpClient) { }

  validate(data:any){
    return this.http.post<any>(this.BASEURL+"users/validate",data);
  }

  validateadmin(data:any){
    return this.http.post<any>(this.BASEURL+"admin/validate",data);
  }
  submitQuestion(data:any){
    return this.http.post<any>(this.BASEURL+"questions",data)
  }

  //categories
  savecategory(data:any){
    return this.http.post<any>(this.BASEURL+"categories",data);
  }

  listcategories(){
    return this.http.get<any[]>(this.BASEURL+"categories");
  }

  deletecategory(id:number){
    return this.http.delete<any>(this.BASEURL+"categories/"+id)
  }

  //customer
  register(data:any){
    return this.http.post<any>(this.BASEURL+"users",data);
  }
  registeradmin(data:any){
    return this.http.post<any>(this.BASEURL+"admin",data)
  }

  listcustomers(){
    return this.http.get<any[]>(this.BASEURL+"customers")
  }
  questions(){
    return this.http.get<any[]>(this.BASEURL+"questions")
  }
  
  // getcustomerdetails(id:any){
  //   return this.http.get<any>(this.BASEURL+"customers/"+id)
  // }
  getUserDetails(id:any){
    return this.http.get<any>(this.BASEURL+"users/"+id)
  }

  //products
  saveproduct(data:any){
    new HttpHeaders().set("Accept", "application/json");
    return this.http.post<any>(this.BASEURL+"products",data)
  }
  findQuestionById(id:any){
    return this.http.get<any>(this.BASEURL+"questions/"+id)
  }
  addAnswer(id:any,data:any){
    return this.http.post<any>(this.BASEURL+"questions/postanswer/"+id,data)
  }

  
  

 

  

  //wishlist
  

  

  deletefromwishlist(id:any){
    return this.http.delete<any>(this.BASEURL+"wishlist/"+id)
  }

  //cart
  addtocart(data:any){
    return this.http.post<any>(this.BASEURL+"cart",data)
  }

  getcart(id:any){
    return this.http.get<any[]>(this.BASEURL+"cart?custid="+id)
  }

  deletefromcart(id:any){
    return this.http.delete<any>(this.BASEURL+"cart/"+id)
  }

  updateqty(cartid:number,qty:number){
    return this.http.get<any>(this.BASEURL+"cart/updateqty?cartid="+cartid+"&qty="+qty);
  }

  //orders
  placeorder(data:any){
    return this.http.post<any>(this.BASEURL+"orders",data);
  }

  orderhistory(custid:any){
    return this.http.get<any[]>(this.BASEURL+"orders?custid="+custid);
  }

  allorders(){
    return this.http.get<any[]>(this.BASEURL+"orders");
  }
}
