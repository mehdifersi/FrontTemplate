import {Component, OnInit} from '@angular/core';
import {Log} from "../models/demo-models";
import {MessageService} from "primeng/api";
import {DemoService} from "../service/demo-service";

@Component({
    selector: 'app-log-service',
    templateUrl: './log-service.component.html',
    styleUrls: ['./log-service.component.scss']
})
export class LogServiceComponent implements OnInit {
    logs: Log[] = [];
    cols: any;
    selectedLogs: Log[] = [];

    constructor(private messageService: MessageService, public demoService: DemoService) {
    }

    ngOnInit() {
        this.findLogs();
    }

    deleteSelectedLogs() {
        let indexes: number[] = [];
        if (this.selectedLogs.length > 0) {
            for (let i = 0; i < this.selectedLogs.length; i++) {
                indexes.push(this.selectedLogs[i].id);
            }
        }
        this.demoService.deleteLogs(indexes).subscribe(value => {
            this.selectedLogs = [];
            this.findLogs();
        })

    }

    private findLogs() {
        this.demoService.findLogs().subscribe(value => {
            this.logs = value;
        });
    }
}
