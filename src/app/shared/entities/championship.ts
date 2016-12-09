import {Configuration} from './configuration';

export class Championship {
    id: number;
    name: string;
    season: string;
    configuration: Configuration;

    constructor(id?: number, name?: string, season?: string, configuration?: Configuration) {
        this.id = id;
        this.name = name;
        this.season = season;
        this.configuration = configuration;
    }
}
