import { RouterModule, Routes }           from '@angular/router';
import { ChampionshipSubmenuComponent }   from './navbar/championship-submenu/championship-submenu.component';
import { HomeComponent }                  from './home/home.component';
import { ChampionshipsComponent }         from './championships/list/championships.component';
import { StandingsComponent }             from './championships/standings/standings.component';
import { AddSessionComponent }            from './sessions/add/add-session.component';
import { AboutComponent }                 from './about/about.component';
import { ConfigureChampionshipComponent } from './championships/configure/configure-championship.component';
import { ChampionshipDetailsComponent }   from './championships/details/championship-details.component';
import { AddChampionshipComponent }       from './championships/add/add-championship.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent},
  { path: 'championships',
    children: [
      { path: '', component: ChampionshipsComponent },
      { path: 'add', component: AddChampionshipComponent },
      { path: ':id', children: [
        { path: '', component: ChampionshipDetailsComponent },
        { path: 'standings', component: StandingsComponent },
        { path: 'add-session', component: AddSessionComponent },
        { path: 'configure', component: ConfigureChampionshipComponent }
      ] }
    ]
  },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
