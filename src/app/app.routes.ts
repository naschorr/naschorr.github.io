import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        title: undefined,
        loadChildren: () => import("./features/home/home.routes")
    },
    {
        path: "portfolio",
        title: "Portfolio",
        loadChildren: () => import("./features/projects/projects.routes")
    },
    {
        path: "pid",
        title: undefined,
        loadChildren: () => import("./features/pid-playground/pid-playground.routes")
    },
    {
        path: "**",
        redirectTo: ""
    },
];
