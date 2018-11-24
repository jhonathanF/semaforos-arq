import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { TrafficLightService } from 'src/app/services/traffic-light.service';
import { TrafficLight } from 'src/app/models/traffic-light';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  comando: string = '';
  tempo = 10000;
  intervalo = interval(this.tempo);
  constructor(
    private trafficLightService: TrafficLightService
  ) { }

  ngOnInit() {
    this.setTrafficLights();
    this.intervalo.subscribe(() => {
      this.trafficLightService.changeTrafficStatus();
    }
    );
  }

  trafficLights() {
    return this.trafficLightService.trafficLights;
  }

  executarComando() {
    this.trafficLightService.receberComando(this.comando);
    this.comando = '';
  }

  setTrafficLights() {
    this.trafficLightService.setTrafficLight();
  }

  inverterTrafficLight(trafficLight: TrafficLight) {
    this.trafficLightService.inverterTrafficLight(trafficLight);
  }
}
