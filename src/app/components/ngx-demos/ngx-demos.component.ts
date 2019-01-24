import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ngx-demos',
  templateUrl: './ngx-demos.component.html',
  styleUrls: ['./ngx-demos.component.css']
})
export class NgxDemosComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  loading() {
    this.spinner.show();
    setTimeout(() => {
      }, 5000);
    this.spinner.hide();
  }
}
