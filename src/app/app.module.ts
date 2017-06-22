import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { SignupServiceService } from './signup-service.service';


const appRoutes: Routes = [

      { path: 'signup', component: SignupComponentComponent },
      { path: 'signin',component: SigninComponentComponent },

       { path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponentComponent,
    SigninComponentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [SignupServiceService],
  bootstrap: [AppComponent]
})


export class AppModule {
  
 }
