import { Injectable } from '@angular/core';
import { TrafficLight } from '../models/traffic-light';

@Injectable({
  providedIn: 'root'
})
export class ISAService {

  comandos: string[] = ['fechar cruzamento de veiculos',
    'abrir cruzamento de veiculos', 'sinal de alerta', 'abrir cruzamento de pedestres',
    'fechar cruzamento de pedestres', 'sinal de alerta para pedestres', 'abrir semaforo virar a esquerda',
    'fechar semaforo virar a esquerda'
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
        tl.setFechado();
      }
    });
  }

  fecharCruzamentoVeiculos(trafficLights: TrafficLight[]) {
    trafficLights.forEach(tl => {
      if (tl.group === 2) {
        tl.setAberto();
      } else {
        tl.setFechado();
      }
    });
  }
}
