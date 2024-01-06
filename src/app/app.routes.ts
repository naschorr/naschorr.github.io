import { Routes } from '@angular/router';

// todo: custom title strategy?
export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadChildren: () => import("./features/home/home.routes")
    },
    {
        path: "projects",
        loadChildren: () => import("./features/projects/projects.routes")
    },
    {
        path: "pid",
        loadChildren: () => import("./features/pid-playground/pid-playground.routes")
    },
    {
        path: "**",
        redirectTo: ""
    },
];
