import { provideRoutes, Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "../components/default";
import { ProfileComponent } from "../components/profile";
import { UsersComponent } from "../components/users";

const appRoutes: Routes = [
    {
        path: "",
        component: DefaultComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "users",
        component: UsersComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
export const appRouterProviders = provideRoutes(appRoutes);