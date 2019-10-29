import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  cname:string;
  caddress:string;
  cphone:number;
  cdate:string;
  ctotal:string;
  action:string;
  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
  ngOnInit() {
    console.log("DATA IS DATA",this.data);
    this.action = this.data.action;
    this.cname = this.data.orderId[0].customerName;
    this.caddress = this.data.orderId[0].customerAddress;
    this.cphone = this.data.orderId[0].customerPhone;
    this.cdate = this.data.orderId[0].orderDueDate;
    this.ctotal = this.data.orderId[0].orderTotal;
  }

  onSubmit(f:NgForm)
  {
    const order={
      'customerName':this.cname,
      'customerAddress':this.caddress,
      'customerPhone':this.cphone,
      'orderDueDate':this.cdate,
      'orderTotal':this.ctotal
    }
    console.log("order details",order);
    this.dialogRef.close(order);
  }

}
