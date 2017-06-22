import { Component} from '@angular/core';
import { SignupServiceService } from './signup-service.service';


@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})


export class SignupComponentComponent {
	constructor(private _signupService: SignupServiceService){}
	signup = {};
	ngOnInit(){
		console.log(this._signupService.say());
	}
	

}
