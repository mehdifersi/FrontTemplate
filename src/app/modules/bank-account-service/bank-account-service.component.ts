import {Component, OnInit} from '@angular/core';
import {BankAccount} from "../models/demo-models";
import {MessageService} from "primeng/api";
import {DemoService} from "../service/demo-service";

@Component({
    selector: 'app-bank-account-service',
    templateUrl: './bank-account-service.component.html',
    styleUrls: ['./bank-account-service.component.scss']
})
export class BankAccountServiceComponent implements OnInit {
    accounts: BankAccount[];
    accountDialog: boolean = false;
    submitted: boolean;
    account: BankAccount = {};
    deleteAccountDialog: boolean;
    cols: any;
    deleteDialogue: boolean = false;
    dummyAccount: BankAccount = {};
    private isAdd: boolean = false;
    private isUpdate: boolean = false;
    selectedAccounts: BankAccount[]=[];

    constructor(private messageService: MessageService, public demoService: DemoService) {
    }

    ngOnInit() {
        this.findAccounts();
    }

    saveAccount(account: BankAccount) {
        if (this.isAdd) {
            this.addAccount(account);
        } else if (this.isUpdate) {
            this.updateAccount(account);
        } else {
            console.log("invalid request")
        }

    }

    addAccount(value: BankAccount) {
        this.demoService.addBankAccount(value).subscribe(value1 => {
            this.findAccounts();
            this.accountDialog = false;
            this.dummyAccount = {};
            this.isAdd = false;
        });

    }


    updateAccount(account: BankAccount) {
        this.demoService.updateBankAccount(account).subscribe(value => {
            this.findAccounts();
            this.dummyAccount = {};
            this.accountDialog = false;
            this.isUpdate = false;
        })
    }

    deleteAccount(id: string) {
        this.demoService.deleteBankAccountById(id).subscribe(value => {
            if (value) {
                this.deleteDialogue = false;
                this.dummyAccount = {};
                this.findAccounts();
            }
        })
    }

    hideDialog() {
        this.accountDialog = false;
        this.isUpdate = false;
        this.isAdd = false;
        this.dummyAccount = {};
    }

    openDeleteDialogue(account: BankAccount) {
        this.dummyAccount = account;
        this.deleteDialogue = true;
    }

    confirmDeleteSelected() {

    }

    openDialogue() {
        this.accountDialog = true;
    }

    openUpdateDialogue(account: BankAccount) {
        this.dummyAccount = {...account};
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
        this.dummyAccount = {};
        this.deleteDialogue = false;
    }

    confirmDelete() {
        if (this.dummyAccount != null) {
            this.deleteAccount(this.dummyAccount.accountId)
        }
    }

    confirmDeleteSelectedAccounts() {

    }

    private findAccounts() {
        this.demoService.findBankAccounts().subscribe(value => {
            this.accounts = value;
        })
    }
}
