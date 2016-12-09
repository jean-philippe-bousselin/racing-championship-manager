import {Component} from '@angular/core';
import {Championship} from '../../shared/entities/championship';
import {ChampionshipService} from '../../shared/services/championship.service';

@Component({
    selector: 'my-add-championship',
    templateUrl: './add-championship.component.html',
    styleUrls: ['./add-championship.component.scss']
})
export class AddChampionshipComponent {

    private championship: Championship = new Championship();

    constructor(private championshipService: ChampionshipService) {}

    onSubmit() {
        if (this.championship.name && this.championship.season) {
            this.championship.id = Math.round(Math.random() * (20 - 10) + 10); // TEMPORARY, OF COURSE...
            this.championshipService.add(this.championship);
        }
    }
}
