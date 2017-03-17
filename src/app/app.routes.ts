import { CompanyListComponent } from './company/company-list/company-list.component';
import { Routes} from '@angular/router';
import { CompanyeditComponent } from './company/companyedit/companyedit.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'company/list', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    { path: 'company/list', component: CompanyListComponent },
    { path: 'company/edit/:id', component: CompanyeditComponent }
];