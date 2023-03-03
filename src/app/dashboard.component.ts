import { Component } from "@angular/core";

@Component({
    selector: 'app-dashboard-host',
    template: `
        <app-dashboard [isEditor]="false" src="assets/dashboard.yaml"></app-dashboard>
    `
})
export class DashboardHostComponent {
}