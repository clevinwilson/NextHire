import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/jobs', pathMatch: 'full' }, // Redirect to default page
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: 'jobs',
        loadChildren: () => import('./modules/jobs/jobs.module').then((m) => m.JobsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
