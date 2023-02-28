import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarDetailsComponent } from "./car-details/car-details.component";


const routers: Routes= [
    {path:'cars',component: CarListComponent},
    {path: 'car/:id', component: CarDetailsComponent},
    // {path: '', redirectTo: 'aplikacja', pathMatch:'full'},

]

@NgModule({
    imports:[RouterModule.forRoot(routers)],
    exports:[RouterModule],
})

export class AppRoutingModule{}