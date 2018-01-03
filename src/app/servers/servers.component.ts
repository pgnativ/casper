import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  serverCreated: boolean = false;

  constructor() {
    /*setTimeout(() => {
      this.allowAddServer = true;
    }, 2000)*/
    //
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created ' + this.serverName;
    this.serverCreated = true;
    //this.serverName = '';
    // if (this.serverName === '') {
    //   console.log('empty');
    // } else {
    //
    // }
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
