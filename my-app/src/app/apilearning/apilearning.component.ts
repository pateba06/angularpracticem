import { Component, OnInit } from '@angular/core';
import {ServicetestService} from './../servicetest.service';

@Component({
  selector: 'app-apilearning',
  templateUrl: './apilearning.component.html',
  styleUrls: ['./apilearning.component.css']
})
export class ApilearningComponent implements OnInit {
   datatest:any=[];
  constructor( private _service:ServicetestService) { } //calling the class and storing into object

  ngOnInit(): void {
  this._service.getdata().subscribe(data=>this.datatest=data);
  }

  
}
