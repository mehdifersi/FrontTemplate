import {Component, OnInit} from '@angular/core';
import {Customer} from "../models/demo-models";
import {MessageService} from "primeng/api";
import {DemoService} from "../service/demo-service";

@Component({
    selector: 'app-customer-service',
    templateUrl: './customer-service.component.html',
    styleUrls: ['./customer-service.component.scss']
})
export class CustomerServiceComponent implements OnInit {
    customers: Customer[];
    selectedCustomers: any;
    customerDialog: boolean = false;
    submitted: boolean;
    customer: Customer = {};
    deleteCustomerDialog: boolean;
    cols: any;
    deleteDialogue: boolean = false;
    dummyCustomer: Customer = {};
    private isAdd: boolean = false;
    private isUpdate: boolean = false;

    constructor(private messageService: MessageService, public demoService: DemoService) {
    }

    ngOnInit() {
        this.findCustomers();
    }

    saveCustomer(customer: Customer) {
        if (this.isAdd) {
            this.addCustomer(customer);
        } else if (this.isUpdate) {
            this.updateCustomer(customer);
        } else {
            console.log("invalid request")
        }

    }

    addCustomer(value: Customer) {
        this.demoService.addCustomer(value).subscribe(value1 => {
            this.findCustomers();
            this.customerDialog = false;
            this.dummyCustomer = {};
            this.isAdd = false;
        });

    }


    updateCustomer(customer: Customer) {
        this.demoService.updateCustomer(customer).subscribe(value => {
            this.findCustomers();
            this.dummyCustomer = {};
            this.customerDialog = false;
            this.isUpdate = false;
        })
    }

    deleteCustomer(id: number) {
        this.demoService.deleteCustomerById(id).subscribe(value => {
            if (value) {
                this.deleteDialogue = false;
                this.dummyCustomer = {};
                this.findCustomers();
            }
        })
    }

    hideDialog() {
        this.customerDialog = false;
        this.isUpdate = false;
        this.isAdd = false;
        this.dummyCustomer = {};
    }

    openDeleteDialogue(customer: Customer) {
        this.dummyCustomer = customer;
        this.deleteDialogue = true;
    }

    confirmDeleteSelected() {

    }

    openDialogue() {
        this.customerDialog = true;
    }

    openUpdateDialogue(customer: Customer) {
        this.dummyCustomer = {...customer};
        this.isAdd = false;
        this.isUpdate = true;
        this.openDialogue();
    }

    openAddDialogue() {
        this.isAdd = true;
        this.isUpdate = false;
        this.openDialogue();
    }

    cancelDelete() {
        this.dummyCustomer = {};
        this.deleteDialogue = false;
    }

    confirmDelete() {
        if (this.dummyCustomer != null) {
            this.deleteCustomer(this.dummyCustomer.id)
        }
    }

    confirmDeleteSelectedCustomers() {

    }

    private findCustomers() {
        this.demoService.findCustomers().subscribe(value => {
            this.customers = value;
        })
    }


}
