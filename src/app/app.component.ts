import { Component, Input } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment-4';
  private _flag : boolean = false ;
  get toggleValue(){
    return this._flag ; 
  }
  set toggleValue(value){
    this._flag = value ;
  }
  toggleChange(isCollapsed : boolean) {
      this._flag = isCollapsed ;
  }
  ngAfterViewInit() {
    feather.replace();
  }
}
