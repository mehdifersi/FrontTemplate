import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyDemoRoutingModule} from "./my-demo-routing.module";
import {CustomerServiceComponent} from "./customer-service/customer-service.component";
import {BankAccountServiceComponent} from "./bank-account-service/bank-account-service.component";
import {LogServiceComponent} from "./log-service/log-service.component";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RadioButtonModule} from "primeng/radiobutton";
import {RatingModule} from "primeng/rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {MessageService, SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {DemoService} from "./service/demo-service";

@NgModule({
    declarations: [
        CustomerServiceComponent,
        BankAccountServiceComponent,
        LogServiceComponent,
    ],
    providers:[
        MessageService,
        DemoService
    ],
    imports: [
        CommonModule,
        MyDemoRoutingModule,
        ButtonModule,
        DialogModule,
        DropdownModule,
        FileUploadModule,
        InputNumberModule,
        InputTextModule,
        InputTextareaModule,
        RadioButtonModule,
        RatingModule,
        ReactiveFormsModule,
        RippleModule,
        SharedModule,
        TableModule,
        ToastModule,
        ToolbarModule,
        FormsModule,
    ]
})
export class MyDemoModule {
}
