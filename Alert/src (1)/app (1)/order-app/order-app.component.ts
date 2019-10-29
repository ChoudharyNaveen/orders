import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormModalComponent } from '../form-modal/form-modal.component'
import { HttpClient } from '@angular/common/http'; 
import { OrderServiceService } from '../order-service.service'


export interface order {
  orderNumber: number;
  customerName: string;
  customerAddress: string;
  customerPhone: number;
  orderDue:string;
  orderTotal:number
}


@Component({
  selector: 'app-order-app',
  templateUrl: './order-app.component.html',
  styleUrls: ['./order-app.component.css']
})
export class OrderAppComponent implements OnInit {
  dataSource: order[] = []; 
  action:string;  
  editId:number;
  constructor(public dialog: MatDialog,private http:HttpClient,private orderService:OrderServiceService) { }
  ngOnInit() {
  this.getOrders();
  }
  getOrders()
  {
    this.orderService.getOrder().subscribe((item)=>
    {
      console.log("item",item);
      this.dataSource = item;
    })
  }
  
  openDialog(order,Action): void {
    var obj;
if(this.action != "Edit Order")
{
   obj={
      width: '250px',
      data:{action:Action}
    }
  }
  else{
    obj={
      width: '250px',
      data: {orderId:order,action:Action}
    }
  }
    const dialogRef = this.dialog.open(FormModalComponent,obj );
    dialogRef.afterClosed().subscribe(result => {
      if(this.action != "Edit Order")
      {
      this.orderService.postOrder(result).subscribe(order => {
        console.log("After Insertion",order);
        this.getOrders();
      })
    }
    else{
        this.orderService.editOrder(this.editId,result).subscribe(order =>{
          console.log("After Updation",order);
          this.getOrders();
        })
    }
    });
  }

  newOrder(){
    this.action="Add Order";
    this.editOrder=null;
    this.openDialog({},'Add Order');

  }

  editOrder(order)
  {
    this.editId=order._id;
    this.orderService.getOrderById(order._id).subscribe((order)=>{
      this.openDialog(order,'Edit Order')
      this.action="Edit Order";
    })
  }

  deleteOrder(order)
  {
   const answer = confirm("Are you sure you want to delete...?");
   if(answer)
   {
this.orderService.deleteOrder(order._id).subscribe(order=>{
  this.getOrders();
})
   }
  }

}
 

