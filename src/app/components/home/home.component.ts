import { Component, OnInit } from '@angular/core';
import { TrafficLight } from 'src/app/models/traffic-light';
import { PeopleTrafficLight } from 'src/app/models/people-traffic-light';
import { LightStyle } from 'src/app/models/light-style';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trafficLights: TrafficLight[] = [];
  intervalo = interval(3000);
  cont = 0;
  constructor() { }

  ngOnInit() {
    this.trafficLights.push(new TrafficLight(0, 0, '../../../assets/semaforos/red.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/green.png'),
      new LightStyle('340px', '0px', '0px', '390px', '25px', '68px', '-130deg')));

    this.trafficLights.push(new TrafficLight(0, 0, '../../../assets/semaforos/yellow.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/green.png'),
      new LightStyle('435px', '0px', '0px', '345px', '25px', '68px', '-70deg')));

    this.trafficLights.push(new TrafficLight(0, 0, '../../../assets/semaforos/yellow.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/green.png'),
      new LightStyle('445px', '0px', '0px', '505px', '25px', '68px', '-95deg')));

    this.trafficLights.push(new TrafficLight(0, 0, '../../../assets/semaforos/green.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/green.png'),
      new LightStyle('410px', '0px', '0px', '750px', '25px', '68px', '-35deg')));
    this.trafficLights.push(new TrafficLight(0, 0, '../../../assets/semaforos/green.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/green.png'),
      new LightStyle('450px', '0px', '0px', '680px', '25px', '68px', '-60deg')));


    this.trafficLights.push(new TrafficLight(0, 0, '../../../assets/semaforos/green.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/green.png'),
      new LightStyle('530px', '0px', '0px', '490px', '25px', '68px', '35deg')));

    this.trafficLights.push(new TrafficLight(0, 0, '../../../assets/semaforos/green.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/green.png'),
      new LightStyle('530px', '0px', '0px', '260px', '25px', '68px', '40deg')));

    this.intervalo.subscribe(() => {
      if (this.cont === 0) {
        this.trafficLights[0].assetUrl = '../../../assets/semaforos/green.png';
      } else if (this.cont === 1) {
        this.trafficLights[0].assetUrl = '../../../assets/semaforos/red.png';
      } else {
        this.trafficLights[0].assetUrl = '../../../assets/semaforos/yellow.png';
      }
      this.cont++;

      if (this.cont > 2) this.cont = 0;
    }
    );
  }

}
