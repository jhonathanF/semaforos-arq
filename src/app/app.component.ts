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
    this.menuActions.push(new MenuAction(5, 'Fechar Cruzamento de pedestres', 'Fecha os cruzamentos de pedestre'));
    this.menuActions.push(new MenuAction(6, 'Sinal de alerta para pedestres', 'Liga o alerta para os pedestres'));
    this.menuActions.push(new MenuAction(7, 'Abrir semaforo virar a esquerda', 'Abre o semaforo entre 6 e 2'));
    this.menuActions.push(new MenuAction(8, 'Fechar semaforo virar a esquerda', 'Fecha o semaforo entre 6 e 2'));
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
