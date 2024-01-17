import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @BlockUI() blockUI!: NgBlockUI;

  startBlock(): void {
    this.blockUI.start('Loading...');
    setTimeout(() => {
      this.blockUI.stop();
    }, 2500);
  }
}
