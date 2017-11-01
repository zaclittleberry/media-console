import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class DataService {
  http: any;
  dataApiUrl: String;

  constructor(http: Http) {
    this.http = http;
  }

  public setDataApiUrl(dataApiUrl) {
    this.dataApiUrl = dataApiUrl;
  }

  //////////////////////////////////////////////////////////////////////////////

  /**
  * This service should ONLY contain methods calling the Data API
  **/

  //////////////////////////////////////////////////////////////////////////////

  /**
  * /receiver/system-power
  **/

  receiverPowerStandby() {
    return this.http.get(this.dataApiUrl + '/receiver/system-power/standby')
      .map(res => res.json());
  }

  receiverPowerOn() {
    return this.http.get(this.dataApiUrl + '/receiver/system-power/on')
      .map(res => res.json());
  }

  receiverPowerStatus() {
    return this.http.get(this.dataApiUrl + '/receiver/system-power/status')
      .map(res => res.json());
  }

  /**
  * /receiver/audio-muting
  **/

  receiverMutingOff() {
    return this.http.get(this.dataApiUrl + '/receiver/audio-muting/off')
      .map(res => res.json());
  }

  receiverMutingOn() {
    return this.http.get(this.dataApiUrl + '/receiver/audio-muting/on')
      .map(res => res.json());
  }

  receiverMutingToggle() {
    return this.http.get(this.dataApiUrl + '/receiver/audio-muting/toggle')
      .map(res => res.json());
  }

  receiverMutingStatus() {
    return this.http.get(this.dataApiUrl + '/receiver/audio-muting/status')
      .map(res => res.json());
  }

  /**
  * /receiver/master-volume
  **/

  receiverVolumeUp() {
    return this.http.get(this.dataApiUrl + '/receiver/master-volume/up')
      .map(res => res.json());
  }

  receiverVolumeDown() {
    return this.http.get(this.dataApiUrl + '/receiver/master-volume/down')
      .map(res => res.json());
  }

  receiverVolumeUpMore() {
    return this.http.get(this.dataApiUrl + '/receiver/master-volume/up-more')
      .map(res => res.json());
  }

  receiverVolumeDownMore() {
    return this.http.get(this.dataApiUrl + '/receiver/master-volume/down-more')
      .map(res => res.json());
  }

  receiverVolumeStatus() {
    return this.http.get(this.dataApiUrl + '/receiver/master-volume/status')
      .map(res => res.json());
  }

  receiverVolumeSet(level) {
    return this.http.get(this.dataApiUrl + '/receiver/master-volume/' + level)
      .map(res => res.json());
  }

  /**
  * /receiver/input-selector
  **/

  receiverInputUp() {
    return this.http.get(this.dataApiUrl + '/receiver/input-selector/up')
      .map(res => res.json());
  }

  receiverInputDown() {
    return this.http.get(this.dataApiUrl + '/receiver/input-selector/down')
      .map(res => res.json());
  }

  receiverInputStatus() {
    return this.http.get(this.dataApiUrl + '/receiver/input-selector/status')
      .map(res => res.json());
  }

  receiverInputInputs() {
    return this.http.get(this.dataApiUrl + '/receiver/input-selector/inputs')
      .map(res => res.json());
  }

  receiverInputSet(input) {
    return this.http.get(this.dataApiUrl + '/receiver/input-selector/' + input)
      .map(res => res.json());
  }

  /**
  * /receiver/setup-operation
  **/

  receiverSetupUp() {
    return this.http.get(this.dataApiUrl + '/receiver/setup-operation/up')
      .map(res => res.json());
  }

  receiverSetupDown() {
    return this.http.get(this.dataApiUrl + '/receiver/setup-operation/down')
      .map(res => res.json());
  }

  receiverSetupRight() {
    return this.http.get(this.dataApiUrl + '/receiver/setup-operation/right')
      .map(res => res.json());
  }

  receiverSetupLeft() {
    return this.http.get(this.dataApiUrl + '/receiver/setup-operation/left')
      .map(res => res.json());
  }

  receiverSetupEnter() {
    return this.http.get(this.dataApiUrl + '/receiver/setup-operation/enter')
      .map(res => res.json());
  }

  receiverSetupExit() {
    return this.http.get(this.dataApiUrl + '/receiver/setup-operation/exit')
      .map(res => res.json());
  }

  receiverSetupHome() {
    return this.http.get(this.dataApiUrl + '/receiver/setup-operation/home')
      .map(res => res.json());
  }

  receiverSetupQuick() {
    return this.http.get(this.dataApiUrl + '/receiver/setup-operation/quick')
      .map(res => res.json());
  }

  /**
  * /receiver/tuning-command
  **/

  receiverTuningUp() {
    return this.http.get(this.dataApiUrl + '/receiver/tuning-command/up')
      .map(res => res.json());
  }

  receiverTuningDown() {
    return this.http.get(this.dataApiUrl + '/receiver/tuning-command/down')
      .map(res => res.json());
  }
  //////////////////////////////////////////////////////////////////////////////

}
