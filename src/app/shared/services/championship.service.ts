import {Injectable, } from '@angular/core';
import {Championship} from '../entities/championship';
import {Configuration} from '../entities/configuration';

@Injectable()
export class ChampionshipService {

    private championships: Array<Championship>;

    fetchAll() {

    }

    getAll(): Array<Championship> {
        if (!this.championships) {
            this.fetchAll();
        }

        return this.championships;
    }

    add(championship: Championship) {
        this.championships.push(championship);
    }

    get(id: number): Championship {
        let index = this.championships.map(championship => championship.getId()).indexOf(id);

        if  (index !== -1) {
            return this.championships[index];
        }
    }
}
