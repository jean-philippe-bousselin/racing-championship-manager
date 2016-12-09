import {Component, Input} from '@angular/core';
import {Championship} from '../../entities/championship';
import {ChampionshipService} from '../../services/championship.service';

@Component({
    selector: 'my-edit-championship',
    templateUrl: './edit-championship.component.html',
    styleUrls: ['./edit-championship.component.scss']
})
export class EditChampionshipComponent {

    @Input() championship: Championship;
    @Input() formTitle: string;

    constructor(private championshipService: ChampionshipService) {}

    onSubmit() {
        if (this.championship.name && this.championship.season) {
            this.championship.id = Math.round(Math.random() * (20 - 10) + 10); // TEMPORARY, OF COURSE...
            this.championshipService.add(this.championship); // TODO : voir comment gérer le cas UPDATE/ADD ?!
        }
    }
}
