export class Championship {

    constructor(private id?: number, private name?: string) {
        this.id = id;
        this.name = name;
    }

    public getId() {
      return this.id;
    }

    public getName() {
      return this.name;
    }

}
