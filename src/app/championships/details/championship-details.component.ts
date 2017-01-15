import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../shared/services/championship.service';
import { Championship } from '../../shared/entities/championship';

@Component({
    selector: 'my-championship-details',
    templateUrl: './championship-details.component.html',
    styleUrls: ['./championship-details.component.scss']
})
export class ChampionshipDetailsComponent implements OnInit {

    championship: Championship;
    errorMessage: string;

    constructor(private championshipService: ChampionshipService) {}

    ngOnInit() {  }

    getChampionship() {

      // @TODO supply id here
      // this.championshipService.getChampionship()
      //    .subscribe(
      //      championship => this.championship = championship,
      //      error =>  this.errorMessage = <any>error
      //    );
    }
}
