import {Component} from '@angular/core';
import {Championship} from '../../shared/entities/championship';

@Component({
    selector: 'my-add-championship',
    templateUrl: './add-championship.component.html',
    styleUrls: ['./add-championship.component.scss']
})
export class AddChampionshipComponent {

    private championship: Championship = new Championship();

    onSubmit() {
        if (this.championship.name && this.championship.season) {
            // TODO : Appel à ChampionshipService et persister le championnat !
        }
    }
}
