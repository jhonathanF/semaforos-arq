import { Injectable } from '@angular/core';
import { TrafficLight, FECHADO } from '../models/traffic-light';
import { interval } from 'rxjs';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ISAService {
  tempo = 10000;
  intervalo = interval(this.tempo);
  comandos: string[] = ['fechar cruzamento de veiculos',
    'abrir cruzamento de veiculos', 'sinal de alerta', 'abrir cruzamento de pedestres', 'chegada de onibus',
    'fechar cruzamento de pedestres', 'sinal de alerta para pedestres', 'abrir semaforo virar a esquerda',
    'fechar semaforo virar a esquerda',
  ];
  constructor() { }

  validarComando(comando: string): boolean {
    return this.comandos.includes(comando.toLowerCase());
  }

  receberComando(trafficLights: TrafficLight[], comando: string) {
    switch (comando.toLowerCase()) {
      case this.comandos[0]:
        this.fecharCruzamentoVeiculos(trafficLights);
        break;
      case this.comandos[1]:
        this.abrirCruzamentoVeiculos(trafficLights);
        break;
      case this.comandos[2]:
        this.sinalAlerta(trafficLights);
        break;
      case this.comandos[3]:
        this.abrirSemaforosPedestres(trafficLights);
        break;
      case this.comandos[4]:
        this.chegadaDeOnibus(trafficLights);
        break;
      default:
        break;
    }
  }

  inverterTrafficLight(trafficLight: TrafficLight) {
    trafficLight.changeStatus();
  }

  voltarModoAutomatico(trafficLight: TrafficLight[]) {
    trafficLight.forEach(tl => {
      if (tl.group === 0) {
        tl.setAberto();
      } else {
        if (tl.status !== FECHADO) {
          tl.setFechado();
        }
      }
    });
  }

  fecharCruzamentoVeiculos(trafficLights: TrafficLight[]) {
    trafficLights.forEach(tl => {
      if (tl.group === 2) {
        tl.setAberto();
      } else {
        if (tl.status !== FECHADO) {
          tl.setFechado();
        }
      }
    });
  }

  abrirCruzamentoVeiculos(trafficLights: TrafficLight[]) {
    trafficLights.forEach(tl => {
      if (tl.group === 2) {
        if (tl.status !== FECHADO) {
          tl.setFechado();
        }
      } else {
        tl.setAberto();
      }
    });
  }

  abrirSemaforosPedestres(trafficLights: TrafficLight[]) {
    trafficLights.forEach(tl => {
      if (tl.status !== FECHADO) {
        tl.setFechado();
      }
    });
  }

  sinalAlerta(trafficLights: TrafficLight[]) {
    trafficLights.forEach(tl => {
      if (tl.status !== FECHADO) {
        tl.setFechado();
      }
      tl.modoIntermitente();
    });
  }

  async chegadaDeOnibus(trafficLights: TrafficLight[]) {
    await delay(1000);
    trafficLights.forEach(tl => {
      if (tl.group === 2 || tl.group === 1) {
        tl.setAberto();
      } else {
        if (tl.status !== FECHADO) {
          tl.setFechado();
        }
      }
    });
  }

}
