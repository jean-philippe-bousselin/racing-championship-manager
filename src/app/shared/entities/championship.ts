import {Configuration} from './configuration';

export class Championship {
    id: number;
    name: string;
    season: string;
    pictureUrl: string
    configuration: Configuration;

    constructor(id?: number, name?: string, season?: string, pictureUrl?: string, configuration?: Configuration) {
        this.id = id;
        this.name = name;
        this.season = season;
        this.pictureUrl = pictureUrl ? pictureUrl : 'http://placekitten.com/g/400/200'; // Provide a default image ?
        this.configuration = configuration;
    }
}
