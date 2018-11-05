export class LightStyle {
    top: string;
    right: string;
    bottom: string;
    left: string;
    width: string;
    height: string;
    rotation: string;

    constructor(top: string, right: string, bottom: string, left: string, width?: string, height?: string, rotation?: string) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.width = width;
        this.height = height;
        if (rotation) {
            this.rotation = rotation;
        } else {
            this.rotation = '0deg';
        }
    }
}
