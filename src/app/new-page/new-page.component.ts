import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  LeftSideTreeviewHeight: string="";


  ngOnInit() {
    var h = window.innerHeight;
    this.LeftSideTreeviewHeight = (h-100) + "px";
  }

}
