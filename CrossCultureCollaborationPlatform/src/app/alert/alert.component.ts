import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @ViewChild('alert', { static: true }) alert: ElementRef;

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

}
