import { Component, OnInit } from '@angular/core';
import { GenericHttpService } from '../../../../shared/services/generic-http/generic-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css']
})
export class TabTwoComponent implements OnInit {

  posts$: Object;

  constructor(private data: GenericHttpService) { }

  ngOnInit(): void {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
  }

  goPost(posts) {
    console.log('go Post....', posts);
  }

}
