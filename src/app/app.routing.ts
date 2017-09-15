import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
} from './components';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: '**', component: HomeComponent },
];

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutUsComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule,
        HeaderComponent,
        FooterComponent,
    ]
})
export class AppRouting {}
