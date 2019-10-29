import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }

  getOrder()
  {
    return this.http.get('http://localhost:8083/order').pipe(
      map(responseData => {
const orderArray=[];
for(const key in responseData)
{
  if(responseData.hasOwnProperty(key))
  orderArray.push({...responseData[key],'id':"_id"})
}
return orderArray;
      })
    )
    
  }
  getOrderById(id)
  {
    return this.http.get(`http://localhost:8083/edit/order?id=${id}`)
  }

  postOrder(order){
    return this.http.post('http://localhost:8083/order',order)
  }

  editOrder(id,order)
  {
    return this.http.put(`http://localhost:8083/order?id=${id}`,order)
  }

  deleteOrder(id)
  {
    return this.http.delete(`http://localhost:8083/order?id=${id}`)
  }
}
