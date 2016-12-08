import {Component, OnInit} from '@angular/core';
import {Championship} from '../../shared/entities/championship';
import {Configuration} from '../../shared/entities/configuration';

@Component({
    selector: 'my-championships',
    templateUrl: './championships.component.html',
    styleUrls: ['./championships.component.scss']
})
export class ChampionshipsComponent implements OnInit {

    private championships: Array<Championship>;

    ngOnInit() {
        // TODO : récupération des championnats par rapport à l'utilisateur courant ?

        // MOCK TEMPORAIRE
        let scoreBoard: Map<number, number> = new Map<number, number>();
        scoreBoard.set(1, 100);
        scoreBoard.set(2, 80);
        scoreBoard.set(3, 50);
        let configuration: Configuration = new Configuration(25, scoreBoard);
        this.championships = new Array<Championship>();
        this.championships.push(new Championship('Championship 1', '2016', configuration));
        this.championships.push(new Championship('Championship 2', '2015', configuration));
        this.championships.push(new Championship('Championship 3', '2014', configuration));
        this.championships.push(new Championship('Championship 4', '2013', configuration));
        this.championships.push(new Championship('Championship 5', '2012', configuration));
    }
}
