import { Component, OnInit } from '@angular/core';
import { GenericHttpService } from '../../../../shared/services/generic-http/generic-http.service';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {

  user$: Observable<any>;

  constructor(
    private _http: GenericHttpService,
    private _modalCtl: ModalController,
    private _navParams: NavParams
  ) { }

  ngOnInit() {
    const {user} = this._navParams.data;
    this.user$ = this._http.get('fakeApi', '/users/' + user.id);
  }

  dismiss() {
    this._modalCtl.dismiss('toto');
  }

}