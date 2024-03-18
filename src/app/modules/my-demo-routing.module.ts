import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomerServiceComponent} from "./customer-service/customer-service.component";
import {BankAccountServiceComponent} from "./bank-account-service/bank-account-service.component";
import {LogServiceComponent} from "./log-service/log-service.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'customer', component: CustomerServiceComponent},
        {path: 'bank-account', component: BankAccountServiceComponent},
        {path: 'log', component: LogServiceComponent},
        {path: '**', redirectTo: '/notfound'}
    ])],
    exports: [RouterModule]
})
export class MyDemoRoutingModule {
}
