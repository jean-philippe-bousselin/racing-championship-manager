import {Component, OnInit} from '@angular/core';
import {ChampionshipService} from '../../shared/services/championship.service';
import {Championship} from '../../shared/entities/championship';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'my-championship-details',
    templateUrl: './championship-details.component.html',
    styleUrls: ['./championship-details.component.scss']
})
export class ChampionshipDetailsComponent implements OnInit {

    private championship: Championship;

    constructor(private championshipService: ChampionshipService, private route: ActivatedRoute) {}

    ngOnInit() {
        
    }
}
