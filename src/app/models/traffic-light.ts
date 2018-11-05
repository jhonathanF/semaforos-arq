import { PeopleTrafficLight } from './people-traffic-light';
import { LightStyle } from './light-style';

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
}
