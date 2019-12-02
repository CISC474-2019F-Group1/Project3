import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule,
  MatExpansionModule, MatNativeDateModule, MatDatepickerModule,
  MatTabsModule, MatAutocompleteModule, MatListModule,
  MatSelectModule, MatIconModule,  MatSidenavModule, MatRadioModule, MatCheckboxModule,} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { RoutesComponent } from './routes/routes.component';
<<<<<<< HEAD
import { BuyComponent } from './buy/buy.component';
=======
import { GlobalService } from './global.service';
import { MainNavComponent } from './main-nav/main-nav.component';
>>>>>>> 079632165ab34f6be6e5f10353636748d369c15a


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutesComponent,
    MenuComponent,
    MenuComponent,
<<<<<<< HEAD
    BuyComponent,
=======
    LoginComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    MainNavComponent
>>>>>>> 079632165ab34f6be6e5f10353636748d369c15a
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    SignupDialogComponent
  ]
})
export class AppModule { }
