export interface Customer {
    id?: number;
    firstName?: string;
    lastName?: string;

}

export interface BankAccount {
    accountId?: string;
    balance?: number;
    createdAt?: Date;
    currency?: string;
    accountType?: AccountType;
    customer?: Customer;
    customerId?: number;

}

export interface Log {
    id?: number,
    message?: string,
}

export enum AccountType {
    CURRENT_ACCOUNT = "Current_Account",
    SAVING_ACCOUNT = "Saving_Account"
}
