import {Configuration} from './configuration';

export class Championship {

    name: string;
    season: string;
    configuration: Configuration;

    constructor(name?: string, season?: string, configuration?: Configuration) {
        this.name = name;
        this.season = season;
        this.configuration = configuration;
    }
}
