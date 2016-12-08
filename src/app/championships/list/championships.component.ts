import {Component} from '@angular/core';
import {ChampionshipService} from '../../shared/services/championship.service';

@Component({
    selector: 'my-championships',
    templateUrl: './championships.component.html',
    styleUrls: ['./championships.component.scss']
})
export class ChampionshipsComponent {

    constructor(private championshipService: ChampionshipService) {}
}
