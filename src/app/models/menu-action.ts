export class MenuAction {
    id: number;
    name: string;
    description: string;
    createdAt: Date;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
