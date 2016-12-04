import { RouterModule, Routes }   from '@angular/router';
import { HomeComponent }          from './home/home.component';
import { ChampionshipsComponent } from './championships/list/championships.component';
import { StandingsComponent }     from './championships/standings/standings.component';
import { AboutComponent }         from './about/about.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent},
  { path: 'championships',
    children: [
      { path: '', component: ChampionshipsComponent },
      { path: 'standings', component: StandingsComponent }
    ]
  },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
