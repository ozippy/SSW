import './core/rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Response, ResponseOptions, HttpModule, Http, XHRBackend } from '@angular/http';
import { RouterModule} from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyService } from './company/company.service';
import { CompanytableComponent } from './company/companytable/companytable.component';
import { CompanyeditComponent } from './company/companyedit/companyedit.component';

// import { MockBackend, MockConnection, BaseRequestOptions } from '@angular/http/testing';
// import { MockService } from './mockbackend';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanytableComponent,
    CompanyeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompanyService
    // BaseRequestOptions,
    // MockBackend,
    // MockService,
    // {
    //   provide: Http,
    //   deps: [MockBackend, BaseRequestOptions, XHRBackend, MockService],
    //   useFactory: (mockBackend, options, realBackend) => new Http(mockBackend, options)
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
