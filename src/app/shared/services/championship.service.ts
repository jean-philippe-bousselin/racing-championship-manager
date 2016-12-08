import {Injectable, } from '@angular/core';
import {Championship} from '../entities/championship';
import {Configuration} from '../entities/configuration';

@Injectable()
export class ChampionshipService {

    private championships: Array<Championship>;

    fetchAll() {
        // TODO : récupération des championnats par rapport à l'utilisateur courant !

        // MOCK TEMPORAIRE EN ATTENDANT REQUÊTE AU BACKEND
        let scoreBoard: Map<number, number> = new Map<number, number>();
        scoreBoard.set(1, 100);
        scoreBoard.set(2, 80);
        scoreBoard.set(3, 50);
        let configuration: Configuration = new Configuration(25, scoreBoard);
        let championships = new Array<Championship>();
        championships.push(new Championship('Championship 1', '2016', configuration));
        championships.push(new Championship('Championship 2', '2015', configuration));
        championships.push(new Championship('Championship 3', '2014', configuration));
        championships.push(new Championship('Championship 4', '2013', configuration));
        championships.push(new Championship('Championship 5', '2012', configuration));

        this.championships = championships;
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
}
