import { Component, OnInit } from '@angular/core';
import { Company } from 'app/company/company';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }

  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
      .subscribe(() => this.getCompanies());
  }

}
