import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { MaterialsModule } from './material-module.module';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
