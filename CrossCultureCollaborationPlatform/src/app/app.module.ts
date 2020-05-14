import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { RouterModule, Routes } from "@angular/router";
// MDB Angular Pro
import {
  CardsModule,
  WavesModule,
  ButtonsModule,
  CarouselModule,
  NavbarModule,
  ModalModule,
  TooltipModule,
  PopoverModule
} from "angular-bootstrap-md";
import { RecentpostComponent } from "./recentpost/recentpost.component";
import { SouvenirjumbotronComponent } from "./souvenirjumbotron/souvenirjumbotron.component";
import { FooterComponent } from "./footer/footer.component";
import { RegisterModalComponent } from "./register-modal/register-modal.component";
import { AlertComponent } from "./alert/alert.component";
import { SignupComponent } from "./signup/signup.component";
import { CustomerService } from "./customer.service";
import { HttpClientModule } from "@angular/common/http";
import { SouvenirItemsComponent } from "./souvenir-items/souvenir-items.component";
import { AboutComponent } from "./about/about.component";
import { HomeDisplayComponent } from "./home-display/home-display.component";
import { AuthGuardService } from "./auth-guard.service";
import { LogoutComponent } from "./logout/logout.component";
import { PaymeComponent } from "./payme/payme.component";
import { DiscoverCulturesComponent } from "./discover-cultures/discover-cultures.component";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { StatisticsComponent } from "./statistics/statistics.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
    canActivate: [AuthGuardService]
  },
  {
    path: "home",
    pathMatch: "full",
    component: HomeDisplayComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "app",
    component: AppComponent
  },
  {
    path: "login",
    component: SignupComponent
  },
  {
    path: "profile",
    component: UserprofileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "sovenir-items",
    pathMatch: "full",
    component: SouvenirItemsComponent,
    canActivate: [AuthGuardService]
  },
  { path: "about", component: AboutComponent },
  { path: "pay", component: PaymeComponent, canActivate: [AuthGuardService] },
  {
    path: "cultures/discover/:country",

    component: DiscoverCulturesComponent
  },
  { path: "cultures", pathMatch: "full", component: RecentpostComponent },
  { path: "statistics", pathMatch: "full", component: StatisticsComponent },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    TestimonialComponent,
    RecentpostComponent,
    SouvenirjumbotronComponent,
    FooterComponent,
    RegisterModalComponent,
    AlertComponent,
    SignupComponent,
    SouvenirItemsComponent,
    AboutComponent,
    HomeDisplayComponent,
    LogoutComponent,
    PaymeComponent,
    HomeDisplayComponent,
    DiscoverCulturesComponent,
    UserprofileComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CarouselModule,
    NavbarModule,
    ReactiveFormsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [CustomerService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
