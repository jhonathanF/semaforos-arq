import { Injectable } from '@angular/core';
import { PeopleTrafficLight } from '../models/people-traffic-light';
import { TrafficLight, FECHADO, ABERTO } from '../models/traffic-light';
import { LightStyle } from '../models/light-style';
import { ISAService } from './isa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightService {
  trafficLights: TrafficLight[] = [];
  modoAutomatico: boolean = true;
  constructor(
    private snackBar: MatSnackBar,
    private isaService: ISAService
  ) { }

  setTrafficLight() {
    this.trafficLights = [];
    this.trafficLights.push(new TrafficLight(FECHADO, 1, '../../../assets/semaforos/red.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/people/green.png',
        new LightStyle('296px', '0px', '0px', '204px', '30px', '65px', '-130deg')),
      new LightStyle('340px', '0px', '0px', '390px', '25px', '68px', '-130deg')));

    this.trafficLights.push(new TrafficLight(ABERTO, 0, '../../../assets/semaforos/green.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/people/red.png',
        new LightStyle('399px', '0px', '0px', '184px', '30px', '65px', '-70deg')),
      new LightStyle('435px', '0px', '0px', '345px', '25px', '68px', '-70deg')));

    this.trafficLights.push(new TrafficLight(ABERTO, 0, '../../../assets/semaforos/green.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/people/red.png',
        new LightStyle('401px', '0px', '0px', '328px', '30px', '65px', '-95deg')),
      new LightStyle('445px', '0px', '0px', '505px', '25px', '68px', '-95deg')));

    this.trafficLights.push(new TrafficLight(ABERTO, 0, '../../../assets/semaforos/green.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/people/red.png',
        new LightStyle('388px', '0px', '0px', '591px', '30px', '65px', '-35deg')),
      new LightStyle('410px', '0px', '0px', '750px', '25px', '68px', '-35deg')));

    this.trafficLights.push(new TrafficLight(ABERTO, 0, '../../../assets/semaforos/green.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/people/red.png',
        new LightStyle('426px', '0px', '0px', '506px', '30px', '65px', '-60deg')),
      new LightStyle('460px', '0px', '0px', '680px', '25px', '68px', '-63deg')));

    this.trafficLights.push(new TrafficLight(FECHADO, 1, '../../../assets/semaforos/red.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/people/green.png',
        new LightStyle('539px', '0px', '0px', '306px', '30px', '65px', '35deg')),
      new LightStyle('530px', '0px', '0px', '490px', '25px', '68px', '35deg')));

    this.trafficLights.push(new TrafficLight(FECHADO, 2, '../../../assets/semaforos/red.png',
      new PeopleTrafficLight(1, '../../../assets/semaforos/people/green.png',
        new LightStyle('541px', '0px', '0px', '68px', '30px', '65px', '40deg')),
      new LightStyle('530px', '0px', '0px', '260px', '25px', '68px', '40deg')));

  }

  voltarModoAutomatico() {
    this.isaService.voltarModoAutomatico(this.trafficLights);
    this.modoAutomatico = true;
  }

  changeTrafficStatus() {
    if (this.modoAutomatico) {
      this.trafficLights.forEach(tl => {
        tl.changeStatus();
      });
    }
  }

  receberComando(comando: string) {
    if (this.isaService.validarComando(comando)) {
      this.modoAutomatico = false;
      this.isaService.receberComando(this.trafficLights, comando);
    } else {
      this.snackBar.open('Comando Inválido!', null, { duration: 3000 });
    }
  }

  inverterTrafficLight(trafficLight: TrafficLight) {
    this.modoAutomatico = false;
    this.isaService.inverterTrafficLight(trafficLight);
  }
}
