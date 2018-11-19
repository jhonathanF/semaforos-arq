import { LightStyle } from './light-style';

export class PeopleTrafficLight {
    status: number;
    assetUrl: string;
    style: LightStyle;

    constructor(status: number, assetUrl: string, style: LightStyle) {
        this.status = status;
        this.assetUrl = assetUrl;
        this.style = style;
    }

    setAberto() {
        this.assetUrl = '../../../assets/semaforos/people/green.png';
    }

    setFechado() {
        this.assetUrl = '../../../assets/semaforos/people/red.png';
    }
}
