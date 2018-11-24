import { delay } from 'q';
import { interval, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LightStyle } from './light-style';
import { PeopleTrafficLight } from './people-traffic-light';
export const ABERTO = 0;
export const FECHADO = 1;
export const INTERMITENTE = 2;

export class TrafficLight {
    status: number;
    group: number;
    assetUrl: string;
    peopleTrafficLight: PeopleTrafficLight;
    style: LightStyle;

    isModoIntermitente: Subject<boolean> = new Subject<boolean>();
    tempo = 500;
    intervalo = interval(this.tempo);

    constructor(status: number, group: number, assetUrl: string, peopleTrafficLight: PeopleTrafficLight, style: LightStyle) {
        this.status = status;
        this.group = group;
        this.assetUrl = assetUrl;
        this.peopleTrafficLight = peopleTrafficLight;
        this.style = style;
    }

    async changeStatus() {
        this.isModoIntermitente.next(false);
        if (this.status === ABERTO) {
            this.setFechado();
        } else {
            this.setAberto();
        }
    }

    async setFechado() {
        this.isModoIntermitente.next(false);
        this.setAssetAmarelo();
        await delay(2000);
        this.setAssetFechado();
        this.peopleTrafficLight.setAberto();
        this.status = FECHADO;
    }

    async  setAberto() {
        this.isModoIntermitente.next(false);
        await delay(3000);
        this.setAssetAberto();
        this.peopleTrafficLight.setFechado();
        this.status = ABERTO;
    }

    modoIntermitente() {
        this.isModoIntermitente.next(true);
        let ligado: boolean = false;
        this.peopleTrafficLight.setFechado();
        this.intervalo.pipe(takeUntil(this.isModoIntermitente)).subscribe(() => {
            if (ligado) {
                this.setAssetAmarelo();
            } else {
                this.setAssetOff();
            }
            this.peopleTrafficLight.setFechado();
            ligado = !ligado;
        });
        this.status = INTERMITENTE;
    }

    setAssetOff() {
        this.assetUrl = '../../../assets/semaforos/off.png';
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
