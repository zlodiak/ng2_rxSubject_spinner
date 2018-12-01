import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

	constructor(private spinnerService: SpinnerService) {

	}	

  ngOnInit() {
  }

  spinnerStart() {
		this.spinnerService.show();

		setTimeout(() => {
			this.spinnerService.hide();
		}, 2000);  	
  }

}
