
import { Routes } from '@angular/router';
import { Router }   from '@angular/router';

import { UpLoginComponent } from './components/uplogin/uplogin.component';
import { UpWelcomeComponent } from './components/upwelcome/upwelcome.component';
import { UpPosComponent } from './components/uppos/uppos.component';
import { UpInventoryComponent } from './components/upinventory/upinventory.component';
import { UpDashboardComponent } from './components/updashboard/updashboard.component';

export const UpRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: UpLoginComponent },
    { path: 'welcome', component: UpWelcomeComponent },
    { path: 'pos', component: UpPosComponent },
    { path: 'inventory', component: UpInventoryComponent },
    { path: 'dashboard', component: UpDashboardComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

import { RouterModule }   from '@angular/router';