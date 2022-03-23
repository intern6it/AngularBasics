import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynName:string="Aelis"

  myMethod(){
    return "My Channel name is APTALKSS "+this.dynName
  }

  enable:boolean=false;
  appStatus:boolean=false;
  status1="Online";
  status2="Offline";
}
