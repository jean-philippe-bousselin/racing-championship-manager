import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChampionshipsComponent } from './championships/championships.component';
import { AboutComponent } from './about/about.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent},
  { path: 'championships', component: ChampionshipsComponent,
    children: [
      { path: 'standings', component: StandingsComponent }
    ]
  },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
