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
    private formTitle = 'Create a new championship';

    constructor(private championshipService: ChampionshipService) {}

    onSubmit() {
      console.log('on submit from AddChampionshipComponent');
    }
}
