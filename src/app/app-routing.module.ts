import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLayoutComponent} from "./layout/app.layout.component";

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {
        path: '', component: AppLayoutComponent
    }
    ,
    { path: 'home',component:AppLayoutComponent }]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload'
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
