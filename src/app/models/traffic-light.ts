import { PeopleTrafficLight } from './people-traffic-light';
import { LightStyle } from './light-style';
import { delay } from 'q';
export const ABERTO = 0;
export const FECHADO = 1;
export class TrafficLight {
    status: number;
    group: number;
    assetUrl: string;
    peopleTrafficLight: PeopleTrafficLight;
    style: LightStyle;

    constructor(status: number, group: number, assetUrl: string, peopleTrafficLight: PeopleTrafficLight, style: LightStyle) {
        this.status = status;
        this.group = group;
        this.assetUrl = assetUrl;
        this.peopleTrafficLight = peopleTrafficLight;
        this.style = style;
    }

    async changeStatus() {
        if (this.status === ABERTO) {
            this.setFechado();
        } else {
            this.setAberto();
        }
    }

    async setFechado() {
        this.setAssetAmarelo();
        await delay(2000);
        this.setAssetFechado();
        this.peopleTrafficLight.setAberto();
        this.status = FECHADO;
    }

    async  setAberto() {
        await delay(3000);
        this.setAssetAberto();
        this.peopleTrafficLight.setFechado();
        this.status = ABERTO;
    }

    setAssetFechado() {
        this.assetUrl = '../../../assets/semaforos/red.png';
    }

    setAssetAberto() {
        this.assetUrl = '../../../assets/semaforos/green.png';
    }

    setAssetAmarelo() {
        this.assetUrl = '../../../assets/semaforos/yellow.png';
    }
}
