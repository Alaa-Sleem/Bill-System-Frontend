import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageComponent } from './components/manage/manage.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { TypeFormComponent } from './components/type-form/type-form.component';
import { TypeComponent } from './components/type/type.component';
import { TypeDetailsComponent } from './components/type-details/type-details.component';


export const routes: Routes = [
    {path: '', redirectTo:'Home',pathMatch:'full'},
    {path: 'Home',component:HomeComponent},
    {path: 'manage',component:ManageComponent},
    {path: 'invoice',component:InvoicesComponent},
    {path: 'reports',component:ReportsComponent},

    {path: 'manage/addCompany', component: CompanyFormComponent },
    {path: 'manage/addType', component: TypeFormComponent},
    {path: 'AddItem', component: AddItemsComponent},
    { path: 'Type', component: TypeComponent },
    { path: 'Type/:id', component: TypeDetailsComponent },
    { path: 'manage/editType/:id', component: TypeFormComponent },
    {path: '**',component:NotFoundComponent}




];
