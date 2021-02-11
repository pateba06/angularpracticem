import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kentucky',
  templateUrl: './kentucky.component.html',
  styleUrls: ['./kentucky.component.css']
})
export class KentuckyComponent implements OnInit {
  studentName:any;
  cityName:string;
  testArray:any=["Badal","Munesh","Shivam","Kaushal"];
  testArray1:any=[
    {name:"Badal", city:"kentucky"},
    {name:"sheetal", city:"india"},
    {name:"shivam", city:"lasvegas"},
    {name:"dhaval", city:"florida"},

  ];
  constructor() { }

  //setting up initial value
  ngOnInit(): void {
    this.studentName = "Badal patel";
    this.cityName ="New York";
   //we can defined fuction below and call it by including in ngOnInit.
    this.testFunction();
  }

  //then we changed it.
   changeCity(){
     this.cityName="India";
   }

   changeStudentName(){
    this.studentName ="Sheetal";
  }

   testFunction(){
     alert("Hello Badal");
   }

  ngOnDestroy(){
    alert ("by by");
    }

}
