import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Company } from './company';


@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: Http) { }


  getCompanies() {
    const headers = new Headers({ 'content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.API_BASE}/company`, options)
      .do(response => console.log('response', response))
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  getCompany(companyId: number) {
    const headers = new Headers({ 'content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.API_BASE}/company/${companyId}`, options)
      .do(response => console.log('response', response))
      .map(data => data.json())
      .catch(this.errorHandler);
  }


  deleteCompany(companyId: number) {
    const headers = new Headers({ 'content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(`${this.API_BASE}/company/${companyId}`)
      .do(response => console.log('response', response))
      .map(data => data.json());
  }

  saveCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.API_BASE}/company`, JSON.stringify(company), options)
      .do(response => console.log('response', response))
      .map(data => data.json())
      .catch(this.errorHandler);
  }

updateCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.API_BASE}/company/${company.id}`, JSON.stringify(company), options)
      .do(response => console.log('response', response))
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  private errorHandler(error) {
    console.log('CUSTOM ERROR!!!', error);
    return Observable.throw(error);
  }

}
