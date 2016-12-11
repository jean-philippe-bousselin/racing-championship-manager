export class Configuration {

    minimumLapsPercent: number;
    scoreBoard: Map <number, number>;

    constructor(minimumLapsPercent: number, scoreBoard: Map <number, number>) {
            this.minimumLapsPercent = minimumLapsPercent;
            this.scoreBoard = scoreBoard;
    }
}
