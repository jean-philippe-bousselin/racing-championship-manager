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

    constructor(private championshipService: ChampionshipService, private route: ActivatedRoute) {}

    ngOnInit() {
        let championshipId: number;

        this.route.params.subscribe(params => {
            championshipId = +params['id'];
        });

        if (championshipId) {
            this.championship = this.championshipService.get(championshipId);

            if (this.championship) {
                console.log('Championship =', this.championship);
            }
        }
    }
}
