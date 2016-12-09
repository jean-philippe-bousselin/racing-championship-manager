import { RouterModule, Routes }   from '@angular/router';
import { ChampionshipSubmenuComponent }       from './navbar/championship-submenu/championship-submenu.component';
import { HomeComponent }          from './home/home.component';
import { ChampionshipsComponent } from './championships/list/championships.component';
import { StandingsComponent }     from './championships/standings/standings.component';
import { AboutComponent }         from './about/about.component';
import {ConfigureChampionshipComponent} from './championships/configure/configure-championship.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent},
  { path: 'championships',
    children: [
      { path: '', component: ChampionshipsComponent },
      { path: '', outlet: 'submenu', component: ChampionshipSubmenuComponent },
      { path: 'standings', component: StandingsComponent },
      { path: ':id/configure', component: ConfigureChampionshipComponent },
    ]
  },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
