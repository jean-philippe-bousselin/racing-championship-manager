import {Component} from '@angular/core';
import '../style/app.scss';
import {ChampionshipService} from './shared/services/championship.service';

@Component({
  selector: 'my-rcm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ChampionshipService]
})
export class AppComponent {

}
