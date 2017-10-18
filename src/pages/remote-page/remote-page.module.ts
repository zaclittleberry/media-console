import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemotePage } from './remote-page';

@NgModule({
  declarations: [
    RemotePage,
  ],
  imports: [
    IonicPageModule.forChild(RemotePage),
  ],
  entryComponents: [
    RemotePage
  ]
})
export class RemotePageModule {}
