import { Component, OnInit } from '@angular/core';
import { GenericHttpService } from "../../../../shared/generic-http/generic-http.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css']
})
export class TabTwoComponent implements OnInit {

  posts$: Object;
  photos$: Object;

  constructor(private data: GenericHttpService) { }

  ngOnInit():void {
    this.data.getUsers().subscribe(
      data => this.posts$ = data
    )
  }

  goPost(posts):void{
    console.log('Go post......', posts)
  }

}
