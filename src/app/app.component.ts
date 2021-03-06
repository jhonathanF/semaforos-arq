import { Component, OnInit } from '@angular/core';
import { MenuAction } from './models/menu-action';
import { AppService } from './services/app.service';
import { ISAService } from './services/isa.service';
import { TrafficLightService } from './services/traffic-light.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front';
  menuActions: MenuAction[] = [];
  menuActionsHistory: MenuAction[] = [];
  constructor(
    private trafficLightService: TrafficLightService,
    private appService: AppService) { }

  ngOnInit() {
    this.menuActions.push(new MenuAction(1, 'Fechar Cruzamento de veiculos', 'Fecha os cruzamentos 1, 2, 6 e 7'));
    this.menuActions.push(new MenuAction(2, 'Abrir Cruzamento de veiculos', 'Abrir os cruzamentos 1, 2, 6 e 7'));
    this.menuActions.push(new MenuAction(3, 'Sinal de alerta', 'Liga o alerta'));
    this.menuActions.push(new MenuAction(4, 'Abrir cruzamento de pedestres', 'Abre os cruzamentos de pedestre'));
    this.menuActions.push(new MenuAction(5, 'Chegada de onibus', 'Faz com que o semaforo de onibus abra mais rápido'));
  }

  executeMenuAction(menuId: number) {
    const menuClicked = this.menuActions.find(menuAction => menuAction.id === menuId);
    menuClicked.createdAt = new Date();
    this.menuActionsHistory.push(menuClicked);

    this.trafficLightService.receberComando(menuClicked.name);
  }

  sidenavOpened() {
    return this.appService.sidenavOpened;
  }
}
