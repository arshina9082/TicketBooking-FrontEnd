import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AuthGuard } from "./auth/auth.guard";
import { TicketComponent } from "./ticket/ticket.component";
import { BusComponent } from "./bus/bus.component";
import { TrainComponent } from "./train/train.component";
import { FlightComponent } from "./flight/flight.component";


export const appRoutes: Routes = [
{
    path:'signup', component: UserComponent,
    children: [{path: '', component: SignUpComponent}]
},
{
    path:'login', component: UserComponent,
    children: [{path: '', component: SignInComponent}]
},
{
    path:'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
},
{
    path:'ticket', component: TicketComponent
},
{
    path:'bus', component: BusComponent
},
{
    path:'train', component: TrainComponent
},
{
    path:'flight', component: FlightComponent
},
];
