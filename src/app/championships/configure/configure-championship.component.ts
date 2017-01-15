import {Component, OnInit} from '@angular/core';
import {Championship} from '../../shared/entities/championship';
import {ChampionshipService} from '../../shared/services/championship.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'my-configure-championship',
    templateUrl: './configure-championship.component.html',
    styleUrls: ['./configure-championship.component.scss']
})
export class ConfigureChampionshipComponent implements OnInit {

    private championship: Championship;
    private formTitle = 'Configuration';

    constructor(private championshipService: ChampionshipService, private route: ActivatedRoute) {}

    ngOnInit() {

    }
}
