import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from "@angular/service-worker";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {


    constructor(private swUpdate: SwUpdate) {

    }

    ngOnInit() {

      if(this.swUpdate.isEnabled) {
        console.log('Enabled');
        this.swUpdate.available.subscribe( () => {
          console.log('Available');
          if(confirm('New version is available. Load New Version?')) {
            console.log('Reload');
            window.location.reload();
          }
        });
      }
      
    }

}

