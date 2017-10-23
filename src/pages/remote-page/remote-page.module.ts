import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemotePage } from './remote-page';
import { HorizontalNavigationComponent } from '../../components/horizontal-navigation';

@NgModule({
  declarations: [
    RemotePage,
    HorizontalNavigationComponent,
  ],
  imports: [
    IonicPageModule.forChild(RemotePage),
  ],
  entryComponents: [
    RemotePage
  ]
})
export class RemotePageModule {}
