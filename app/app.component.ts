import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/twitterComponent.html',
  providers: [AuthService]
}) 
export class AppComponent {
	title = 'Twitter Timeliine';
	constructor(private auth: AuthService){}
	login(){
		this.auth.login();
		this.title = 'Welcome';
	}
	logout(){
		this.auth.logout();
		this.title = 'Bye';
	}

}
