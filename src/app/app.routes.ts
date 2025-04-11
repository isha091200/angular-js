import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [

    // {
    //     path: 'admin',
    //     component: AdminComponent
    // }
    {
        path: 'admin',
        loadComponent:()=>import('./admin/admin.component').then((c)=>c.AdminComponent)
    }
];
