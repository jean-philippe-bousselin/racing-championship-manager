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
        
    }
}
