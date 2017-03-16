import { Component, OnInit } from '@angular/core';
import { Company } from "app/company/company";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor() { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    this.companies = [
      { name: 'company 1', email: 'email 1', phone: 111 },
      { name: 'company 2', email: 'email 2', phone: 222 }
    ];
  }

}
