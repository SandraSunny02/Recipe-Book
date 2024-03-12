import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]', select by attribute
  // selector: '.app-servers', select by className
  selector: 'app-servers', // select by element
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreated = false;
  serverName = '';
  serverID: number;
  serverStatus = 'No server created.'
  servers = [{serverName:'TestServer', serverID: 1}, {serverName: 'TestServer 2', serverID: 2}];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverStatus = 'Server was created! Server name is ' + this.serverName;
    this.servers.push({serverName: this.serverName, serverID: this.serverID});
    console.log(this.servers);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value ;
  }
}
