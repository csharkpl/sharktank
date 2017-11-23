import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { firebaseConfig } from "environments/firebaseConfig";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from "@app/shared";
import { LoginUserComponent } from "@app/login-user";
import { DisplayUserComponent } from "app/display-user/display-user.component";
import { RegisterUserComponent } from "app/register-user/register-user.component";
import { AlertModule } from "ngx-bootstrap";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page.component";
import { RegisterPageComponent } from "./pages/register-page.component";
import { AllInOnePageComponent } from "./pages/all-in-one-page.component";
import { LoginPageComponent } from "./pages/login-page.component";
import { LoggedInGuard } from "app/shared/logged-in-guard";
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { AddEmployeeComponent } from '@app/employee';
import { CoreModule } from '@app/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatListModule, MatIconModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule } from "@angular/material";
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component'

import * as firebase from 'firebase/app';

const routes: Routes = [
    { path: 'register', component: RegisterPageComponent },
    { path: 'all-in-one', component: AllInOnePageComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'dashboard', component: DashboardPageComponent, canActivate: [LoggedInGuard] },
    { path: 'employees', component: ListEmployeesComponent },
    { path: '', component: HomePageComponent },
    { path: '**', component: HomePageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        DisplayUserComponent,
        LoginUserComponent,
        RegisterUserComponent,
        ResetPasswordComponent,
        HomePageComponent,
        RegisterPageComponent,
        AllInOnePageComponent,
        LoginPageComponent,
        DashboardPageComponent,
        AddEmployeeComponent,
        ListEmployeesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        /* Material Animation */
        BrowserAnimationsModule,
        /* Material */
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        /* End Material */
        HttpModule,
        AlertModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, "fishtank"),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        RouterModule.forRoot(routes)
    ],
    providers: [AuthService, LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
