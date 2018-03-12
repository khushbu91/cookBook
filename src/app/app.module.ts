import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent} from './demo/demo.component';
import { DragulaModule } from 'ng2-dragula';


const appRoutes: Routes = [

  { path: 'task', component: DemoComponent },

       { path: '',
    redirectTo: '/task',
    pathMatch: 'full'
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DragulaModule

  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {}
