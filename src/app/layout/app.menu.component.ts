import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Demo',
                items: [
                    { label: 'Item1', icon: 'pi pi-fw pi-home', routerLink: ['/demo/customer'] },
                    { label: 'Item2 ', icon: 'pi pi-fw pi-home', routerLink: ['/demo/bank-account'] },
                    { label: 'Item3', icon: 'pi pi-fw pi-home', routerLink: ['/demo/log'] }
                ]
            },

        ];
    }
}
