import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataService } from '../services/data.service';
import { DATA_API_URL } from '../services/constants';

@Component({
  templateUrl: 'app.html',
  providers: [
    DataService,
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'RemotePage';

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private dataService: DataService,
  ) {
    this.getDefaults();
    this.initializeApp();
    this.dataService.setDataApiUrl(DATA_API_URL);
  }

  getDefaults() {
  }

  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Set the nav root so back button doesn't show
    this.nav.setRoot(page.component);
  }
}
