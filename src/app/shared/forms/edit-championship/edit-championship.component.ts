import { Component, Input } from '@angular/core';
import { Championship } from '../../entities/championship';
import { ChampionshipService } from '../../services/championship.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-edit-championship',
    templateUrl: './edit-championship.component.html',
    styleUrls: ['./edit-championship.component.scss']
})
export class EditChampionshipComponent {

    @Input() championship: Championship;
    @Input() formTitle: string;

    constructor(private router: Router, private championshipService: ChampionshipService) {}

    onSubmit() {

      this.championshipService.upsert(this.championship)
        .subscribe(
          championship => this.championship = championship,
          error => console.log(error),
          () => this.router.navigate(['championships/', this.championship.id])
        )

      return;

    }
}
