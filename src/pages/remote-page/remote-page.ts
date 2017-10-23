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

  inputs: any;
  volume: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private dataService: DataService,
  ) {
    this.getDefaults();
  }

  getDefaults() {
    this.receiverInputInputs();
    this.volume = 40;
  }

  ngOnInit() {

  }

  /**
  * /receiver/system-power
  **/

  receiverPowerStandby() {
    console.log('works');
    this.dataService.receiverPowerStandby().subscribe(response => {

    });
  }

  receiverPowerOn() {
    this.dataService.receiverPowerOn().subscribe(response => {

    });
  }

  /**
  * /receiver/audio-muting
  **/

  receiverMutingOff() {
    this.dataService.receiverMutingOff().subscribe(response => {

    });
  }

  receiverMutingOn() {
    this.dataService.receiverMutingOn().subscribe(response => {

    });
  }

  receiverMutingToggle() {
    this.dataService.receiverMutingToggle().subscribe(response => {

    });
  }

  /**
  * /receiver/master-volume
  **/

  receiverVolumeUp() {
    this.dataService.receiverVolumeUp().subscribe(response => {

    });
  }

  receiverVolumeDown() {
    this.dataService.receiverVolumeDown().subscribe(response => {

    });
  }

  receiverVolumeUpMore() {
    this.dataService.receiverVolumeUpMore().subscribe(response => {

    });
  }

  receiverVolumeDownMore() {
    this.dataService.receiverVolumeDownMore().subscribe(response => {

    });
  }

  receiverVolumeSet(level) {
    this.dataService.receiverVolumeSet(level).subscribe(response => {

    });
  }

  /**
  * /receiver/input-selector
  **/

  receiverInputUp() {
    this.dataService.receiverInputUp().subscribe(response => {

    });
  }

  receiverInputDown() {
    this.dataService.receiverInputDown().subscribe(response => {

    });
  }

  receiverInputInputs() {
    this.dataService.receiverInputInputs().subscribe(response => {
      this.inputs = response;
    });
  }

  receiverInputSet(input) {
    this.dataService.receiverInputSet(input).subscribe(response => {

    });
  }

}
