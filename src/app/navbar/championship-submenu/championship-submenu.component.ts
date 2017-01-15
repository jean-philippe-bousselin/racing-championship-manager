import { Component }           from '@angular/core';
import { Championship }        from '../../shared/entities/championship';
import { ChampionshipService } from '../../shared/services/championship.service';
import { ActivatedRoute }      from '@angular/router';

@Component({
  selector: 'my-championship-submenu',
  templateUrl: './championship-submenu.component.html',
  styleUrls: ['./championship-submenu.component.scss']
})
export class ChampionshipSubmenuComponent {

  private championship: Championship;
  private errorMessage: string;

  constructor(private championshipService: ChampionshipService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getChampionship(this.route.snapshot.params['id']);
  }

  getChampionship(id) {
    this.championshipService.getChampionship(id)
       .subscribe(
         championship => this.championship = championship,
         error =>  this.errorMessage = <any>error,
         () => console.log(this.championship)
       );
  }

}
