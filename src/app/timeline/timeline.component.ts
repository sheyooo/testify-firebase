import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private afDb: AngularFirestore) { }

  ngOnInit() {
    this.afDb.collection('timeline').add({
      text: 'I\'m happy so happy',
      // user: userId
    });
  }

}
