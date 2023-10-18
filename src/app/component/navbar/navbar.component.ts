import { Component, EventEmitter, Output } from '@angular/core';
import { eventListeners } from '@popperjs/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isCollapsed = true ;
  @Output() flagToApp : EventEmitter<any>  = new EventEmitter() ;
  changeToggle() : void {
    this.isCollapsed = !this.isCollapsed; 
    this.flagToApp.emit(this.isCollapsed) ; 
  }

}
