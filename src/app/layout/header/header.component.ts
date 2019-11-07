import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('currentModule') currentModule?: string = 'main';
  constructor() { }

  ngOnInit() {
    //console.log(this.currentModule);

  }

}
