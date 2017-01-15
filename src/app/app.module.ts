import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ChampionshipSubmenuComponent} from './navbar/championship-submenu/championship-submenu.component';
import {HomeComponent} from './home/home.component';
import {ChampionshipsComponent} from './championships/list/championships.component';
import {AddChampionshipComponent} from './championships/add/add-championship.component';
import {StandingsComponent} from './championships/standings/standings.component';
import {AddSessionComponent} from './sessions/add/add-session.component';
import {AboutComponent} from './about/about.component';
import {ApiService} from './shared';
import {routing} from './app.routing';

import {removeNgStyles, createNewHosts} from '@angularclass/hmr';
import {ChampionshipService} from './shared/services/championship.service';
import {ConfigureChampionshipComponent} from './championships/configure/configure-championship.component';
import {EditChampionshipComponent} from './shared/forms/edit-championship/edit-championship.component';
import {ChampionshipDetailsComponent} from './championships/details/championship-details.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        ChampionshipSubmenuComponent,
        ChampionshipsComponent,
        AddChampionshipComponent,
        ConfigureChampionshipComponent,
        EditChampionshipComponent,
        ChampionshipDetailsComponent,
        HomeComponent,
        AboutComponent,
        StandingsComponent,
        AddSessionComponent
    ],
    providers: [
        ApiService,
        ChampionshipService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(public appRef: ApplicationRef) {
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
