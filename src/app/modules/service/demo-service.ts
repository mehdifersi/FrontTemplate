import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BankAccount, Customer, Log} from "../models/demo-models";


@Injectable()
export class DemoService {
    // private endPointUrl: string = "http://localhost:8888";
    private customerService: string = "http://localhost:8083/customers";
    // private bankAccountService: string = "/ACCOUNT-SERVICE";
    private bankAccountService: string = "http://localhost:8082";
    private logService: string = "http://localhost:8085";
    // private logService: string = "/LOG-SERVICE";

    constructor(private http: HttpClient) {
    }


    public findCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customerService);
    }

    public addCustomer(value: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.customerService + '/add', value);
    }

    public updateCustomer(value: Customer): Observable<Customer> {
        return this.http.put<Customer>(this.customerService + '/update', value);
    }

    public findCustomerById(id: number): Observable<Customer> {
        return this.http.get<Customer>(this.customerService + `/customer/${id}`);
    }

    public deleteCustomerById(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.customerService + `/delete/${id}`);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    public findBankAccounts(): Observable<BankAccount[]> {
        return this.http.get<BankAccount[]>(this.bankAccountService + '/accounts');
    }

    public addBankAccount(value: BankAccount): Observable<BankAccount> {
        return this.http.post<BankAccount>(this.bankAccountService + '/add', value);
    }

    public updateBankAccount(value: BankAccount): Observable<BankAccount> {
        return this.http.put<BankAccount>(this.bankAccountService + '/update', value);
    }

    public findBankAccountById(id: number): Observable<BankAccount> {
        return this.http.get<BankAccount>(this.bankAccountService + `/bankAccount/${id}`);
    }

    public deleteBankAccountById(id: string): Observable<boolean> {
        return this.http.get<boolean>(this.bankAccountService + `/delete/${id}`);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    public findLogs(): Observable<Log[]> {
        return this.http.get<Log[]>(this.logService + '/logs');
    }

    public deleteLogs(indexes: number[]):Observable<boolean[]> {
        return this.http.post<boolean[]>(this.logService+"/logs/delete/all",indexes);
    }
}
