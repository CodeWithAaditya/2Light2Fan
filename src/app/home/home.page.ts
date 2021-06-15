import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  status: any;

  public get allStatus(): boolean {
    console.log(this.status.fan1 && this.status.fan2 && this.status.light1 && this.status.light2);
    return this.status.fan1 && this.status.fan2 && this.status.light1 && this.status.light2;
  }

  constructor(private cmdService: CommandService) {

  }

  refreshStatus() {
    this.cmdService.getStatus().subscribe(response => {
      console.log(response);
      this.status = response;
    });
  }

  ngOnInit() {
    this.refreshStatus();
  }

  fan1(event) {
    if (event.detail.checked === true) {
      this.cmdService.fan1on();
      this.refreshStatus();
    }
    else {
      this.cmdService.fan1off();
      this.refreshStatus();
    }
  }

  fan2(event) {
    if (event.detail.checked === true) {
      this.cmdService.fan2on();
      this.refreshStatus();
    }
    else {
      this.cmdService.fan2off();
      this.refreshStatus();
    }
  }

  light1(event) {
    if (event.detail.checked === true) {
      this.cmdService.light1on();
      this.refreshStatus();
    }
    else {
      this.cmdService.light1off();
      this.refreshStatus();
    }
  }

  light2(event) {
    if (event.detail.checked === true) {
      this.cmdService.light2on();
      this.refreshStatus();
    }
    else {
      this.cmdService.light2off();
      this.refreshStatus();
    }
  }

  all(event) {
    if (event.detail.checked === true) {
      this.cmdService.allon();
      this.refreshStatus();
    }
    else {
      this.cmdService.alloff();
      this.refreshStatus();
    }
  }
}
