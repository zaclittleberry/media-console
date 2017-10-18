import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, } from 'ionic-angular';
import { DataService } from '../../services/data.service';

@IonicPage({
  segment: 'remote'
})
@Component({
  selector: 'remote-page',
  templateUrl: 'remote-page.html'
})
export class RemotePage {

  posts: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private dataService: DataService,
  ) {
    this.getDefaults();
  }

  getDefaults() {

  }

  ngOnInit() {
    this.getPosts();
  }

}
