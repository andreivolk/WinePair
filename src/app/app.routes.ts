import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ResultsComponent } from './results/results.component';
import { WineComponent } from './wine/wine.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'results/:search', component: ResultsComponent },
    { path: 'wine/:id', component: WineComponent },
    { path: 'search', component: SearchComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
});