import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../shared/services/championship.service';
import { Championship } from '../../shared/entities/championship';

@Component({
    selector: 'my-championships',
    templateUrl: './championships.component.html',
    styleUrls: ['./championships.component.scss']
})
export class ChampionshipsComponent implements OnInit {

    errorMessage: string;
    championships: Championship[];

    constructor(private championshipService: ChampionshipService) {}

    ngOnInit() { this.getChampionships(); }

    getChampionships() {
      this.championshipService.getChampionships()
         .subscribe(
           championships => this.championships = championships,
           error =>  this.errorMessage = <any>error
         );
    }
}
