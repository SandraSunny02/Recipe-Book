import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

/**
 * Represents a server component.
 * This component is responsible for managing server-related functionality.
 */
export class ServerComponent {
    serverName: string;
    serverId: number;
    serverStatus: string = 'offline';
    displayDetails: boolean = false;
    clicksArray: string[] = [];

    constructor() {
        this.serverStatus = this.serverId > 50 ? 'online' : 'offline';
    }

    getColor() {
        if (this.serverStatus === 'offline') {
            return 'danger' 
        } else {
            return 'success' 
        }
    }

    startServer() {
        this.serverStatus = 'online';
    }

    stopServer() {
        this.serverStatus = 'offline';
    }

    onDisplayDetails() {
        this.displayDetails = !this.displayDetails;
        this.clicksArray.push(new Date().toLocaleString());
        return this.displayDetails;
    }
}