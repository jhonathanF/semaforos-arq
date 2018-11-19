import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { TrafficLightService } from 'src/app/services/traffic-light.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private trafficLightService: TrafficLightService,
    private appService: AppService) { }

  ngOnInit() {
  }

  toggleSide() {
    this.appService.toggleSidenv();
  }

  isModoAutomatico(): boolean {
    return this.trafficLightService.modoAutomatico;
  }

  voltarModoAutomatico() {
    this.trafficLightService.voltarModoAutomatico();
  }

}
