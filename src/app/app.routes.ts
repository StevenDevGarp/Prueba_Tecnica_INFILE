import { Routes } from '@angular/router';
import { authenticatedGuard } from './guards/authenticated.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'news-list',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('@components/login/login.component'),
        canActivate: [authGuard]
    },
    {
        path: 'news-list',
        loadComponent: () => import('./components/news-list/news-list.component').then(m => m.NewsListComponent),
        canActivate: [authenticatedGuard]
    },
    {
        path: 'news-details/:id',
        loadComponent: () => import('./components/news-details/news-details.component').then(m => m.NewsDetailsComponent),
        canActivate: [authenticatedGuard]
    },
    {
        path: 'register',
        loadComponent: () => import('@components/register/register.component').then(m => m.RegisterComponent)
    }
];
