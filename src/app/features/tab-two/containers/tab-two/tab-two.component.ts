import { Component, OnInit } from '@angular/core';
import { GenericHttpService } from '../../../../shared/services/generic-http/generic-http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css']
})
export class TabTwoComponent implements OnInit {

  public posts$: Observable<any[]>;

  constructor(
    private _http: GenericHttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts(): void {
    this.posts$ = this._http.get('fakeApi', '/posts');
  }

  goPost(post): void {
    console.log('::: Go to post detail', post);
    this._router.navigate(['posts', post.id]);
  }
}
